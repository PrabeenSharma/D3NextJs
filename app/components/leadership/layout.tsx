'use client'
import React, { useEffect, useState } from 'react';
import ExportedImage from "../../components/layouts/ExportedImage";
import Link from "next/link";
import styles from './leadership.module.css';
import LeadershipSlider from './_components/LeadershipSlider';

import { faArrowRight, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faDiscord, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Leadership() {

	return (
		<main>
			<div className={styles.leadershipHolder} >
				<div className='container' data-aos="fade-up">
					<h6>D3 Leadership</h6>
					<div className='sectionHeaderHolder'>
						<h2>Led by the minds shaping DomainFi</h2>
						<div className='btnHolder'><Link href="/about" className='btn btn-main'>Our team</Link></div>
					</div>
				</div>
				<div className='leaderShipSliderHolder'><LeadershipSlider/></div>
			</div>
		</main>
	);
}
