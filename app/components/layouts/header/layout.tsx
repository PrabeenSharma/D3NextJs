'use client'
import React, { useEffect, useState } from 'react';
import ExportedImage from '../ExportedImage';
import Link from "next/link";
import styles from './header.module.css';

import Navbar from '../Navbar'


import { faArrowRight, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {

	return (
		<main>
			<Navbar/>
		</main>
	);
}
