'use client'
import React, { useEffect, useState } from 'react';
import ExportedImage from '../ExportedImage';
import Link from "next/link";
import styles from './footer.module.css';

import { faArrowRight, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faDiscord, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Footer() {

	return (
		<main>
			<div className={styles.footer}>
				<div className='container'>
					<div className={styles.footerTop}>
						<div className='row'>
							<div className='col-lg-5 order-lg-1 order-md-2 order-2'>
								<div className={styles.footerMenuHolder}>
									<div className={styles.footerMenuColumn}>
										<ul>
											<li><Link href="/products">Products</Link></li>
											<li><Link href="/about">About</Link></li>
											<li><Link href="/partners">Partners</Link></li>
											<li><Link href="/careers">Careers</Link></li>
											<li><Link href="https://blog.d3.com/" target='_blank'>Blog</Link></li>
										</ul>
									</div>
									<div className={styles.footerMenuColumn}>
										<ul>
											<li><Link href="https://docs.doma.xyz/" target='_blank'>Docs</Link></li>
											<li><Link href="https://doma.xyz/" target='_blank'>Doma app</Link></li>
										</ul>
									</div>
								</div>
								<div className={styles.socialIconsHolder}>
									<ul>
										<li><Link href="https://x.com/d3inc" target='_blank'><FontAwesomeIcon icon={faXTwitter} /></Link></li>
										<li>
											<Link href="https://www.linkedin.com/company/d3inc/%20" target='_blank'>
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M23.1164 11.5582C16.7327 11.5582 11.5582 6.38364 11.5582 0C11.5582 6.38364 6.38364 11.5582 0 11.5582C6.38364 11.5582 11.5582 16.7327 11.5582 23.1164C11.5582 16.7327 16.7327 11.5582 23.1164 11.5582Z" fill="#f8f8ffa3"></path></svg>
											</Link>
										</li>
										<li><Link href="https://x.com/d3inc" target='_blank'><FontAwesomeIcon icon={faXTwitter} /></Link></li>
										<li><Link href="https://discord.com/invite/doma" target='_blank'><FontAwesomeIcon icon={faDiscord} /></Link></li>
										<li><Link href="https://www.youtube.com/@D3Inc" target='_blank'><FontAwesomeIcon icon={faYoutube} /></Link></li>
									</ul>
								</div>
							</div>
							<div className='col-lg-5 order-lg-2 order-md-1 order-1'>
								<p>World's first purpose-built blockchain for DomainFi: <br/>tokenization and DeFi for a $360B+ real-world asset class</p>
							</div>
						</div>
					</div>
					<div className={styles.footerBottom}>
						<div className='row'>
							<div className='col-lg-5 order-lg-1 order-md-2 order-2'>
								<div className={styles.copyright}>
									<p>© 2025 D3 Global Inc . All rights reserved</p>
								</div>
							</div>
							<div className='col-lg-7 order-lg-1 order-md-1 order-1'>
								<div className={styles.footerLinks}>
									<ul>
										<li><Link href="/privacy-policy">Privacy Policy</Link></li>
										<li><Link href="/terms-of-service">Terms of Service</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
