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
          <div key={item.id} className="flex flex-col p-4 ">
            <Image
              src={item.icon}
              alt={item.description}
              className="object-cover h-[220px] w-full"
            />
            <h4 className="text-primary font-bold text-base pt-2 pb-3">{item.type}</h4>
            <p className="text-black text-lg line-clamp-5 overflow-hidden min-h-[9rem] whitespace-pre-line">
              {item.description}
            </p>
            <Button
              className="mt-4"
              onClick={() => window.open(item.redirect, "_blank")}
            >
              Leia mais
            </Button>
          </div>
        )}
      />
    </section>
  )
}
