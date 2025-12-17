import Link from "next/link";
import Header from "../components/layouts/header/layout";
import Footer from "../components/layouts/footer/layout";
import styles from './careers.module.css';
import ExportedImage from "../components/layouts/ExportedImage";

import CareersAccordion from "./_components/careersaccordion/careerscomponent";
import GreenhouseBoard from "./_components/greenhouseboard/GreenhouseBoard";
import GreenhouseIframe from "./_components/greenhouseboard/GreenhouseBoard";

import GreenhouseJobs from "./_components/greenhouseboard/GreenhouseBoard";

import Script from "next/script";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | D3',
  description: '',
  keywords: '',
};


export default function Careers() {
  return (
    <main>
      <Header/>
      <div className={styles.careerBanner}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center" data-aos="fade-up">
              <h2>Let’s build the future <br></br> together</h2>
              <Link href="#jobs" className="btn btn-white">View open roles</Link> 
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productTabSection}>
        <div className="container" data-aos="fade-up">
          <div className={styles.sectionHeading}>
            <h2>Why D3, why now?</h2>
          </div>
          <div className={styles.tabSec}>
            <CareersAccordion />
          </div>
        </div>
      </div>

      <div className={styles.careerImageSection}>
        <div className="container" data-aos="fade-up">
          <div className="sectionHeaderHolder">
            <h2>Life at D3</h2>
            <div className="btnHolder">
              <Link href="/about" className="btn btn-main">About D3</Link>
            </div>
          </div>
          <div className={styles.galleryGrid}>
            <div className={styles.imageGridTop}>
              <div className={styles.gridImage1}><ExportedImage src="/assets/images/car-1.jpg" width={432} height={475} alt="" unoptimized /></div>
              <div className={styles.gridImage2}><ExportedImage className="imgLarge" src="/assets/images/car-2.jpg" width={872} height={476} alt="" unoptimized /></div>
            </div>
            <div className={styles.imageGridBottom}>
              <div className={styles.gridImage3}><ExportedImage className="imgSmall" src="/assets/images/car-3.jpg" width={432} height={234} alt="" unoptimized /></div>
              <div className={styles.gridImage3}><ExportedImage className="imgSmall" src="/assets/images/car-4.jpg" width={432} height={234} alt="" unoptimized /></div>
              <div className={styles.gridImage3}><ExportedImage className="imgSmall" src="/assets/images/car-5.jpg" width={432} height={234} alt="" unoptimized /></div>
            </div>
          </div>
          <p>Join our expanding team at D3, right in the heart of Downtown Los Angeles! <br></br>If you’re a motivated and skilled builder who flourishes in fast-paced environments, we want to connect with you.</p>
        </div>
      </div>

     <div id="jobs">

      <GreenhouseJobs/>

      </div>

      <Footer/>
    </main>
  );
}
