"use client";

import { useState } from "react";
import ExportedImage from "@/app/components/layouts/ExportedImage";
import styles from "./testimonials.module.css"; 

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";


import Link from "next/link";

export default function Testimonials() {
  const [activeImage, setActiveImage] = useState(1);

  return (



    
    <Splide
      options={{
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        arrows: true, 
        pagination: false,
        perPage: 2.5,
        gap: "24px",
        pauseOnHover: true,
        autoScroll: {
            speed: 0,
        },
        breakpoints: {
        1200: { perPage: 2.5 },
        992: { perPage: 1 },
        768: { perPage: 1 },
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <div className={styles.testiholder}>
            <div className={styles.testiContent}>
              <div className={styles.testiSmallImage}><ExportedImage src="/assets/images/smallImage-1.png" width="104" height="28" alt="" unoptimized={true} loading="eager"></ExportedImage></div>
              <p>D3’s tokenization infrastructure enables new use cases such as leasing, collateralization and fractional ownership on the Doma protocol that respects the registrar model and brings in compliance, governance, and lifecycle awareness.</p>
              <div className={styles.testiFooter}>
                <h5>Tom Barrett <span>Founder & President, Encirca</span></h5>
              </div>
            </div>
            <div className={styles.testiImage}>
              <ExportedImage src="/assets/images/testiImage-1.jpg" width="200" height="322" alt="" unoptimized={true} loading="eager"></ExportedImage>
            </div>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className={styles.testiholder}>
            <div className={styles.testiContent}>
              <div className={styles.testiSmallImage}><ExportedImage src="/assets/images/smallImage-2.png" width="44" height="28" alt="" unoptimized={true} loading="eager"></ExportedImage></div>
              <p>I'm excited to see D3 enable a new ecosystem for the domain investment industry. I look forward to Web3 buyers getting access to this asset class in a way that's never before been possible.</p>
              <div className={styles.testiFooter}>
                <h5>Braden Pollock <span>Founder & Legal Brand Marketing, LBM</span></h5>
              </div>
            </div>
            <div className={styles.testiImage}>
              <ExportedImage src="/assets/images/testiImage-2.jpg" width="200" height="322" alt="" unoptimized={true} loading="eager"></ExportedImage>
            </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className={styles.testiholder}>
            <div className={styles.testiContent}>
              <div className={styles.testiSmallImage}><ExportedImage src="/assets/images/smallImage-3.png" width="119" height="28" alt="" unoptimized={true} loading="eager"></ExportedImage></div>
              <p>Bringing domains on Doma will make them more liquid and enable innovative new types of financial products, while giving major crypto ecosystems access to names that work with the rest of the existing internet.</p>
              <div className={styles.testiFooter}>
                <h5>Charlie Noyes <span>General Partner, Paradigm</span></h5>
              </div>
            </div>
            <div className={styles.testiImage}>
              <ExportedImage src="/assets/images/testiImage-3.jpg" width="200" height="322" alt="" unoptimized={true} loading="eager"></ExportedImage>
            </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className={styles.testiholder}>
            <div className={styles.testiContent}>
              <div className={styles.testiSmallImage}><ExportedImage src="/assets/images/smallImage-4.png" width="88" height="28" alt="" unoptimized={true} loading="eager"></ExportedImage></div>
              <p>Doma's interoperability, lifecycle awareness, and compliance make Web2 and Web3 convergence seamless don't need to worry about chains or domain operations; it just works. It's rare to see a project speak to both worlds while making domains more dynamic, liquid, and valuable.</p>
              <div className={styles.testiFooter}>
                <h5>Elias Rendon Banger <span>CEO of InternetX</span></h5>
              </div>
            </div>
            <div className={styles.testiImage}>
              <ExportedImage src="/assets/images/testiImage-4.jpg" width="200" height="322" alt="" unoptimized={true} loading="eager"></ExportedImage>
            </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className={styles.testiholder}>
            <div className={styles.testiContent}>
              <div className={styles.testiSmallImage}><ExportedImage src="/assets/images/smallImage-5.png" width="105" height="28" alt="" unoptimized={true} loading="eager"></ExportedImage></div>
              <p>Doma is unlocking an entirely new asset class and with LayerZero as the canonical interoperability solution, every tokenized domain will connect to the onchain economy from day one. A once closed, illiquid market becomes one that is composable and truly universal, with assets moving securely across all networks.</p>
              <div className={styles.testiFooter}>
                <h5>Bryan Pellegrino <span>CEO & Co-Founder at LayerZero Labs</span></h5>
              </div>
            </div>
            <div className={styles.testiImage}>
              <ExportedImage src="/assets/images/testiImage-5.jpg" width="200" height="322" alt="" unoptimized={true} loading="eager"></ExportedImage>
            </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className={styles.testiholder}>
            <div className={styles.testiContent}>
              <div className={styles.testiSmallImage}><ExportedImage src="/assets/images/smallImage-6.png" width="90" height="28" alt="" unoptimized={true} loading="eager"></ExportedImage></div>
              <p>This integration with Doma enables DNS domains to work seamlessly across the Ethereum blockchain, side by side with .eth domains. This partnership invites the DNS community to help shape a unified reality – one where sovereignty, opportunity, and innovation flourish, and where the internet’s next chapter is written by its users.</p>
              <div className={styles.testiFooter}>
                <h5>Alex Urbelis <span>CISO of ENS Labs</span></h5>
              </div>
            </div>
            <div className={styles.testiImage}>
              <ExportedImage src="/assets/images/testiImage-6.jpg" width="200" height="322" alt="" unoptimized={true} loading="eager"></ExportedImage>
            </div>
        </div>
      </SplideSlide>
    </Splide>
  );
}
