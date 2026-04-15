import type { Metadata, Viewport } from "next";

import "./globals.css";
import { brandSeo, brandThemeStyle, activeBrand } from "@/content/brand";

export const metadata: Metadata = {
  title: {
    default: brandSeo.metadataTitleDefault,
    template: brandSeo.metadataTitleTemplate,
  },
  description: brandSeo.metadataDescription,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: activeBrand.theme.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body
        className="flex min-h-full flex-col bg-background font-sans text-foreground"
        style={brandThemeStyle}
      >
        {children}
      </body>
    </html>
  );
}
