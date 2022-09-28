import React from "react";
import Nav from "./Nav";
import FirstSection from "./FirstSection";
import Features from "./Features";
import ProblemsItSolves from "./ProblemsItSolves";
import Teams from "./Teams";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <FirstSection />
      <Features />
      <ProblemsItSolves />
      <Teams />
      {children}
    </div>
  );
}
