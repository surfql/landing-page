import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function FirstSection() {
  return (
    <div>
      <h1 className="text-7xl text-center my-20 font-semibold">SurfQL</h1>
      <h1 className="text-5xl text-center -my-8 font-normal">
        A Developer Tool for GraphQL
      </h1>
      <h1 className="text-4xl text-center text-blue-900 my-10 font-normal">
        Write queries easily without leaving your IDE
      </h1>
    </div>
  );
}
