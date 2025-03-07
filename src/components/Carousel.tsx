"use client";

import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules';
import '../styles/carousel.css'
import ArrowLeft from "@/assets/icons/arrow-left.svg"
import ArrowRight from "@/assets/icons/arrow-right.svg"
import Image from 'next/image'
import '@/styles/carousel.css'

interface CarouselProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode;
  id?: string;
  child?: React.ReactNode
}

export default function Carousel<T>({
  items,
  renderItem,
  id = undefined,
  child
}: CarouselProps<T>) {
  return (
    <div id={id} className="carousel-container relative max-w-7xl mx-auto w-full">
      <Swiper
        rewind={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 }
        }}
        className="mySwiper"
        pagination={{
          el: ".swiper-pagination",
          bulletClass: 'swiper-bullet'
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation, Pagination]}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
        ))}
        {child}
        <div className="h-12 flex justify-center items-center gap-4 mt-4">
          <button className="swiper-button-prev">
            <Image src={ArrowLeft} alt="Arrow Left" />
          </button>
          <span className="swiper-pagination flex gap-2"></span>
          <button className="swiper-button-next ">
            <Image src={ArrowRight} alt="Arrow Right" />
          </button>
        </div>
      </Swiper>
    </div>
  )
}
