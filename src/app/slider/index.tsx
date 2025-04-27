'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import SwiperCore from 'swiper';
import Image from 'next/image';
import ProfileImg from "../../../public/ProfileImg.webp";
import { Autoplay } from 'swiper/modules';

// install modules


const images = [
  ProfileImg,
  ProfileImg,
  ProfileImg,
  ProfileImg,
  ProfileImg,
  ProfileImg
];

export default function ImageSlider() {
  SwiperCore.use([Autoplay]);
    return (
        <div className="w-full py-10 bg-amber-600 overflow-hidden">
          <Swiper
            // direction="vertical"
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 1, // Small delay to prevent init glitches
              disableOnInteraction: false,
            }}
            speed={3000}
            grabCursor={true}
            allowTouchMove={false}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="w-32 h-32 bg-amber-400 flex items-center justify-center rounded-md shadow-md">
                  <Image
                    src={img}
                    alt={`Slide ${index + 1}`}
                    width={64}
                    height={64}
                    className="object-contain"
                    priority // Ensure it's preloaded
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
}
