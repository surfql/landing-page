import React from "react";
import Nav from "./Nav";
import FirstSection from "./FirstSection";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <FirstSection />
      {children}
    </div>
  );
}
