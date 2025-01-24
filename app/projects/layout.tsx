import React from "react";
import NavigationBar from "@/components/NavigationBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto max-w-7xl">
      <NavigationBar />
      {children}
    </main>
  );
};

export default layout;
