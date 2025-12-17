"use client";

import { useEffect, useRef } from "react";
import { Splide, SplideSlide, SplideRef } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import ExportedImage from "../../layouts/ExportedImage";
import Link from "next/link";

import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* --------------------------------
   DATA CONFIG
---------------------------------- */

// Base banner images (ONE set)
const baseBannerSlides = [
  "banner-image-1.webp",
  "banner-image-2.webp",
  "banner-image-3.webp",
  "banner-image-4.webp",
  "banner-image-5.webp",
  "banner-image-6.webp",
  "banner-image-7.webp",
];

// Repeat main slider 5 times
const repeatCount = 3;
const bannerSlides = Array.from({ length: repeatCount }).flatMap(
  () => baseBannerSlides
);

// Thumb slider (single set)
const thumbSlides = [
  { ext: ".ai", name: "software.ai" },
  { ext: ".xyz", name: "agents.xyz" },
  { ext: ".tv", name: "station.tv" },
  { ext: ".inc", name: "empire.inc" },
  { ext: ".io", name: "tech.io" },
  { ext: ".org", name: "gov.org" },
  { ext: ".com", name: "business.com" },
];

export default function HomeBanner() {
  const mainRef = useRef<SplideRef>(null);
  const thumbsRef = useRef<SplideRef>(null);

  useEffect(() => {
    const main = mainRef.current?.splide;
    const thumbs = thumbsRef.current?.splide;

    if (main && thumbs) {
      main.sync(thumbs);
    }
  }, []);

  return (
    <div className="homeSliderHolder">
      {/* =======================
          MAIN SLIDER (×5)
      ======================== */}
      <Splide
        ref={mainRef}
        options={{
          perPage: 1,
          arrows: false,
          autoplay: true,
          interval: 3000,
          pauseOnHover: false,
          pagination: false,
          speed: 3000,
          type: "fade",
        }}
      >
        {bannerSlides.map((image, index) => (
          <SplideSlide key={index}>
            <div className="homeTopSlider">
              <div className="homeBannerImage fadeSlide">
                <ExportedImage
                  src={`/assets/images/${image}`}
                  width={1440}
                  height={738}
                  alt=""
                  
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* =======================
          CONTENT + THUMBS
      ======================== */}
      <div className="thumbHolderMain">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <div className="homeBannerCaption" data-aos="fade-up">
                <h2>The Internet’s Domain Layer, Tokenized.</h2>

                <div className="buttonGroup">
                  <Link href="/about" className="btn btn-white">
                    Meet the Team
                  </Link>
                  <Link href="/partners" className="btn btn-outline">
                    See partners
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT THUMB SLIDER (NORMAL) */}
            <div className="col-lg-5">
              <div className="thumbHolder">
                <Splide
                  ref={thumbsRef}
                  options={{
                    arrows: false,
                    pagination: false,
                    isNavigation: true,
                    focus: "center",
                    trimSpace: true,
                    direction: "ttb",
                    perPage: 5,
                    fixedHeight: "120px",
                    height: "500px",
                    drag: true,
                    type: "loop",
                    speed: 1000,
                    breakpoints: {
                      991: {
                        fixedHeight: 70,
                        height: 210,
                        perPage: 3,
                        drag: false,
                      },
                    },
                  }}
                >
                  {thumbSlides.map((item, index) => (
                    <SplideSlide key={index}>
                      <div className="thumbInner">
                        <h3>{item.ext}</h3>

                        <div className="thumbInnerActive">
                          <div className="thumbInnerActiveIcon">
                            <ExportedImage
                              src="/assets/images/home-slider-icon.png"
                              width={48}
                              height={48}
                              alt=""
                            />
                          </div>

                          <div className="thumbInnerActiveContent">
                            <h4>{item.name}</h4>

                            <div className="thumbInnerShare">
                              <div className="sharePrice">$1,810.65</div>
                              <div className="shareUpPercentage">
                                <FontAwesomeIcon icon={faCaretUp} /> 24.67%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
