"use client";
import { FC, ReactNode, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from "./ui/Dialog";
import Thumbnail from "./Thumbnail";
import { ScrollArea } from "./ui/ScrollArea";
import { Button } from "./ui/Button";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "./ui/RadioGroup";
import InfoBox from "./InfoBox";

interface Props {
  children: ReactNode;
  image: any;
}

const ImageModal: FC<Props> = ({ children, image }) => {
  const [size, setSize] = useState("");
  const tagsList = image.tags ? image.tags.split(",") : [];

  const handleDownload = () => {
    //
    let url = "";
    if (size === "small") {
      url = image.previewURL;
    }
    if (size === "medium") {
      url = image.webformatURL;
    }
    if (size === "big") {
      url = image.largeImageURL;
    }
    if (size === "original") {
      url = image?.imageURL;
    }
    window.open(url, "_blank");
    // alert(size);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="max-w-[90%] h-[90%] p-0">
          <DialogHeader className="bg-neutral-100 p-6">
            <DialogTitle className="tracking-wide text-neutral-700 text-xl">
              Preview ID: {image.id}
            </DialogTitle>
            {/* <DialogDescription> 
            </DialogDescription> */}
          </DialogHeader>
          <ScrollArea className="w-full h-full">
            <div className="flex justify-between lg:flex-row flex-col ">
              <div className="flex-1 p-1">
                <Thumbnail className="rounded-lg" result={image} large />
              </div>
              <div className="px-8">
                <h4 className="font-comfort py-5 text-lg md:text-xl">
                  Download
                </h4>
                <RadioGroup className="p-1  ">
                  {image.webformatURL && (
                    <label
                      htmlFor="small"
                      className="border border-slate-300 rounded-md flex justify-center items-center hover:bg-neutral-50 cursor-pointer p-2"
                      onClick={() => setSize("small")}>
                      <div className="flex-1 ">small</div>
                      <div className="flex-1 text-center font-semibold">
                        640x960
                      </div>
                      <RadioGroupItem value="small" id="small" />
                    </label>
                  )}
                  {/* {image.webformatURL && (
                    <label
                      htmlFor="medium"
                      className="border border-slate-300 rounded-md flex justify-center items-center hover:bg-neutral-50 cursor-pointer p-2"
                      onClick={() => setSize("medium")}>
                      <div className="flex-1">Medium</div>
                      <div className=" flex-1 text-center font-semibold">
                        1920x2660
                      </div>
                      <RadioGroupItem value="medium" id="medium" />
                    </label>
                  )} */}
                  {image.largeImageURL && (
                    <label
                      htmlFor="big"
                      className="border border-slate-300 rounded-md flex justify-center items-center hover:bg-neutral-50 cursor-pointer p-2"
                      onClick={() => setSize("big")}>
                      <div className="flex-1">Big</div>
                      <div className="flex-1 text-center font-semibold">
                        1920x2660
                      </div>
                      <RadioGroupItem value="big" id="big" />
                    </label>
                  )}
                  {image.imageURL && (
                    <label
                      htmlFor="original"
                      className="border border-slate-300 rounded-md flex justify-center items-center hover:bg-neutral-50 cursor-pointer p-2"
                      onClick={() => setSize("original")}>
                      <div className="flex-1">Original</div>
                      <div className="flex-1 text-center font-semibold">
                        {image.imageWidth} x {image.imageHeight}
                      </div>
                      <RadioGroupItem value="original" id="original" />
                    </label>
                  )}
                </RadioGroup>
                <div className="flex justify-center items-center w-full py-4">
                  <Button
                    disabled={size === ""}
                    onClick={handleDownload}
                    className="bg-green-500 w-full">
                    Download for free!
                  </Button>
                </div>

                <h4 className="font-comfort mt-5 py-4 text-lg md:text-xl">
                  Information
                </h4>
                <div className="grid grid-cols-3 gap-5 w-full py-4">
                  <InfoBox text="User" value={image.user} />
                  <InfoBox text="User ID" value={image.user_id} />
                  <InfoBox text="Type" value={image.type} />
                  <InfoBox text="Views" value={image.views} />
                  <InfoBox text="Downloads" value={image.downloads} />
                  <InfoBox text="Likes" value={image.likes} />
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center p-4">
              <h4 className="text-xl font-bold font-comfort text-neutral-700">
                Tags :
              </h4>
              <div className="px-2 flex justify-center items-center gap-3">
                {tagsList?.map((tag: string) => (
                  <Link
                    key={tag}
                    href={`/search/${tag}`}
                    className="bg-neutral-100 rounded-sm text-gray-500 font-normal text-sm p-1 hover:bg-neutral-200/80">
                    <span className="hover:underline mx-1 ">{tag},</span>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageModal;
