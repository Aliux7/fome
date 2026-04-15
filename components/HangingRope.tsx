"use client";
import React, { useEffect, useRef } from "react";

// --- Physics Logic ---
class Vector {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x || 0;
    this.y = y || 0;
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
    return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2);
  }
}

class Dot {
  pos: Vector;
  oldPos: Vector;
  friction: number;
  gravity: Vector;
  pinned: boolean;
  constructor(x: number, y: number) {
    this.pos = new Vector(x, y);
    this.oldPos = new Vector(x, y);
    this.friction = 0.96;
    this.gravity = new Vector(0, 0.8);
    this.pinned = false;
  }
  update(mousePos: Vector, mouseRadius: number) {
    if (this.pinned) return;
    let vel = Vector.sub(this.pos, this.oldPos);
    this.oldPos.setXY(this.pos.x, this.pos.y);
    vel.mult(this.friction).add(this.gravity);
    this.pos.add(vel);

    const dx = mousePos.x - this.pos.x;
    const dy = mousePos.y - this.pos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < mouseRadius) {
      const force = (mouseRadius - dist) / mouseRadius;
      this.pos.x -= dx * force * 0.2;
      this.pos.y -= dy * force * 0.2;
    }
  }
}

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
    const dist = Math.sqrt(dx * dx + dy * dy);
    const diff = ((this.length - dist) / dist) * 0.5;
    const offset = { x: dx * diff, y: dy * diff };
    if (!this.p1.pinned) {
      this.p1.pos.x -= offset.x;
      this.p1.pos.y -= offset.y;
    }
    if (!this.p2.pinned) {
      this.p2.pos.x += offset.x;
      this.p2.pos.y += offset.y;
    }
  }
}

const HangingRope = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: Dot[] = [];
    let sticks: Stick[] = [];
    const mouse = new Vector(-1000, -1000);
    const mouseRadius = 80;
    const segments = 20;
    const gap = 18;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dots = [];
      sticks = [];

      const positions = [canvas.width * 0.75, canvas.width * 0.8];

      positions.forEach((startX, index) => {
        const localDots: Dot[] = [];
        const ropeSegments = index === 1 ? 25 : 20;
        for (let i = 0; i < ropeSegments; i++) {
          const dot = new Dot(startX, i * gap);
          if (i === 0) dot.pinned = true;
          localDots.push(dot);
          dots.push(dot);
          if (i > 0) sticks.push(new Stick(localDots[i - 1], localDots[i]));
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((d) => d.update(mouse, mouseRadius));
      for (let i = 0; i < 10; i++) sticks.forEach((s) => s.update());

      const ropeConfigs = [20, 25];
      let currentDotIndex = 0;

      ropeConfigs.forEach((count) => {
        const ropeDots = dots.slice(currentDotIndex, currentDotIndex + count);
        if (ropeDots.length < 2) return;

        ctx.beginPath();
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.moveTo(ropeDots[0].pos.x + 4, ropeDots[0].pos.y + 2);
        for (let j = 1; j < count; j++) {
          ctx.lineTo(ropeDots[j].pos.x + 4, ropeDots[j].pos.y + 2);
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "#18181b";
        ctx.lineWidth = 8;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.moveTo(ropeDots[0].pos.x, ropeDots[0].pos.y);
        for (let j = 1; j < count; j++) {
          ctx.lineTo(ropeDots[j].pos.x, ropeDots[j].pos.y);
        }
        ctx.stroke();

        const last = ropeDots[count - 1];
        const prev = ropeDots[count - 2];
        const angle = Math.atan2(
          last.pos.y - prev.pos.y,
          last.pos.x - prev.pos.x,
        );

        ctx.save();
        ctx.translate(last.pos.x, last.pos.y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.roundRect(0, -5, 18, 10, 2);
        ctx.fill();
        ctx.restore();

        currentDotIndex += count;
      });
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) =>
      mouse.setXY(e.clientX, e.clientY);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", init);

    init();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
  );
};

export default HangingRope;
