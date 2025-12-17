'use client'
import React, { useEffect, useState } from 'react';
import ExportedImage from "../../components/layouts/ExportedImage";
import Link from "next/link";
import styles from './economicgraph.module.css';

import { faArrowRight, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faDiscord, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function EconomicGraph() {

	return (
		<main>
			<div className={styles.economicGraphHolder}>
				<div className='container' data-aos="fade-up">
					<h6>The DomainFi Economy</h6>
					<h2>The market grows. Domains grow faster.</h2>
					<div className={styles.graphHolder}>
						<div className='row'>
							<div className='col-lg-4'>
								<div className={styles.graphWhiteBox}>
									<ExportedImage src="/assets/images/graph-1.png" width="572" height="450" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
									<h3>379M+</h3>
									<p>Domains Worldwide</p>
								</div>
							</div>
							<div className='col-lg-4'>
								<div className={styles.graphWhiteBox}>
									<ExportedImage src="/assets/images/graph-2.png" width="572" height="450" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
									<h3>6B+</h3>
									<p>Total Internet Users</p>
								</div>
							</div>
							<div className='col-lg-4'>
								<div className={styles.graphWhiteBox}>
									<ExportedImage src="/assets/images/graph-3.png" width="572" height="450" alt="" unoptimized={true} loading="eager"  ></ExportedImage>
									<h3>14T+</h3>
									<p>Total DNS Queries</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
