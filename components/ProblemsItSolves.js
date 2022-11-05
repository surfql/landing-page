import Head from "next/head";
import Image from "next/image";

export default function ProblemsItSolves() {
  return (
    <div className="bg-[#141515] text-white">
      <div className="flex flex-wrap sm:flex-nowrap justify-center flex-row sm:p-40 mb-10 text-4xl text-center ">
        <h1>What Problem Does It Solve?</h1>

        <p className="sm:max-w-xl text-xl mx-4 sm:ml-10">
          GraphQL is organized in terms of schema and type system and learning
          curve is steep. Currently Software engineers have limited tools to
          understand schema or write queries within their IDE.
        </p>
      </div>
      <div className="flex justify-center">
        <ul className="gap-3 mr-1 sm:mr-20">
          <h1 className="text-2xl sm:text-5xl mb-1 sm:mb-10">With SurfQL</h1>
          <li className="flex justify-between">
            <h1 className="mr-4 mt-2 sm:mt-10  text-md sm:text-3xl">
              Code-Completion Suggestions
            </h1>
            <Image
              src={"./check.png"}
              alt="check"
              width="75"
              height="75"
              objectFit={"fill"}
            />
          </li>
          <li className="flex justify-between">
            <h1 className="mr-4 mt-2 sm:mt-10 text-md sm:text-3xl">
              Visual Schema
            </h1>
            <Image
              src={"./check.png"}
              alt="check"
              width="75"
              height="75"
              objectFit={"contain"}
            />
          </li>
          <li className="flex justify-between">
            <h1 className="mr-4 mt-2 sm:mt-10 text-md sm:text-3xl">
              Multi-Line Parsing
            </h1>
            <Image
              src={"./check.png"}
              alt="check"
              width="75"
              height="75"
              objectFit={"contain"}
            />
          </li>
          <li className="flex justify-between">
            <h1 className="mr-0 sm:mr-4 mt-2 sm:mt-10  text-md sm:text-3xl">
              Enhanced Accuracy <br className="sm:hidden" />
              for Queries
            </h1>
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
          <h1 className="text-2xl sm:text-5xl mb-1 sm:mb-10">Without SurfQL</h1>
          <li className="flex justify-between">
            <h1 className="mr-0 sm:mr-4 mt-8  text-md sm:text-3xl">
              Manual Typing of Queries
            </h1>
            <Image
              src={"./X.png"}
              alt="check"
              width="75"
              height="75"
              objectFit={"contain"}
            />
          </li>
          <li className="flex justify-between">
            <h1 className="mr-0 sm:mr-4 mt-8  text-md sm:text-3xl">
              Glancing Back at Schema
            </h1>
            <Image
              src={"./X.png"}
              alt="check"
              width="75"
              height="75"
              objectFit={"contain"}
            />
          </li>
          <li className="flex justify-between">
            <h1 className="mr-0 sm:mr-4 mt-8  text-md sm:text-3xl">
              Prone to Mistakes
            </h1>
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
