"use client";
import { Search } from "lucide-react";
import { Separator } from "./ui/Separator";
import { Button } from "./ui/Button";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [error, setError] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchItem.length > 2) {
      router.push(`/search/${searchItem}`);
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === "") {
      setError("Item should not be empty.");
    } else if (val.length < 3) {
      setError("Enter at least 3 characters.");
    } else {
      setError("");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="shadow-inset flex justify-between items-center py-3 px-2 sm:px-4 gap-4 bg-neutral-500/30 backdrop-blur-md rounded-lg">
          <Search size={22} color="white" />
          <Separator orientation="vertical" className="h-9 w-[1.5px]" />
          <input
            type="text"
            className="flex-1 w-40 sm:w-80 md:w-96 h-9 p-1.5 font-semibold bg-neutral-900/10 rounded-md placeholder:text-neutral-200 outline-none text-white"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            onBlur={handleBlur}
            placeholder="Search"
          />

          <div className="text-white">
            <Button
              variant="outline"
              className="px-3 border-[3px] h-8 tracking-widest font-semibold"
              onClick={handleSearch}
              disabled={searchItem.length < 3}>
              GO!
            </Button>
          </div>
        </div>
        {error && error !== "" && (
          <div className="text-center ">
            <span className="bg-neutral-800/80 backdrop-blur-md text-yellow-500 px-2 py-1">
              {error}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
