import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Alexandria, Dancing_Script, Inter } from "next/font/google";
import Container from "@/components/Container";
import Image from "next/image";
import nature from "@/public/images/nature.jpg";
import { ScrollTopButton } from "@/components/ScrollTopButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const comfort = Alexandria({
  subsets: ["latin"],
  variable: "--font-comfort",
});
const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const API_KEY = process.env.PIXABAY_API_KEY;

async function getBackground() {
  try {
    const res = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=nature&per_page=25&image_type=photo`
    );

    if (!res.ok) {
      // Fallback image object

      return undefined;
    }

    const data: any = await res.json();
    const images = data.hits;

    const image = images[Math.floor(Math.random() * images.length)];

    if (image) {
      return image;
    }
  } catch (err: any) {
    return undefined;
  }
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const background = await getBackground();

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${comfort.variable} ${dancing.variable}`}>
        <div className="fixed inset-0 w-full h-full" style={{ zIndex: "-1" }}>
          <Image
            src={background ? background.largeImageURL : nature}
            alt="background"
            className=" pointer-events-none bg-cover object-cover"
            fill
            priority
          />
        </div>
        <Container>
          <Header />
          {children}
          <div className="flex flex-col gap-1 justify-center items-center text-center text-neutral-300">
            <span className="block backdrop-blur-sm bg-neutral-700/40 p-0.5 rounded-md">
              &copy; 2023, Image Search App,
            </span>
            <span className="text-sm block backdrop-blur-sm bg-neutral-700/40 p-0.5  rounded-md">
              Developed with 🧡 using NEXT JS & Pixabay API.
            </span>
          </div>
          <ScrollTopButton />
        </Container>
      </body>
    </html>
  );
}
