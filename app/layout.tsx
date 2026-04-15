import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const supreme = localFont({
  src: [
    {
      path: "../assets/fonts/supreme/Supreme-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/supreme/Supreme-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../assets/fonts/supreme/Supreme-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/supreme/Supreme-ExtralightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../assets/fonts/supreme/Supreme-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/supreme/Supreme-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/supreme/Supreme-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/supreme/Supreme-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/supreme/Supreme-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/supreme/Supreme-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/supreme/Supreme-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/supreme/Supreme-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/supreme/Supreme-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/supreme/Supreme-ExtraboldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-supreme",
  display: "swap",
});

const satoshi = localFont({
  src: [
    {
      path: "../assets/fonts/satoshi/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FOME",
  description: "Handmade Bag in Indonesia, From You & For You!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${supreme.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
