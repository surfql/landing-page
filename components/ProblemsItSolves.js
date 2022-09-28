import Head from "next/head";
import Image from "next/image";

export default function ProblemsItSolves() {
  return (
    <div className="p-20 text-3xl text-center">
      <div>
        <h1>What Problem Does It Solve?</h1>
        <div className="flex p-10 text-xl">
          <p>
            GraphQL is organized in terms of schema and type system and learning
            curve is steep. Currently Software engineers have limited tools to
            understand schema or write queries within their IDE.
          </p>
          <p>
            GraphQL is a query language for APIs and a runtime for fulfilling
            those queries with your existing data. It is an alternative to REST
            API which allows engineers to query exactly what they needed.
          </p>
        </div>
      </div>
    </div>
  );
}
