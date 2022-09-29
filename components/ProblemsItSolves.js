import Head from "next/head";
import Image from "next/image";

export default function ProblemsItSolves() {
  return (
    <div className="flex flex-row justify-center p-40 text-3xl text-center">
      <h1>What Problem Does It Solve?</h1>

      <p className="flex max-w-xl text-xl mx-4">
        GraphQL is organized in terms of schema and type system and learning
        curve is steep. Currently Software engineers have limited tools to
        understand schema or write queries within their IDE.
      </p>
    </div>
  );
}
