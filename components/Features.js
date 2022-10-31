import Head from "next/head";
import Image from "next/image";

export default function Features() {
  return (
    <div className="flex flex-col items-center pt-[150px] bg-[#141515]">
      <div class="max-w-screen-lg object-contain md:flex pb-[150px]">
        <Image
          src={"/codeCompletion.gif"}
          alt="Autocomplete Toolbar"
          width="5000"
          height="1000"
          objectFit={"contain"}
        />
        <span class="ml-[100px] text-5xl text-white">
          Autocomplete Toolbar suggests the next query type to help you write
          code faster and minimize mistakes
        </span>
      </div>
      <div class="max-w-screen-lg md:flex ">
        <span class="mr-[100px] -ml-10 text-5xl text-left text-white">
          The schema visualizer gives the developer visibility to data they can
          query
        </span>
        <Image
          src={"/visualizer.gif"}
          alt="Schema Visualizer"
          width="4500"
          height="2500"
          objectFit={"contain"}
        />
      </div>
    </div>
  );
}
