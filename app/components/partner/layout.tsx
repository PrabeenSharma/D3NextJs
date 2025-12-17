'use client'
import React, { useEffect, useState } from 'react';
import ExportedImage from "../../components/layouts/ExportedImage";
import Link from "next/link";
import styles from './partner.module.css';

import { faArrowRight, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faDiscord, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Partner() {

	return (
		<main>
			<div className={styles.partnerHolder} >
				<div className='container' data-aos="fade-up">
					<h6>D3 Partner</h6>
					<div className='sectionHeaderHolder'>
						<h2>Building the bridge between<br/> Web2 & Web3</h2>
						<div className='btnHolder'><Link href="/partners" className='btn btn-main'>Explore partners</Link></div>
					</div>
					<div className={styles.partnerImageHolder}>
						<div className={styles.partnerColumn}>
							<ExportedImage className={styles.imageMargin} src="/assets/images/partner-image-1.jpg" width="632" height="330" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
							<ExportedImage src="/assets/images/partner-image-2.jpg" width="632" height="390" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
						</div>
						<div className={styles.partnerColumn}>
							<ExportedImage src="/assets/images/partner-image-3.jpg" width="632" height="756" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
						</div>
						<div className={styles.partnerColumn}>
							<ExportedImage src="/assets/images/partner-image-4.jpg" width="632" height="756" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
