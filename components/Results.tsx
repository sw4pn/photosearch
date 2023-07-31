"use client";
import { API_KEY } from "@/app/layout";
import Link from "next/link";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import Thumbnail from "./Thumbnail";
import { useRouter } from "next/router";
import ImageModal from "./ImageModal";

const Results = ({ data }: { data: any }) => {
  const [images, setImages] = useState(data);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(2);

  // const { query } = useRouter();

  const getMoreImages = async () => {
    // Calls Api to get more images after scrolled to end of page
    const data = await (
      await fetch(
        `/api/images/nature/${pageNumber}`
        // `https://pixabay.com/api/?key=${API_KEY}&page=${pageNumber}&image_type=${query.id}`
      )
    ).json();

    setPageNumber(pageNumber + 1);

    setImages((image: any) => [...image, ...data]);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={images.length}
        next={getMoreImages}
        hasMore={hasMore}
        loader={<Loading />}
        endMessage={<h4>Nothing more to show</h4>}>
        <div className="columns-2 2xl:columns-3 gap-10 [column-fill:_balance] box-border mx-auto before:box-inherit after:box-inherit overflow-hidden">
          {/* <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"> */}
          {images.map((result: any) => (
            <div key={result.id} className="break-inside-avoid overflow-hidden">
              <ImageModal image={result}>
                {/* <a> */}
                <Thumbnail result={result} />
                {/* </a> */}
              </ImageModal>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Results;
