import Link from "next/link";
import Header from "../components/layouts/header/layout";
import Footer from "../components/layouts/footer/layout";
import styles from './partners.module.css';
import ExportedImage from "../components/layouts/ExportedImage";

import Ecosystem from "./_components/ecosystem/Ecosystem";

import PartnerEcosystem from "./_components/partnerEcosystem/layout";
import GetInTouchModal from "../components/modal/GetInTouchModal";
import GetInTouchButton from "../components/buttons/GetInTouchButton";


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners | D3',
  description: '',
  keywords: '',
};


export default function Partner() {
  return (
    <main>
      <Header/>
      <div className={styles.partnerBanner}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center" data-aos="fade-up">
              <h2>Working with our<br></br> partners</h2>
              <p>We work with leaders across the domain industry and Web3 projects to <br></br> accelerate the DomainFi economy.</p>
              <GetInTouchButton/>
            </div>
          </div>
        </div>
      </div>
      <Ecosystem/>
      <PartnerEcosystem/>
      <Footer/>
      <GetInTouchModal/>
    </main>
  );
}
