import React from "react";
import NavigationBar from "@/components/NavigationBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col mx-auto max-w-7xl h-screen">
      <NavigationBar />
      {children}
    </main>
  );
};

export default layout;
