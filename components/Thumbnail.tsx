import Image from "next/image";
import { forwardRef } from "react";

interface Props {
  className?: string;
  result: any;
  large?: boolean;
}

const Thumbnail = ({ className, result, large = false }: Props) => {
  return (
    <div
      className={`break-inside-avoid relative p-2 group  transition duration-200 ease-in transform hover:z-50 overflow-hidden ${className} ${
        !large && "sm:hover:scale-105 cursor-pointer"
      }`}>
      <Image
        src={`${large ? result?.largeImageURL : result?.webformatURL}`}
        blurDataURL="data:image/png;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRm knyJckliyjqTzSlT54b6bk+h0R//2Q=="
        placeholder="blur"
        className="bg-cover object-cover"
        height={`${large ? 1080 : 720}`}
        width={`${large ? 1920 : 1080}`}
        alt={result.type}
      />
    </div>
  );
};

export default Thumbnail;
