'use client'
import React, { useEffect, useState } from 'react';
import ExportedImage from "../../components/layouts/ExportedImage";
import Link from "next/link";
import styles from './mission.module.css';

import { faArrowRight, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faDiscord, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MissionSlider from './_components/MissionSlider';


export default function Mission() {

	return (
		<main>
			<div className={styles.missionHolder}>
				<div className='container' data-aos="fade-up">
					<div className='text-center'>
						<h6>The Mission</h6>
						<h3>At D3, we’re building the first-ever blockchain for DomainFi to tokenize all the world’s domains and unlock liquidity, distribution, and monetization across major Web3 ecosystems.</h3>
					</div>
				</div>
				<MissionSlider/>
			</div>
		</main>
	);
}
