"use client";

import { useState } from "react";
import ExportedImage from "@/app/components/layouts/ExportedImage";
import styles from "./productaccordion.module.css"; 

export default function ProductAccordion() {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <div className="row gx-5 align-items-center">

      <div className="col-lg-6">
        <div className="accrodianHolder">
          <div className="accordion" id="accordionExample">

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  onClick={() => setActiveImage(1)}
                >
                  Onboard
                </button>
              </h2>

              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>Doma connects directly with leading registrars to bring over 30 million domains onchain. Every domain remains fully DNS-compliant, maintaining its core internet functionality while unlocking new possibilities.</p>

                  <div className={styles.accrodianMobileImage}>
                    <ExportedImage src="/assets/images/product_image-1.jpg" width={936}  height={653} alt="" unoptimized />
                  </div>

                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  onClick={() => setActiveImage(2)}
                >
                  Tokenize
                </button>
              </h2>

              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>Doma converts domains into programmable tokens without compromising DNS standards. Each tokenized domain becomes a tradable asset with proven real-world utility, domains that power actual websites, now with the liquidity of real-world assets.</p>
                  <div className={styles.accrodianMobileImage}>
                    <ExportedImage src="/assets/images/product_image-2.jpg" width={936}  height={653} alt="" unoptimized />
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  onClick={() => setActiveImage(3)}
                >
                  Distribute
                </button>
              </h2>

              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>Tokenized domains can be bridged and accessed by over 150 million users and wallets across major Web3 ecosystems including Base, Solana, Avalanche, and ENS.</p>
                  <div className={styles.accrodianMobileImage}>
                    <ExportedImage src="/assets/images/product_image-3.jpg" width={936}  height={653} alt="" unoptimized />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="col-lg-6" >
        <div className={styles.proTopImage}>

          {activeImage === 1 && (
            <div className="accrodianImage-1 fadeAnim">
              <ExportedImage
                src="/assets/images/product_image-1.jpg"
                width={936}
                height={653}
                alt=""
                unoptimized
              />
            </div>
          )}

          {activeImage === 2 && (
            <div className="accrodianImage-2 fadeAnim">
              <ExportedImage
                src="/assets/images/product_image-2.jpg"
                width={936}
                height={653}
                alt=""
                unoptimized
              />
            </div>
          )}

          {activeImage === 3 && (
            <div className="accrodianImage-3 fadeAnim">
              <ExportedImage
                src="/assets/images/product_image-3.jpg"
                width={936}
                height={653}
                alt=""
                unoptimized
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
