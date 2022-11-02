import Head from "next/head";
import Image from "next/image";

export default function ProblemsItSolves() {
  return (
    <div className="bg-[#141515] text-white">
      <div className="flex justify-center flex-row p-40 text-4xl text-center ">
        <h1>What Problem Does It Solve?</h1>

        <p className="flex max-w-xl text-xl ml-10">
          GraphQL is organized in terms of schema and type system and learning
          curve is steep. Currently Software engineers have limited tools to
          understand schema or write queries within their IDE.
        </p>
      </div>
      <div className="flex justify-center">
        <ul className="gap-3 mr-20">
          <h1 className="text-5xl mb-10">With SurfQL</h1>
          <li className="flex">
            <h1 className="mr-4 mt-10 text-2xl">Code-Completion Suggestions</h1>
            <Image
              src={"./check.png"}
              alt="check"
              width="75"
              height="75"
              objectFit={"contain"}
            />
          </li>
          <li className="flex">
            <h1 className="mr-4 mt-10 text-2xl">Visual Schema</h1>
            <Image
              src={"./check.png"}
              alt="check"
              width="75"
              height="75"
              objectFit={"contain"}
            />
          </li>
          <li className="flex">
            <h1 className="mr-4 mt-10 text-2xl">Multi-Line Parsing</h1>
            <Image
              src={"./check.png"}
              alt="check"
              width="75"
              height="75"
              objectFit={"contain"}
            />
          </li>
          <li className="flex">
            <h1 className="mr-4 mt-10 text-2xl">Enhanced Accuracy for Queries</h1>
            <Image
              src={"./check.png"}
              alt="check"
              width="75"
              height="75"
              objectFit={"contain"}
            />
          </li>
        </ul>

        <ul className="gap-3 ">
          <h1 className="text-5xl mb-10">Without SurfQL</h1>
          <li className="flex">
            <h1 className="mr-4 mt-8 text-2xl">Manual Typing of Queries</h1>
            <Image
              src={"./X.png"}
              alt="check"
              width="75"
              height="75"
              objectFit={"contain"}
            />
          </li>
          <li className="flex">
            <h1 className="mr-4 mt-8 text-2xl">Glancing Back at Schema</h1>
            <Image
              src={"./X.png"}
              alt="check"
              width="75"
              height="75"
              objectFit={"contain"}
            />
          </li>
          <li className="flex">
            <h1 className="mr-4 mt-8 text-2xl">Prone to Mistakes</h1>
            <Image
              src={"./X.png"}
              alt="check"
              width="75"
              height="75"
              objectFit={"contain"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
