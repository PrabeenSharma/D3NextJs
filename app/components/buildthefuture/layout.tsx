'use client'
import React, { useEffect, useState } from 'react';
import ExportedImage from "../../components/layouts/ExportedImage";
import Link from "next/link";
import styles from './buildthefuture.module.css';


import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faDiscord, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function BuildTheFuture() {

	return (
		<main>
			<div className={styles.getintouch}>
				<div className='container'>
					<div className={`${styles.getInTOuchInner} networkSec`}>
						<div className='text-center'>
							<h6>Careers at D3</h6>
							<h2>Let’s build the future of DomainFi</h2>
							<p>We’re expanding across key roles. If you thrive in fast-growth environments, we’d love to meet you.</p>
							<div className='buttonGroupCenter'>
								<Link href="/careers" className='btn btn-white'>Join us</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
