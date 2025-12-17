"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ExportedImage from "./ExportedImage";
import { useState, useEffect } from "react";

import GetInTouchButton from "../buttons/GetInTouchButton";
import GetInTouchModal from "../modal/GetInTouchModal";



export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path ? "active" : "";
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`headerHolder ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="headerContent">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="logoHolder">
                <Link className="navbar-brand" href="/">
                  <ExportedImage src="/assets/images/logo.png" width={143} height={39} alt="" unoptimized />
                </Link>
              </div>

              <div className="menuHolder">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className={`nav-link ${isActive("/products")}`} href="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${isActive("/partners")}`} href="/partners">Partners</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${isActive("/about")}`} href="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${isActive("/careers")}`} href="/careers">Careers</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="getInBtn">
                <GetInTouchButton />
                
              </div>

            </div>
          </nav>
        </div>
      </div>
      <GetInTouchModal />
    </div>
  );
}

