"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";


import ExportedImage from "../../layouts/ExportedImage";
import Link from "next/link";

export default function LeadershipSlider() {


  return (

    <Splide
      options={{
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        arrows: false, 
        pagination: false,
        perPage: 5,
        gap: "24px",
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
            <ExportedImage src="/assets/images/leadership-image-1.jpg" width="360" height="360" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
            <div className="socialIconsLeadership">
                <Link href="https://www.linkedin.com/in/fredhsu" target="_blank"><ExportedImage src="/assets/images/linkedinLeadership.png" width="40" height="40" alt="" unoptimized={true} loading="eager"></ExportedImage></Link>
            </div>
            <div className="leadershipName">
                Fred Hsu <span>Co-Founder & Advisor</span>
            </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="leadershipItems">
            <ExportedImage src="/assets/images/leadership-image-2.jpg" width="360" height="360" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
            <div className="socialIconsLeadership">
                <Link href="https://www.linkedin.com/in/paulstahura" target="_blank"><ExportedImage src="/assets/images/linkedinLeadership.png" width="40" height="40" alt="" unoptimized={true} loading="eager"></ExportedImage></Link>
            </div>
            <div className="leadershipName">
                Paul Stahura <span>Co-Founder & Advisor</span>
            </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="leadershipItems">
            <ExportedImage src="/assets/images/leadership-image-3.jpg" width="360" height="360" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
            <div className="socialIconsLeadership">
                <Link href="https://d3.inc/about/" target="_blank"><ExportedImage src="/assets/images/linkedinLeadership.png" width="40" height="40" alt="" unoptimized={true} loading="eager"></ExportedImage></Link>
            </div>
            <div className="leadershipName">
                Shay Chinn <span>Chief Architect & Co-Founder</span>
            </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="leadershipItems">
            <ExportedImage src="/assets/images/leadership-image-4.jpg" width="360" height="360" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
            <div className="socialIconsLeadership">
                <Link href="https://www.linkedin.com/in/kevin-k-64798611/" target="_blank"><ExportedImage src="/assets/images/linkedinLeadership.png" width="40" height="40" alt="" unoptimized={true} loading="eager"></ExportedImage></Link>
            </div>
            <div className="leadershipName">
                Kevin Kreuser <span>VP & General Counsel</span>
            </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="leadershipItems">
            <ExportedImage src="/assets/images/leadership-image-5.jpg" width="360" height="360" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
            <div className="socialIconsLeadership">
                <Link href="https://www.linkedin.com/in/michael-ho" target="_blank"><ExportedImage src="/assets/images/linkedinLeadership.png" width="40" height="40" alt="" unoptimized={true} loading="eager"></ExportedImage></Link>
            </div>
            <div className="leadershipName">
                Michael Ho <span>Chief Business Officer & Co-Founder</span>
            </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="leadershipItems">
            <ExportedImage src="/assets/images/leadership-image-6.jpg" width="360" height="360" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
            <div className="socialIconsLeadership">
                <Link href="https://www.linkedin.com/in/inderpreetsingh/" target="_blank"><ExportedImage src="/assets/images/linkedinLeadership.png" width="40" height="40" alt="" unoptimized={true} loading="eager"></ExportedImage></Link>
            </div>
            <div className="leadershipName">
                Inder Singh <span>VP Product & Technology</span>
            </div>
        </div>
      </SplideSlide>


    </Splide>


  );
}
