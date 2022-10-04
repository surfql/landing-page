import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Teams() {
  return (
    <div className="p-20 text-center">
      <div>
        <h1 className="text-3xl">Meet the Team</h1>
        <div className="w-60"></div>
        <ul className="flex flex-row justify-center items-end space-y-9 space-x-9">
          <li>
            <Image
              alt="team picture"
              className="object-fit rounded-xl"
              src={"../picEthan.png"}
              width={"100%"}
              height={"100%"}
            />
            <h3>Ethan McRae</h3>
            <p>
              Github
              <br />
              LinkedIn
            </p>
          </li>
          <li>
            <Image
              alt="team picture"
              className="w-24 object-fit rounded-xl"
              src={"../picTristan.png"}
              width={"100%"}
              height={"100%"}
            />
            <h3>Tristan Onfroy</h3>
            <p>
              Github
              <br />
              LinkedIn
            </p>
          </li>
          <li>
            <div className="w-22">
              <Image
                className="object-fit rounded-xl"
                alt="team picture"
                src={"../picJoy.png"}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <h3>Joy Zhang</h3>
            <p>
              Github
              <br />
              LinkedIn
            </p>
          </li>
          <li>
            <Image
              alt="team picture"
              className="object-fit rounded-xl"
              src={"../picSteve.png"}
              width={"100%"}
              height={"100%"}
            />
            <h3>Steve B</h3>
            <p>
              Github
              <br />
              LinkedIn
            </p>
          </li>
          <li>
            <Image
              alt="team picture"
              className="object-fit rounded-xl"
              src={"../picDwayne.png"}
              width={"100%"}
              height={"100%"}
            />
            <h3>Dwayne Neckles</h3>
            <p>
              Github
              <br />
              LinkedIn
            </p>
          </li>
        </ul>
      </div>
      <p className="p-10">Copyright 2022 All Rights Reserved.</p>
    </div>
  );
}
