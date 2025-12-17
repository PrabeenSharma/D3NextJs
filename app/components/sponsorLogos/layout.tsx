'use client'
import React, { useEffect, useState } from 'react';
import ExportedImage from "../../components/layouts/ExportedImage";
import Link from "next/link";
import styles from './sponsorlogos.module.css';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import { faArrowRight, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faDiscord, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function SponsorLogos() {

	return (
		<main>
			<div className={styles.sponsorLogoHolder}>
				<div className='container'>
					<Splide
						  options={{
							type   : 'loop',
							drag   : 'free',
							focus  : 'center',
							arrows: false, 
							pagination: false,
							perPage: 6,
							gap: "24px",
							pauseOnHover: true,
							autoScroll: {
								speed: 0,
							},
							breakpoints: {
							1200: { perPage: 5 },
							992: { perPage: 4 },
							768: { perPage: 2 },
							},
						  }}
						  extensions={{ AutoScroll }}
						>
						<SplideSlide>
							<ExportedImage src="/assets/images/sp-1.png" width="600" height="200" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
						</SplideSlide>
						<SplideSlide>
							<ExportedImage src="/assets/images/sp-2.png" width="600" height="200" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
						</SplideSlide>
						<SplideSlide>
							<ExportedImage src="/assets/images/sp-3.png" width="600" height="200" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
						</SplideSlide>
						<SplideSlide>
							<ExportedImage src="/assets/images/sp-4.png" width="600" height="200" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
						</SplideSlide>
						<SplideSlide>
							<ExportedImage src="/assets/images/sp-5.png" width="600" height="200" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
						</SplideSlide>
						<SplideSlide>
							<ExportedImage src="/assets/images/sp-6.png" width="600" height="200" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
						</SplideSlide>
					</Splide>
				</div>
			</div>
		</main>
	);
}
