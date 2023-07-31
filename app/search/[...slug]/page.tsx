import Results from "@/components/Results";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";

const API_KEY = process.env.PIXABAY_API_KEY;

async function getImages(tag: string) {
  try {
    const res = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${tag}&page=1`
    );

    if (!res.ok) {
      // Fallback image object

      return undefined;
    }

    return res.json();
  } catch (err: any) {
    return undefined;
  }
}

const getTags = (hits: any[]): Array<string> => {
  const uniqueTagsSet = new Set<string>();
  for (const hit of hits) {
    const tags: Array<string> = hit.tags.split(", ");
    for (const tag of tags) {
      uniqueTagsSet.add(tag);
      if (uniqueTagsSet.size >= 10) {
        break;
      }
    }
    if (uniqueTagsSet.size >= 10) {
      break;
    }
  }

  // Convert the set of unique tags to an array and update the state
  return [...uniqueTagsSet];
};

export default async function SearchPage({
  params,
}: {
  params: { slug: [word: string, id: string] };
}) {
  const word = decodeURIComponent(params.slug[0]);
  const page = params.slug[1];

  const data = await getImages(word);

  const tags = getTags(data.hits || []);

  return (
    <>
      <main className="flex items-center justify-center">
        <div className="">
          <SearchBar />
          <h1 className="text-2xl md:text-4xl font-bold   text-center  text-white text-shadow-sm py-10">
            Results: {word}{" "}
          </h1>
        </div>
      </main>
      <section className="bg-neutral-200 p-8 flex justify-center items-center flex-wrap overflow-hidden gap-4 ">
        {tags.map((name, i) => (
          <Link key={i} href={`/search/${name}`}>
            <span className="p-3 hover:bg-neutral-300 cursor-pointer transition ease-in duration-150 border border-slate-400 rounded-md text-center">
              {name}
            </span>
          </Link>
        ))}
      </section>
      <section className="bg-white w-full h-full px-8 py-10 overflow-hidden">
        <Results data={data.hits} />
      </section>
    </>
  );
}
