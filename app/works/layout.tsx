import React from "react";
import NavigationBar from "@/components/NavigationBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "dc. | Works",
  description: "A portfolio of Ding Harley Catubag made using Next.js",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto max-w-7xl">
      <NavigationBar />
      {children}
    </main>
  );
};

export default layout;
