'use client'
import React, { useEffect, useState } from 'react';
import ExportedImage from "../../components/layouts/ExportedImage";
import Link from "next/link";
import styles from './network.module.css';

import { faArrowRight, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faDiscord, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Network() {

	return (
		<main>
			<div className={styles.networkHolder}>
				<div className='container'>
					<h6>DOMA Network</h6>
					<div className='sectionHeaderHolder'>
						<h2>Making domains great again</h2>
						<div className='btnHolder'><Link href="https://start.doma.xyz/" target='_blank' className='btn btn-main'>Discover Doma app</Link></div>
					</div>
					<div className={styles.nextworkBoxHolder}>
						<div className={styles.nextworkBox} data-aos="fade-right" data-aos-delay="0">
							<div className={styles.networkImage}>
								<ExportedImage src="/assets/images/network-image-1.png" width="1208" height="510" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
							</div>
							<h5>DNS Compliant Tokenization</h5>
						</div>
						<div className={styles.nextworkBox} data-aos="fade-right" data-aos-delay="600">
							<div className={styles.networkImage}>
								<ExportedImage src="/assets/images/network-image-2.png" width="1208" height="510" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
							</div>
							<h5>DNS-Compliant Blockchain Architecture</h5>
						</div>
						<div className={styles.nextworkBox} data-aos="fade-right" data-aos-delay="0">
							<div className={styles.networkImage}>
								<ExportedImage src="/assets/images/network-image-3.png" width="1208" height="510" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
							</div>
							<h5>Massive Web3 Distribution</h5>
						</div>
						<div className={styles.nextworkBox} data-aos="fade-right" data-aos-delay="600">
							<div className={styles.networkImage}>
								<ExportedImage src="/assets/images/network-image-4.png" width="1208" height="510" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
							</div>
							<h5>Unleashing DomainFi Innovation</h5>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
