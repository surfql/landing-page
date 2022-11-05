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
        <span className="sm:ml-[100px] text-xl sm:text-4xl text-white text-left">
          SurfQL IntelliSense shows the available fields as you build up your
          query and provides completion template plus helper info to reduce the
          errors in your queries.
        </span>
      </div>
      <div className="max-w-screen-lg md:flex">
        <span className="mr-[100px] text-xl sm:text-3xl sm:text-left text-white">
          SurfQL visualizer presents the pre-defined GraphQL type objects and
          the hierarchy of the schema file, reducing the overhead to comprehend
          the relationship of the objects.
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
