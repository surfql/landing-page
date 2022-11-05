import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Features() {
  return (
    <div className="flex flex-col items-center pt-[150px] bg-[#141515]">
      <img
        src={"./bkgdshapes.png"}
        className="w-full h-full absolute mix-blend-overlay object-cover"
      />

      <div className="max-w-screen-lg object-contain md:flex pb-[150px] z-10">
        <Image
          src={"/newCodeCompletion.gif"}
          alt="Autocomplete Toolbar"
          width="4500"
          height="2500"
          objectFit={"contain"}
        />
        <span className="sm:ml-[100px] text-xl sm:text-5xl text-white text-left">
          Autocomplete Toolbar suggests the next query type to help you write
          code faster and minimize mistakes
        </span>
      </div>
      <div className="max-w-screen-lg  md:flex">
        <span className="mr-[100px]  text-xl sm:text-5xl sm:text-left text-white">
          The schema visualizer gives the developer visibility to data they can
          query
        </span>
        <Image
          src={"/newVisualizer.gif"}
          alt="Schema Visualizer"
          width="4500"
          height="2500"
          objectFit={"contain"}
        />
      </div>
    </div>
  );
}
