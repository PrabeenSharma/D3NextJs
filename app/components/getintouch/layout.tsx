'use client'
import React, { useEffect, useState } from 'react';
import ExportedImage from "../../components/layouts/ExportedImage";
import Link from "next/link";
import styles from './getintouch.module.css';


import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faDiscord, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function GetInTouch() {

	return (
		<main>
			<div className={styles.getintouch} >
				<div className='container' data-aos="fade-up">
					<div className={styles.getInTOuchInner}>
						<div className='row justify-content-between'>
							<div className='col-lg-5'>
								<h6>Get in touch</h6>
								<h2>Shape your domain future with us</h2>
							</div>
							<div className='col-lg-6'>
								<form>
									<input type='text' placeholder='Full name'></input>
									<input type='email' placeholder='Email'></input>
									<input type='text' placeholder='Company'></input>
									<textarea placeholder='Tell us more about your project'></textarea>
									<div className={styles.formCheck}>
										<input type="checkbox" id="agree" className="form-check-input"/>
										<label htmlFor="agree" className="form-check-label"> I agree to receive other communications from D3 Global </label>
									</div>
									<div className={styles.formCheck}>
										<input type="checkbox" id="agree2" className="form-check-input"/>
										<label htmlFor="agree" className="form-check-label"> I agree to D3 Global Privacy Policy and Terms of Service </label>
									</div>
									<input type='submit' value="Send"></input>
								</form>
								<div className={styles.noteSection}>
									<p>You will be contacted within 24 hours <FontAwesomeIcon icon={faCircleInfo} /></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='leaderShipSliderHolder'></div>
			</div>
		</main>
	);
}
