import Head from "next/head";
import Image from "next/image";

export default function Features() {
  return (
    <div className="flex flex-col content-center items-center">
      <div className="max-w-screen-lg md:flex">
        <span className="text-3xl ml-3">
          Autocomplete Toolbar suggests the next query type to help you write
          code faster and minimize mistakes
        </span>
        <Image
          className="max-w-sm"
          src={"/ss1.png"}
          alt="Autocomplete Toolbar "
          width="1186"
          height="418"
        />
      </div>
      <div className="max-w-screen-lg md:flex">
        <span className="text-3xl ml-3">
          The schema visualizer gives the developer visibility to data they can
          query
        </span>
        <Image
          src={"/ss2.png"}
          alt="Schema Visualizer"
          width="632"
          height="584"
        />
      </div>
    </div>
  );
}
