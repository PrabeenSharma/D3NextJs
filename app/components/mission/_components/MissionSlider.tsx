"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import styles from "./missionSlider.module.css";

import ExportedImage from "../../layouts/ExportedImage";
import Link from "next/link";

export default function MissionSlider() {


  return (

    <div className="missionSliderMain">
    <Splide
      options={{
        type   : 'loop',
        auto: 'false',
        drag   : 'free',
        focus  : 'center',
        arrows: false, 
        pagination: false,
        perPage: 9,
        gap: "24px",
        pauseOnHover: true,
        autoScroll: {
            speed: 0,
        },
        breakpoints: {
        1400: { perPage: 7 },
        1200: { perPage: 5 },
        768: { perPage: 3 },
        },
      }}
      extensions={{ AutoScroll }}
    >
    

          <SplideSlide><div className={styles.domainsNameBox}>.com</div></SplideSlide>
					<SplideSlide><div className={styles.domainsNameBox}>.ai</div></SplideSlide>
					<SplideSlide><div className={styles.domainsNameBox}>.xyz</div></SplideSlide>
					<SplideSlide><div className={styles.domainsNameBox}>.tv</div></SplideSlide>
					<SplideSlide><div className={styles.domainsNameBox}>.inc</div></SplideSlide>
					<SplideSlide><div className={styles.domainsNameBox}>.link</div></SplideSlide>
					<SplideSlide><div className={styles.domainsNameBox}>.io</div></SplideSlide>
					<SplideSlide><div className={styles.domainsNameBox}>.org</div></SplideSlide>


      


    </Splide>
</div>

  );
}
