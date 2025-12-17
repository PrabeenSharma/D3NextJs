'use client'
import React, { useEffect, useState } from 'react';
import ExportedImage from "../../components/layouts/ExportedImage";
import Link from "next/link";
import styles from './jointhenetwork.module.css';

import GetInTouchModal from '../modal/GetInTouchModal';
import GetInTouchButton from '../buttons/GetInTouchButton';

import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faDiscord, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function JoinTheNetwork() {

	return (
		<main>
			<div className={styles.getintouch}>
				<div className='container'>
					<div className={`${styles.getInTOuchInner} networkSec`}>
						<div className='text-center'>
							<h2>Join the network</h2>
							<p>Ready to supercharge domains into tokenized digital assets and reach the largest global Web3 ecosystems?</p>
							<div className='buttonGroupCenter'>
								<GetInTouchButton/>
								<Link href="https://docs.doma.xyz/" target='_blank' className='btn btn-outline'>Explore the docs</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<GetInTouchModal/>
		</main>
	);
}
