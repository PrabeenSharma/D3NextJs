"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import styles from './blogSlider.module.css';

import ExportedImage from "../../layouts/ExportedImage";
import Link from "next/link";

import { blogData } from "./blogData";

export default function BlogSlider() {
  return (
    <Splide
      options={{
        type: 'loop',
        drag: 'free',
        focus: 'center',
        arrows: false,
        pagination: false,
        perPage: 3,
        gap: "24px",
        pauseOnHover: true,
        autoScroll: {
          speed: 0,
        },
        breakpoints: {
          1400: { perPage: 2 },
          992: { perPage: 2 },
          768: { perPage: 1 },
        },
      }}
      extensions={{ AutoScroll }}
    >
      {blogData.map((item, index) => (
        <SplideSlide key={index}>
          <div className={styles.blogImage}>
            <ExportedImage
              src={item.image}
              width="320"
              height="180"
              alt={item.title}
              unoptimized={true}
              loading="eager"
            />
            <div className={styles.blogContent}>
              <small>News</small>
              <Link href={`https://blog.d3.com${item.link}`} target="_blank">
                {item.title}
              </Link>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
