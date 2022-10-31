import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function FirstSection() {
  return (
    <div className="text-center bg-gradient-to-tr from-[#141515] via-[#141515] to-[#032a26]">
      <h1 className="text-9xl text-center text-white pt-52 pb-20 font-abc">
        SurfQL
      </h1>
      <div>
        <p className="text-5xl font-abc text-center text-[#5fefd0]  pb-10 font-normal">
          A Developer Tool for GraphQL
        </p>
        <div className="flex justify-center text-center ">
          <p className="font-abc text-2xl text-center text-white max-w-screen-lg mb-28 font-normal">
            SurfQL is an open source VS Code extension for GraphQL that was
            built with front-end developers in mind. We make it easy to write
            queries efficiently with our code completion tool-tip and Schema
            visualizer to present each property of the schema tree.
          </p>
        </div>
      </div>
      <h1 class="text-5xl text-white font-abc">Why teams need SurfQL</h1>
      <div class="flex flex-row justify-center items-end  space-x-9">
        <div class="bg-gradient-to-bl from-[#032a267f] to-[#181919] w-96 h-52 my-16 rounded-xl shadow-2x border-2 border-[#181919] hover:border-[#5fefd0] duration-300">
          <div class="flex mt-5 -mb-6 ml-5">
            <Image src={"/speed.png"} alt="Logo" width="50" height="50" />
          </div>
          <h1 class="font-abc indent-8 mb-5 text-left text-2xl text-[#5fefd0] my-10">
            Speed
          </h1>
          <p class="font-abc ml-8  text-left text-sm  text-white">
            Save time by writing GraphQL queries more quickly
          </p>
        </div>
        <div class="bg-gradient-to-bl from-[#032a2692] to-[#181919] w-96 h-52 my-16  rounded-xl shadow-2xl border-2 border-[#181919] hover:border-[#5fefd0] duration-300">
          <div class="flex mt-5 -mb-6 ml-5">
            <Image src={"/efficiency.png"} alt="Logo" width="50" height="50" />
          </div>
          <h1 class="font-abc indent-8 mb-5 text-left text-2xl text-[#5fefd0] my-10">
            Efficiency
          </h1>
          <p class="font-abc ml-8  text-left text-sm  text-white">
            Visualize your schema to prevent invalid query structures
          </p>
        </div>
        <div class="bg-gradient-to-bl from-[#032a267a] to-[#181919] w-96 h-52 my-16  rounded-xl shadow-2xl border-2 border-[#181919] hover:border-[#5fefd0] duration-300">
          <div class="flex mt-5 -mb-6 ml-5">
            <Image
              src={"/productivity.png"}
              alt="Logo"
              width="50"
              height="50"
            />
          </div>
          <h1 class="font-abc indent-8 mb-5 text-left text-2xl text-[#5fefd0] my-10">
            Productivity
          </h1>
          <p class="font-abc ml-8  text-left text-sm  text-white">
            Reduced friction between the front-end and back-end for development
            teams
          </p>
        </div>
      </div>
    </div>
  );
}
