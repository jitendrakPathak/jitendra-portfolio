import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jitendra Pathak | Portfolio",
  description:
    "Portfolio of Jitendra Pathak with 10+ years across banking, transport, tours, SEO, business development, and 5 years of entrepreneurship.",
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
