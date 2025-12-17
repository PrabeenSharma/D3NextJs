'use client'
import React, { useEffect, useState } from 'react';
import ExportedImage from '@/app/components/layouts/ExportedImage';
import Link from "next/link";
import styles from './partnerecosystem.module.css';


import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faDiscord, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function PartnerEcosystem() {

	return (
		<main>
			<div className={styles.getintouch}>
				<div className='container'>
					<div className={`${styles.getInTOuchInner} networkSec`}>
						<div className='text-center'>
							<h2>Join our partner ecosystem</h2>
							<p>Ready to build the DomainFi economy together?</p>
							<div className='buttonGroupCenter'>
								<Link href="#" className='btn btn-white'>Get in touch</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
