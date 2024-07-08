import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3> Welcome to the Recipe Box</h3>
      <div className="flex flex-col items-center justify-center w-full max-w-5xl">
        <li> Add a recipe </li>
        <li> view a recipe </li>
        <li> Share my staples </li>
        <li> what are my friends</li>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
