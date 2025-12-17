'use client'
import React, { useEffect, useState } from 'react';
import ExportedImage from "../../components/layouts/ExportedImage";
import Link from "next/link";
import styles from './blog.module.css';
import BlogSlider from './_components/BlogSlider';

import { faArrowRight, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faDiscord, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function HomeBlog() {

	return (
		<main>
			<div className={styles.leadershipHolder} >
				<div className='container' data-aos="fade-up">
					<h6>D3 Blog</h6>
					<div className='sectionHeaderHolder'>
						<h2>Where ideas come together</h2>
						<div className='btnHolder'><Link href="https://d3.com/blog" target='_blank' className='btn btn-main'>Read blog</Link></div>
					</div>
				</div>
				<div className='blogSliderHolder'><BlogSlider/></div>
			</div>
		</main>
	);
}
