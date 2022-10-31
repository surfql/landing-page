import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="absolute w-full py-4 px-8 pl-20 font-abc text-white flex justify-between">
      <div>
        <Image src={"/surfql.png"} alt="Logo" width="65" height="65" />
        <span className="text-3xl ml-3">SurfQL</span>
      </div>

      <div className="flex items-center pr-10">
        <div className="btn ml-4 text-lg py-1 px-1 undrlne">
          <Link href="">LinkedIn</Link>
        </div>
        <div className="btn ml-4 text-lg py-1 px-1 undrlne">
          <Link href="">GitHub</Link>
        </div>
        <div className="btn ml-4 text-lg py-1 px-1 undrlne">
          <Link href="">Download VSCode Extension</Link>
        </div>
      </div>
    </div>
  );
}
