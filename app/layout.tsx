import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const interFont = localFont({
  src: [
    { path: "/fonts/Inter-Regular.otf", weight: "400", style: "normal" },
    { path: "/fonts/Inter-Medium.otf", weight: "500", style: "normal" },
    { path: "/fonts/Inter-SemiBold.otf", weight: "600", style: "normal" },
    { path: "/fonts/Inter-Bold.otf", weight: "700", style: "normal" },
    { path: "/fonts/Inter-ExtraBold.otf", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "dc. | Portfolio",
  description: "A portfolio of Ding Harley Catubag made using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${interFont.className} antialiased min-w-[350px]`}>
        {children}
      </body>
    </html>
  );
}
