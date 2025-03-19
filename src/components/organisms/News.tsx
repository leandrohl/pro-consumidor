"use client";

import { news } from "@/data/news";
import Image from "next/image";
import Button from "../atoms/Button";
import Carousel from "../molecules/Carousel";

export default function News() {
  return (
    <section className=" flex flex-col items-center py-16">
      <h3 className="font-dinamica text-primary text-5xl">Notícias</h3>
      <Carousel
        items={news}
        renderItem={item => (
          <div key={item.id} className="flex flex-col p-8 ">
            <Image src={item.icon} alt={item.description} />
            <h4 className="text-primary font-bold text-base pt-2 pb-3">{item.type}</h4>
            <p className="text-black text-lg line-clamp-3 overflow-hidden min-h-[5.5rem] whitespace-pre-line">
              {item.description}
            </p>
            <Button className="mt-4"> Leia mais </Button>
          </div>
        )}
      />
    </section>
  )
}
