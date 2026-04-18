"use client";
import React, { useEffect, useRef } from "react";

// =====================
// VECTOR
// =====================
class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static sub(v1: Vector, v2: Vector) {
    return new Vector(v1.x - v2.x, v1.y - v2.y);
  }

  add(v: Vector) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  mult(n: number) {
    this.x *= n;
    this.y *= n;
    return this;
  }

  setXY(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this;
  }

  dist(v: Vector) {
    return Math.hypot(this.x - v.x, this.y - v.y);
  }
}

// =====================
// DOT
// =====================
class Dot {
  pos: Vector;
  oldPos: Vector;
  friction = 0.96;
  gravity = new Vector(0, 0.6);
  pinned = false;

  constructor(x: number, y: number) {
    this.pos = new Vector(x, y);
    this.oldPos = new Vector(x, y);
  }

  update(mouse: Vector, radius: number) {
    if (this.pinned) return;

    const vel = Vector.sub(this.pos, this.oldPos);
    this.oldPos.setXY(this.pos.x, this.pos.y);

    vel.mult(this.friction).add(this.gravity);
    this.pos.add(vel);

    // repel mouse
    const dx = mouse.x - this.pos.x;
    const dy = mouse.y - this.pos.y;
    const dist = Math.hypot(dx, dy);

    if (dist < radius) {
      const force = (radius - dist) / radius;
      this.pos.x -= dx * force * 0.2;
      this.pos.y -= dy * force * 0.2;
    }
  }
}

// =====================
// STICK
// =====================
class Stick {
  p1: Dot;
  p2: Dot;
  length: number;

  constructor(p1: Dot, p2: Dot) {
    this.p1 = p1;
    this.p2 = p2;
    this.length = p1.pos.dist(p2.pos);
  }

  update() {
    const dx = this.p2.pos.x - this.p1.pos.x;
    const dy = this.p2.pos.y - this.p1.pos.y;
    const dist = Math.hypot(dx, dy);

    const diff = ((this.length - dist) / dist) * 0.5;
    const ox = dx * diff;
    const oy = dy * diff;

    if (!this.p1.pinned) {
      this.p1.pos.x -= ox;
      this.p1.pos.y -= oy;
    }

    if (!this.p2.pinned) {
      this.p2.pos.x += ox;
      this.p2.pos.y += oy;
    }
  }
}

// =====================
// COMPONENT
// =====================
const HangingRope = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let dots: Dot[] = [];
    let sticks: Stick[] = [];

    const mouse = new Vector(-9999, -9999);
    const mouseRadius = 80;
    const gap = 14;

    // jumlah tiap benang
    const ropeConfigs = [22, 28];

    // =====================
    // INIT
    // =====================
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      dots = [];
      sticks = [];

      const positions = [
        canvas.width * 0.75,
        canvas.width * 0.82,
      ];

      positions.forEach((startX, ropeIndex) => {
        const localDots: Dot[] = [];
        const segments = ropeConfigs[ropeIndex];

        for (let i = 0; i < segments; i++) {
          const d = new Dot(startX, i * gap);

          if (i === 0) d.pinned = true;

          dots.push(d);
          localDots.push(d);

          if (i > 0) {
            sticks.push(
              new Stick(localDots[i - 1], localDots[i])
            );
          }
        }
      });
    };

    // =====================
    // DRAW THREAD
    // =====================
    const drawThread = (ropeDots: Dot[]) => {
      if (ropeDots.length < 2) return;

      // body benang
      ctx.beginPath();
      ctx.moveTo(ropeDots[0].pos.x, ropeDots[0].pos.y);

      for (let i = 1; i < ropeDots.length; i++) {
        ctx.lineTo(ropeDots[i].pos.x, ropeDots[i].pos.y);
      }

      ctx.strokeStyle = "#18181b";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // highlight tipis
      ctx.beginPath();
      ctx.moveTo(ropeDots[0].pos.x - 0.4, ropeDots[0].pos.y);

      for (let i = 1; i < ropeDots.length; i++) {
        ctx.lineTo(
          ropeDots[i].pos.x - 0.4,
          ropeDots[i].pos.y
        );
      }

      ctx.strokeStyle = "rgba(255,255,255,0.65)";
      ctx.lineWidth = 0.7;
      ctx.stroke();
    };

    // =====================
    // DRAW NEEDLE
    // =====================
    const drawNeedle = (ropeDots: Dot[]) => {
      const last = ropeDots[ropeDots.length - 1];
      const prev = ropeDots[ropeDots.length - 2];

      const angle = Math.atan2(
        last.pos.y - prev.pos.y,
        last.pos.x - prev.pos.x
      );

      ctx.save();
      ctx.translate(last.pos.x, last.pos.y);
      ctx.rotate(angle);

      // badan jarum
      ctx.beginPath();
      ctx.roundRect(0, -3, 32, 6, 3);
      ctx.fillStyle = "#c8c8c8";
      ctx.fill();

      // ujung tajam
      ctx.beginPath();
      ctx.moveTo(32, 0);
      ctx.lineTo(26, -3);
      ctx.lineTo(26, 3);
      ctx.closePath();
      ctx.fillStyle = "#efefef";
      ctx.fill();

      // lubang jarum
      ctx.beginPath();
      ctx.ellipse(5, 0, 2.2, 1.4, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "#777";
      ctx.lineWidth = 1;
      ctx.stroke();

      // shine
      ctx.beginPath();
      ctx.moveTo(2, -1);
      ctx.lineTo(26, -1);
      ctx.strokeStyle = "rgba(255,255,255,0.55)";
      ctx.lineWidth = 0.7;
      ctx.stroke();

      ctx.restore();
    };

    // =====================
    // ANIMATE
    // =====================
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((d) =>
        d.update(mouse, mouseRadius)
      );

      for (let i = 0; i < 8; i++) {
        sticks.forEach((s) => s.update());
      }

      let currentIndex = 0;

      ropeConfigs.forEach((count) => {
        const ropeDots = dots.slice(
          currentIndex,
          currentIndex + count
        );

        drawThread(ropeDots);
        drawNeedle(ropeDots);

        currentIndex += count;
      });

      requestAnimationFrame(animate);
    };

    // =====================
    // EVENTS
    // =====================
    const move = (e: MouseEvent) => {
      mouse.setXY(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("resize", init);

    init();
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
    />
  );
};

export default HangingRope;