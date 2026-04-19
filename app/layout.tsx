import type { Metadata } from "next";
import { UiPreferencesProvider } from "@/src/presentation/providers/ui-preferences-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jitendra Pathak | Work Portfolio",
  description:
    "Card-based portfolio of Jitendra Pathak with 10+ years in banking, transport, tours, SEO, business development, and 5 years of entrepreneurship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <UiPreferencesProvider>{children}</UiPreferencesProvider>
      </body>
    </html>
  );
}
