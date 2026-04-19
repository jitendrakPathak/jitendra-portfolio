import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jitendra Pathak | Engineering Leader & Entrepreneur",
  description:
    "Portfolio of Jitendra Pathak: engineering leadership, quant finance systems, and entrepreneur-led growth execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
