import Head from "next/head";
import Image from "next/image";

export default function ProblemsItSolves() {
  return (
    <div>
      <div className="flex flex-row justify-center p-40 text-3xl text-center">
        <h1>What Problem Does It Solve?</h1>

        <p className="flex max-w-xl text-xl mx-4">
          GraphQL is organized in terms of schema and type system and learning
          curve is steep. Currently Software engineers have limited tools to
          understand schema or write queries within their IDE.
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <div className="pl-40 text-center ">
            <h1 className="text-4xl font-bold mb-5">With SurfQL</h1>
            <ul>
              <li className="text-xl mb-3 font-semibold">
                Code-Complete Suggestions ✅{" "}
              </li>
              <li className="text-xl mb-3 font-semibold">Visual Schema ✅</li>
              <li className="text-xl mb-3 font-semibold">
                Multi-Line Parsing ✅
              </li>
              <li className="text-xl mb-3 font-semibold">
                Enhanced Accuracy for Queries ✅
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className=" pr-40 text-center">
            <h1 className="text-4xl mb-5 opacity-25">Without SurfQL</h1>
            <ul>
              <li>Manual Typing of Queries ❌</li>
              <li>Glancing Back at Schema ❌</li>
              <li>Prone to Mistakes ❌</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
