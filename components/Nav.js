import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="py-4 px-8 bg-gray-700 text-white flex justify-between">
      <div>
        <Image src={"/surfql.png"} width="65" height="65" />
        <span className="text-3xl ml-3">SurfQL</span>
      </div>

      <div className="flex items-center">
        <div className="btn ml-4 text-lg py-1 px-1">
          <Link href="">LinkedIn</Link>
        </div>
        <div className="btn ml-4 text-lg py-1 px-1">
          <Link href="">GitHub</Link>
        </div>
        <div className="btn ml-4 text-lg py-1 px-1">
          <Link href="">Download VSCode Extension</Link>
        </div>
      </div>
    </div>
  );
}
