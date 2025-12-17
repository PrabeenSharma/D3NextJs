'use client'
import React, { useEffect, useState } from 'react';
import ExportedImage from "../../components/layouts/ExportedImage";
import Link from "next/link";
import styles from './banner.module.css';
import HomeBanner from './_components/HomeBanner';

import { faArrowRight, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faDiscord, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Banner() {

	return (
		<main>
			<div className={styles.homeBanner}>
				<HomeBanner/>
			</div>
		</main>
	);
}
