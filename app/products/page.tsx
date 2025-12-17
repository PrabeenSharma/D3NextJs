import Link from "next/link";
import Header from "../components/layouts/header/layout";
import Footer from "../components/layouts/footer/layout";
import styles from './products.module.css';
import ExportedImage from "../components/layouts/ExportedImage";

import ProductAccordion from "./_components/productaccordion/productaccordion";
import Testimonials from "./_components/testimonials/testimonials";
import JoinTheNetwork from "../components/jointhenetwork/layout";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | D3',
  description: '',
  keywords: '',
};


export default function Products() {
  return (
    <main>
      <Header/>
      <div className={styles.productbanner}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 data-aos="fade-up">Trade and own <br /> the Internet</h2>
              <Link href="#" className="btn btn-white">Launch app</Link> 
              <div className={styles.productBannerImage}>
                <ExportedImage src="/assets/images/productBannerImage.png" width={1397} height={525} alt="" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productTabSection}>
        <div className="container" data-aos="fade-up">
          <div className={styles.sectionHeading}>
            <h2>Doma bridges the DNS & blockchains</h2>
          </div>
          <div className={styles.tabSec}>
            <ProductAccordion />
          </div>
        </div>
      </div>

      <div className={`${styles.discoverSection} discoverSectionMain`}>
        <div className="container" data-aos="fade-up">
          <h6>Discover</h6>
          <div className="sectionHeaderHolder">
            <h2>Find and own onchain domains</h2>
            <div className="btnHolder">
              <Link href="https://app.doma.xyz/explore" target="_blank" className="btn btn-main">Get domains</Link>
            </div>
          </div>
          <p>Direct registrar inventory, one-click tokenization, and full DNS-compatible domains you can use or trade.</p>
          <ExportedImage src="/assets/images/productDiscoverImage.jpg" width={1312} height={450} alt="" unoptimized />
        </div>
      </div>


      <div className={`${styles.tradeSection} discoverSectionMain`}>
        <div className="container" data-aos="fade-up">
          <h6>Trade</h6>
          <div className="sectionHeaderHolder">
            <h2>Buy & sell tokenized domains</h2>
            <div className="btnHolder">
              <Link href="https://app.doma.xyz/explore" target="_blank" className="btn btn-main">Trade tokens</Link>
            </div>
          </div>
          <p>Trade ERC-20 domain tokens with fractional ownership, real-time pricing, and deep liquidity.</p>
          <ExportedImage src="/assets/images/tradeImage.jpg" width={1312} height={450} alt="" unoptimized />
        </div>
      </div>

      <div className={`${styles.swapSection} discoverSectionMain`}>
        <div className="container" data-aos="fade-up">
          <h6>Swap</h6>
          <div className="sectionHeaderHolder">
            <h2>Exchange assets seamlessly</h2>
            <div className="btnHolder">
              <Link href="https://app.doma.xyz/swap" target="_blank" className="btn btn-main">Swap assets</Link>
            </div>
          </div>
          <p>Swap across assets with best-price routing, low fees, and near-zero slippage.</p>
          <ExportedImage src="/assets/images/swapImage.jpg" width={1312} height={450} alt="" unoptimized />
        </div>
      </div>

      <div className={`${styles.earnSection} discoverSectionMain`}>
        <div className="container" data-aos="fade-up">
          <h6>Earn</h6>
          <div className="sectionHeaderHolder">
            <h2>Put your assets to work</h2>
            <div className="btnHolder">
              <Link href="https://app.doma.xyz/profile?tab=positions" target="_blank" className="btn btn-main">Start earning</Link>
            </div>
          </div>
          <p>Provide liquidity, stake for utility and rewards, and earn across multiple mechanisms from one asset.</p>
          <ExportedImage src="/assets/images/earnImage.jpg" width={1312} height={450} alt="" unoptimized />
        </div>
      </div>

      <div className={`${styles.testimonialSection} discoverSectionMain`}>
        <div className="container" data-aos="fade-up">
          <div className="sectionHeaderHolder">
            <h2>Backed by industry experts & partners</h2>
          </div>
        </div>
        <div className={styles.testiSliderHolder}><Testimonials/></div>
      </div>

      <JoinTheNetwork/>

      <Footer/>
    </main>
  );
}
