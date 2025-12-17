import Image from "next/image";
import Header from "./components/layouts/header/layout"
import Footer from "./components/layouts/footer/layout"
import SponsorLogos from "./components/sponsorLogos/layout";
import EconomicGraph from "./components/economicGraph/layout";
import Mission from "./components/mission/layout";
import Network from "./components/network/layout";
import Partner from "./components/partner/layout";
import Leadership from "./components/leadership/layout";
import Banner from "./components/banner/layout";
import GetInTouch from "./components/getintouch/layout";
import HomeBlog from "./components/homeblog/layout";

import PageFadeIn from "./components/PageFadeIn"
import Preloader from "./components/Preloader"

import Link from "next/link";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | D3',
  description: '',
  keywords: '',
};



export default function Home() {
  return (
    <main>
      <Preloader/>
      <PageFadeIn>
        <Header />
        <Banner/>
        <SponsorLogos/>
        <EconomicGraph/>
        <Mission/>
        <Network/>
        <Partner/>
        <Leadership/>
        <HomeBlog/>
        <GetInTouch/>
        <Footer />
      </PageFadeIn>
    </main>
  );
}
