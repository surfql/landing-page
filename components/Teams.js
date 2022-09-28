import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Teams() {
  return (
    <div className="p-20 text-center">
      <div>
        <h1 className="text-3xl">Meet the Team</h1>
        <ul className="flex flex-row justify-center items-end space-y-9 space-x-9">
          <li>
            <Image
              alt="team picture"
              src={"../placeholder.png"}
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
              src={"../placeholder.png"}
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
            <Image
              alt="team picture"
              src={"../placeholder.png"}
              width={"100%"}
              height={"100%"}
            />
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
              src={"../placeholder.png"}
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
              src={"../placeholder.png"}
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
    </div>
  );
}
