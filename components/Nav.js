import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="absolute w-full py-4 pl-20 font-abc text-white flex justify-between">
      <div>
        <Image src={"/surfql.png"} alt="Logo" width="65" height="65" />
        <span className="text-3xl ml-3">SurfQL</span>
      </div>

      <div className="flex items-center pr-10">
        <div className="btn ml-4 text-lg py-1 px-1 undrlne">
          <Link href="">
            <a target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </Link>
        </div>
        <div className="btn ml-4 text-lg py-1 px-1 undrlne">
          <Link href="https://github.com/oslabs-beta/SurfQL">
            <a target="_blank" rel="noreferrer">
              Github
            </a>
          </Link>
        </div>
        <div className="btn ml-4 text-lg py-1 px-1 undrlne">
          <Link href="https://marketplace.visualstudio.com/items?itemName=SurfQL.surfql">
            <a target="_blank" rel="noreferrer">
              Download VS Code Extension
            </a>
          </Link>
        </div>
      </div>
      <div className="fixed  bottom-0 right-0 p-4 z-10">
      <footer className=" p-4 w-auto rounded-lg text-2xl bg-[#5fefd0] text-black hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white ">
        <Link href="https://marketplace.visualstudio.com/items?itemName=SurfQL.surfql">
          <a target="_blank" rel="noreferrer">
          Download the extension
          </a>
        </Link>

      </footer>
      </div>
    </div>
  );
}
