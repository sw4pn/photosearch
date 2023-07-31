import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, { params }: any) {
  const array = params.tag;

  const tag = array[0];
  const page = array[1];

  const URL = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${tag}&page=${page}`;

  try {
    const res: any = await fetch(URL);

    const imageList = await res.json();

    const images = imageList?.hits;

    if (images.length > 0) return NextResponse.json(images, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
  return NextResponse.json(
    { message: "Internal Server Error" },
    { status: 500 }
  );
}
