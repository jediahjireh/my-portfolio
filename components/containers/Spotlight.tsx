import React from "react";

export default function Spotlight({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-red-500 blur-3xl opacity-30 rounded-full"></div>
      {children}
    </div>
  );
}
