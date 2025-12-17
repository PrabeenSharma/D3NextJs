'use client'
import React, { useEffect, useState } from 'react';
import ExportedImage from '@/app/components/layouts/ExportedImage';
import Link from "next/link";
import styles from './partnerecosystem.module.css';


import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faDiscord, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import GetInTouchModal from '@/app/components/modal/GetInTouchModal';
import GetInTouchButton from '@/app/components/buttons/GetInTouchButton';

export default function PartnerEcosystem() {

	return (
		<main>
			<div className={styles.getintouch}>
				<div className='container' data-aos="fade-up">
					<div className={`${styles.getInTOuchInner} networkSec`}>
						<div className='text-center'>
							<h2>Join our partner ecosystem</h2>
							<p>Ready to build the DomainFi economy together?</p>
							<div className='buttonGroupCenter'>
								<GetInTouchButton/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<GetInTouchModal/>
		</main>
		
	);
}
