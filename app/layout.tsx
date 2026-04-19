import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jitendra Pathak - Lead Engineer at Societe Generale",
  description:
    "Jitendra Pathak, Lead Engineer at Societe Generale, based in Bengaluru, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; upgrade-insecure-requests"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body>{children}</body>
    </html>
  );
}
