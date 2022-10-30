import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function FirstSection() {
  return (
    <div>
      <div className="grid grid-cols-2 mt-10">
        <div className="p-20">
          <h1 className="text-5xl font-semibold">
            GraphQL Queries <br />
            Made Simple
          </h1>
          <p className="mb-5">
            SurlQL allows you to write queries within your IDE without ever
            needing to leave your IDE.
          </p>
          <a
            className="bg-blue-400 font-bold px-8 py-3 rounded-xl text-white"
            src="https://github.com/oslabs-beta/SurfQL"
          >
            Contribute
          </a>
        </div>
        <div className="relative">
          <Image
            className="h-96"
            src={"/autocomplete.gif"}
            alt="Autocomplete Toolbar"
            layout="fill"
          />
        </div>
      </div>
      <h1 className="text-7xl text-center my-20 font-abc">SurfQL</h1>
      <p className="text-5xl text-center -my-8 font-normal">
        A Developer Tool for GraphQL
      </p>
      <p className="text-4xl text-center text-blue-900 my-10 font-normal">
        Write Queries easily without leaving your IDE
      </p>
    </div>
  );
}
