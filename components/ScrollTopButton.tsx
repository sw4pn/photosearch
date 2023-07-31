"use client";
import { cn } from "@/lib/utils";
import { ArrowBigUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2 z-50 ">
      <button
        type="button"
        onClick={scrollToTop}
        className={cn(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 z-50"
        )}>
        <ArrowBigUp size={24} aria-hidden="true" />
      </button>
    </div>
  );
};
