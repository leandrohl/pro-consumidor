"use client";

import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import Carousel from "../molecules/Carousel";
import StarIcon from "@/assets/icons/star.svg";

export default function Testimonials() {
  const renderStars = (stars: number) => {
    return Array.from({ length: stars }).map((_, index) => (
      <Image src={StarIcon} key={index} alt="star" />
    ))
  }

  return (
    <section className="flex flex-col items-center py-16">
      <h3 className="font-dinamica text-primary text-5xl mb-6">Depoimentos</h3>
      <Carousel
        items={testimonials}
        renderItem={item => (
          <div
            key={item.id}
            className="flex flex-col mx-4 md:mx-0 mb-1 py-8 px-4 bg-white rounded-xl shadow-md "
          >
            <div className="flex items-center">
              <Image src={item.image} alt={item.avaliation} className="rounded-full h-12 w-12 mr-4"/>
              <div className="flex flex-col">
                <span className="text-primary font-bold text-lg">{item.name}</span>
                <span className="text-black text-sm">{item.profession}</span>
              </div>
            </div>
            <p className="text-black text-lg text-center mt-8 px-4 line-clamp-5 overflow-hidden min-h-[9rem] whitespace-pre-line">&quot;{item.avaliation}&quot;</p>
            <div className="flex justify-center mt-4 gap-2">
              { renderStars(item.stars) }
            </div>
          </div>
        )}
      />
    </section>
  )
}
