import Head from "next/head";
import Image from "next/image";

export default function Features() {
  return (
    <div className="flex flex-col content-center items-center">
      <div className="max-w-screen-lg md:flex  py-10">
        <span className="text-3xl ml-3">
          Autocomplete Toolbar suggests the next query type to help you write
          code faster and minimize mistakes
        </span>
        <Image
          className="max-w-sm"
          src={"/autocomplete.gif"}
          alt="Autocomplete Toolbar"
          width="571"
          height="361"
        />
      </div>
      <div className="max-w-screen-lg md:flex py-10">
        <span className="text-3xl ml-3">
          The schema visualizer gives the developer visibility to data they can
          query
        </span>
        <Image
          src={"/visualizer.gif"}
          alt="Schema Visualizer"
          width="600"
          height="678"
        />
      </div>
    </div>
  );
}
