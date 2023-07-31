import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center p-4">
      <div className="">
        <h1 className="text-2xl md:text-5xl xl:text-6xl xl:leading-relaxed font-extrabold  md:max-w-2xl xl:max-w-4xl text-center leading-relaxed md:leading-relaxed text-white text-shadow-sm md:text-shadow p-2">
          Discover over 2,000,000 free Stock Images
        </h1>
        <div className="flex justify-center items-center pt-12">
          <SearchBar />
        </div>
        <div className="flex justify-center items-center py-6">
          <div className=" shadow-inset backdrop-blur-sm bg-neutral-500/30 text-neutral-300 py-2 px-5 rounded-md flex justify-start gap-3">
            <span className="text-white">Trending : </span>
            <p>
              {" "}
              <Link href="/search/nature" className="hover:underline">
                Nature
              </Link>
              ,{" "}
              <Link href="/search/nature" className="hover:underline">
                summer
              </Link>
              ,{" "}
              <Link href="/search/nature" className="hover:underline">
                flower
              </Link>
              ,{" "}
              <Link href="/search/nature" className="hover:underline">
                love
              </Link>
              ,{" "}
              <Link href="/search/nature" className="hover:underline">
                water
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
