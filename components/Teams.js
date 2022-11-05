import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TeammateData from "../data/teammates";
export default function Teams() {
  return (
    <div className="p-20 text-center text-white bg-[#141515]">
      <div>
        <hr className="bg-slate-600 mb-10" />
        <h1 className="text-5xl font-bold">Meet the Team</h1>
        <ul className="flex flex-row flex-wrap justify-center items-end space-y-9 space-x-9">
          {TeammateData.map((contributor) => (
            <li
              key="{contributor.id}"
              className="bg-gradient-to-bl from-[#032a267f] to-[#181919] p-8 rounded-2xl drop-shadow-lg"
            >
              <Image
                alt="team picture"
                className="object-fit rounded-md mb-4"
                src={contributor.pic}
                width={"222%"}
                height={"150%"}
              />
              <h3 className="font-bold text-yellow-100 text-lg mb-3">
                {contributor.name}
              </h3>
              <h3 className="text-lg text-blue-200 mb-2">Software Engineer</h3>
              <p className="text-cyan-100">
                <a href={contributor.github}>
                  Github <i aria-hidden="true" className="fab fa-github"></i>
                </a>
                <br />
                <a href={contributor.linkedin}>
                  LinkedIn{" "}
                  <i aria-hidden="true" className="fab fa-linkedin"></i>
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <p className="p-10">Copyright 2022 All Rights Reserved.</p>
    </div>
  );
}
