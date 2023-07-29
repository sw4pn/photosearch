import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center p-4">
      <div className="">
        <h1 className="text-5xl font-extrabold max-w-2xl text-center leading-relaxed text-white">
          Discover over 2,000,000 free Stock Images
        </h1>
        <SearchBar />
        <div className="">/ / Tags</div>
      </div>
    </main>
  );
}
