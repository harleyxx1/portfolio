import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const robotoMonoFont = localFont({
  src: [
    {
      path: "../public/fonts/RobotoMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/RobotoMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/RobotoMono-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/RobotoMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
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
      <body className={`${robotoMonoFont.className} antialiased min-w-[350px]`}>
        {children}
      </body>
    </html>
  );
}
