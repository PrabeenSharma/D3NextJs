import Link from "next/link";
import Header from "../components/layouts/header/layout";
import Footer from "../components/layouts/footer/layout";
import styles from './about.module.css';
import ExportedImage from "../components/layouts/ExportedImage";

import BuildTheFuture from "../components/buildthefuture/layout";



import AboutSlider from "./_components/aboutSlider";

import HomeBlog from "../components/homeblog/layout";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | D3',
  description: '',
  keywords: '',
};


export default function About() {
  return (
    <main>
      <Header/>
      
      <div className={styles.aboutBanner}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center" data-aos="fade-up">
              <h2>We are building the <br></br>future of the internet</h2>
              <p>D3 leverages the DNS-compliant Doma Protocol to bring domains onchain as RWAs, connecting <br></br>DNS to major Web3 ecosystems for liquidity and innovation.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutSlider}>
        <AboutSlider/>
      </div>
      <div className={`${styles.aboutSection} discoverSectionMain`}>
        <div className="container" data-aos="fade-up">
          <h6>Executive Team</h6>
          <div className="sectionHeaderHolder">
            <h2>We are a team of visionaries and experts</h2>
          </div>
          <p>Our leadership team has 30+ years of expertise in domain monetization, internet <br></br>protocols, and managing major TLDs like .xyz, .inc, .tv, and .link.</p>

          <div className={styles.teamRepeater}>
            <div className="row gy-4">
              <div className="col-md-6">
                <div className={styles.teamBox}>
                  <div className={styles.teamImage}>
                    <div className={styles.teamImageDestop}><ExportedImage src="/assets/images/team-image-1.jpg" width="477" height="714" alt="" unoptimized={true} loading="eager"  ></ExportedImage></div>
                    <div className={styles.teamImageMobile}><ExportedImage src="/assets/images/team-image-mobile-1.jpg" width="398" height="240" alt="" unoptimized={true} loading="eager"  ></ExportedImage></div>
                  </div>
                  <div className={styles.teamContent}>
                    <div className={styles.teamContentTop}>
                      <h4>Fred Hsu <span>CEO & Co-Founder</span></h4>
                    </div>
                    <div className={styles.teamContentBottom}>
                      <p>Previously co-founded Oversee.net and founded Manage.com (acquired by Criteo) and Ember Entertainment (acquired by Gala Games), and holds a BS in Computer Science from UCLA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.teamBox}>
                  <div className={styles.teamImage}>
                    <div className={styles.teamImageDestop}><ExportedImage src="/assets/images/team-image-2.jpg" width="477" height="714" alt="" unoptimized={true} loading="eager"  ></ExportedImage></div>
                    <div className={styles.teamImageMobile}><ExportedImage src="/assets/images/team-image-mobile-2.jpg" width="398" height="240" alt="" unoptimized={true} loading="eager"  ></ExportedImage></div>
                  </div>
                  <div className={styles.teamContent}>
                    <div className={styles.teamContentTop}>
                      <h4>Paul Stahura <span>Co-Founder & Advisor</span></h4>
                    </div>
                    <div className={styles.teamContentBottom}>
                      <p>Co-founded and led eNom and Donuts Inc, scaling Donuts into the world’s largest new-gTLD registry, and holds BS and MS degrees in Electrical Engineering from Purdue University</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`${styles.teamBox} ${styles.teamBoxSp}`}>
                  <div className={styles.teamImage}>
                    <div className={styles.teamImageDestop}><ExportedImage src="/assets/images/team-image-3.jpg" width="477" height="714" alt="" unoptimized={true} loading="eager"  ></ExportedImage></div>
                    <div className={styles.teamImageMobile}><ExportedImage src="/assets/images/team-image-mobile-3.jpg" width="398" height="240" alt="" unoptimized={true} loading="eager"  ></ExportedImage></div>
                  </div>
                  <div className={styles.teamContent}>
                    <div className={styles.teamContentTop}>
                      <h4>Shay Chinn <span>Chief Architect & Co-Founder</span></h4>
                    </div>
                    <div className={styles.teamContentBottom}>
                      <p>Held senior engineering roles at eToys, Oversee.net, Bridg (acquired by Cardlytics), dotTV (.tv), and Verisign, and holds a BS in Bioinformatics with a Computer Science emphasis from Caltech</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`${styles.teamBox} ${styles.teamBoxSp}`}>
                  <div className={styles.teamImage}>
                    <div className={styles.teamImageDestop}><ExportedImage src="/assets/images/team-image-4.jpg" width="477" height="714" alt="" unoptimized={true} loading="eager"  ></ExportedImage></div>
                    <div className={styles.teamImageMobile}><ExportedImage src="/assets/images/team-image-mobile-4.jpg" width="398" height="240" alt="" unoptimized={true} loading="eager"  ></ExportedImage></div>
                  </div>
                  <div className={styles.teamContent}>
                    <div className={styles.teamContentTop}>
                      <h4>Michael Ho <span>Chief Business Officer & Co-Founder</span></h4>
                    </div>
                    <div className={styles.teamContentBottom}>
                      <p>Former early-stage investor at Presight Capital and banker at Goldman Sachs’ SF IBD on $15B+ in tech transactions, with a BA in Business Administration from UC Irvine</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.teamBox}>
                  <div className={styles.teamImage}>
                    <div className={styles.teamImageDestop}><ExportedImage src="/assets/images/team-image-5.jpg" width="477" height="714" alt="" unoptimized={true} loading="eager"  ></ExportedImage></div>
                    <div className={styles.teamImageMobile}><ExportedImage src="/assets/images/team-image-mobile-5.jpg" width="398" height="240" alt="" unoptimized={true} loading="eager"  ></ExportedImage></div>
                  </div>
                  <div className={styles.teamContent}>
                    <div className={styles.teamContentTop}>
                      <h4>Kevin Kreuser <span>VP & General Counsel</span></h4>
                    </div>
                    <div className={styles.teamContentBottom}>
                      <p>Brings 20+ years of legal leadership across ICANN, GoDaddy, Intel, Best Western, and Twilio, and also serves as Head of Legal at BetDEX Labs on Solana</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.teamBox}>
                  <div className={styles.teamImage}>
                    <div className={styles.teamImageDestop}><ExportedImage src="/assets/images/team-image-6.jpg" width="477" height="714" alt="" unoptimized={true} loading="eager"  ></ExportedImage></div>
                    <div className={styles.teamImageMobile}><ExportedImage src="/assets/images/team-image-mobile-6.jpg" width="398" height="240" alt="" unoptimized={true} loading="eager"  ></ExportedImage></div>
                  </div>
                  <div className={styles.teamContent}>
                    <div className={styles.teamContentTop}>
                      <h4>Inder Singh <span>VP Product & Technology</span></h4>
                    </div>
                    <div className={styles.teamContentBottom}>
                      <p>Has 20+ years of experience across AI/ML startups including Criteo, Manage.com, and Tapjoy, and holds an MS in Computer Science from the University of Minnesota and a Bachelor’s from NSIT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.weArebackedSection}>
        <div className="container" data-aos="fade-up">
          <div className={styles.weArebackedInner}>
            <div className="text-center">
              <h2>We are backed by the best</h2>
              <div className={styles.sponsorLogos}>
                <div className={styles.spLg}>
                  <ExportedImage src="/assets/images/backed-logo-1.png" width="240" height="80" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
                </div>
                <div className={styles.spLg}>
                  <ExportedImage src="/assets/images/backed-logo-2.png" width="240" height="80" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
                </div>
                <div className={styles.spLg}>
                  <ExportedImage src="/assets/images/backed-logo-3.png" width="240" height="80" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
                </div>
                <div className={styles.spLg}>
                  <ExportedImage src="/assets/images/backed-logo-4.png" width="240" height="80" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
                </div>
                <div className={styles.spLg}>
                  <ExportedImage src="/assets/images/backed-logo-5.png" width="240" height="80" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.quoteSection}>
            <div className={styles.quoteTop}>
              <div className={styles.quoteContent}>
                <p>With D3, we're excited to expand accessibility to domains as an innovative digital asset class, enabling domain yields available and accessible to everyone for the first time. Doma marks a transformative step in democratizing digital ownership.</p>
              </div>
              <div className={styles.quoteIcon}><ExportedImage src="/assets/images/quoteIcon.png" width="63" height="64" alt="" unoptimized={true} loading="eager"  ></ExportedImage></div>
            </div>
            <div className={styles.quoteNamaeHolder}>
              <div className={styles.quoteImage}><ExportedImage src="/assets/images/quoteImage.png" width="48" height="48" alt="" unoptimized={true} loading="eager"  ></ExportedImage></div>
              <div className={styles.quoteName}>
                Charlie Noyes <span>General Partner, Paradigm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeBlog/>
      <BuildTheFuture/>
      <Footer/>
    </main>
  );
}
