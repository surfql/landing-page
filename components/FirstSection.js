import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function FirstSection() {
  return (
    <div>
      <h1 className="text-7xl text-center my-20 font-abc">SurfQL</h1>
      <p className="text-5xl text-center -my-8 font-normal">
        A Developer Tool for GraphQL
      </p>
      <p className="text-4xl text-center text-blue-900 my-10 font-normal">
        Write Queries easily without leaving your IDE
      </p>
    </div>
  );
}
