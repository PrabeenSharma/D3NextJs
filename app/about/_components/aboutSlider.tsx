"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";


import ExportedImage from "@/app/components/layouts/ExportedImage";
import Link from "next/link";

export default function AboutSlider() {


  return (

    <Splide
      options={{
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        arrows: false, 
        pagination: false,
        perPage: 6,
        gap: "8px",
        pauseOnHover: true,
        autoScroll: {
            speed: 0,
        },
        breakpoints: {
        1200: { perPage: 4 },
        992: { perPage: 3 },
        768: { perPage: 1.5 },
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <div className="leadershipItems">
            <ExportedImage src="/assets/images/about-slider-1.jpg" width="708" height="962" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="leadershipItems">
            <ExportedImage src="/assets/images/about-slider-2.jpg" width="708" height="962" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="leadershipItems">
            <ExportedImage src="/assets/images/about-slider-3.jpg" width="708" height="962" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="leadershipItems">
            <ExportedImage src="/assets/images/about-slider-4.jpg" width="708" height="962" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="leadershipItems">
            <ExportedImage src="/assets/images/about-slider-5.jpg" width="708" height="962" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="leadershipItems">
            <ExportedImage src="/assets/images/about-slider-6.jpg" width="708" height="962" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="leadershipItems">
            <ExportedImage src="/assets/images/about-slider-7.jpg" width="708" height="962" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="leadershipItems">
            <ExportedImage src="/assets/images/about-slider-8.jpg" width="708" height="962" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="leadershipItems">
            <ExportedImage src="/assets/images/about-slider-9.jpg" width="708" height="962" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
        </div>
      </SplideSlide>
    </Splide>


  );
}
