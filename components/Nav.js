import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="absolute w-full py-4 px-8 pl-20 font-abc text-white flex justify-between">
      <div className="sticky">
        <Image src={"/surfql.png"} alt="Logo" width="65" height="65" />
        <span className="text-3xl ml-3">SurfQL</span>
      </div>

      <div className="flex items-center pr-10">
        <div className="btn ml-4 text-lg py-1 px-1 undrlne">
          <Link href="">
            <a target="_blank">LinkedIn</a>
            </Link>
        </div>
        <div className="btn ml-4 text-lg py-1 px-1 undrlne">
          <Link href="https://github.com/oslabs-beta/SurfQL">
            <a target="_blank">Github</a></Link>
        </div>
        <div className="btn ml-4 text-lg py-1 px-1 undrlne">
          <Link href="https://marketplace.visualstudio.com/items?itemName=SurfQL.surfql">
            <a target="_blank">Download VS Code Extension</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
