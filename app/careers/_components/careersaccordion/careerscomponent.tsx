"use client";

import { useState } from "react";
import ExportedImage from "@/app/components/layouts/ExportedImage";
import styles from "./careersaccordion.module.css"; 

export default function CareersAccordion() {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <div className="row gx-5 align-items-center">
      <div className="col-lg-6" >
        <div className={styles.proTopImage}>

          {activeImage === 1 && (
            <div className="accrodianImage-1 fadeAnim">
              <ExportedImage
                src="/assets/images/careers-image-1.jpg"
                width={966}
                height={873}
                alt=""
                unoptimized
              />
            </div>
          )}

          {activeImage === 2 && (
            <div className="accrodianImage-2 fadeAnim">
              <ExportedImage
                src="/assets/images/careers-image-2.jpg"
                width={966}
                height={873}
                alt=""
                unoptimized
              />
            </div>
          )}

          {activeImage === 3 && (
            <div className="accrodianImage-3 fadeAnim">
              <ExportedImage
                src="/assets/images/careers-image-3.jpg"
                width={966}
                height={873}
                alt=""
                unoptimized
              />
            </div>
          )}

          {activeImage === 4 && (
            <div className="accrodianImage-4 fadeAnim">
              <ExportedImage
                src="/assets/images/careers-image-4.jpg"
                width={966}
                height={873}
                alt=""
                unoptimized
              />
            </div>
          )}

          {activeImage === 5 && (
            <div className="accrodianImage-5 fadeAnim">
              <ExportedImage
                src="/assets/images/careers-image-5.jpg"
                width={966}
                height={873}
                alt=""
                unoptimized
              />
            </div>
          )}




        </div>
      </div>

      <div className="col-lg-6">
        <div className="accrodianHolder accrodianHolderCareer">
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
                  Ground-floor growth & impact
                </button>
              </h2>

              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>D3 is your chance to dive headfirst into an ultra-early-stage company where every move you make truly matters. You’ll have the opportunity to sharpen your skills, expand your expertise, and shape the foundation of something groundbreaking. Almost everything we’re building today at D3 is “zero-to-one,” meaning you’ll be among the first to craft, refine, and launch key initiatives that define our future success.</p>

                  <div className={styles.accrodianMobileImage}>
                    <ExportedImage src="/assets/images/careers-image-1.jpg" width={966}  height={873} alt="" unoptimized />
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
                  Strong, proven leadership
                </button>
              </h2>

              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>At D3, you’ll work alongside industry visionaries who have been there, done that, and are ready to do it again—only bigger. Our leadership team brings veteran industry experience, sharp insights, and a relentless drive to do big things across every function at D3. You’ll gain invaluable mentorship, develop a high-impact mindset, and be challenged to grow in ways you never imagined.</p>
                  <div className={styles.accrodianMobileImage}>
                    <ExportedImage src="/assets/images/careers-image-2.jpg" width={966}  height={873} alt="" unoptimized />
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
                  Hybrid & flexible work
                </button>
              </h2>

              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>Innovation and collaboration happens everywhere, which is why we operate in a hybrid yet flexible work environment. We have an office in Downtown Los Angeles with hubs in the San Francisco Bay Area and Las Vegas—our team also gathers at offsites and industry conferences around the world.</p>
                  <div className={styles.accrodianMobileImage}>
                    <ExportedImage src="/assets/images/careers-image-3.jpg" width={966}  height={873} alt="" unoptimized />
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                  onClick={() => setActiveImage(4)}
                >
                  One-of-a-kind market positioning
                </button>
              </h2>

              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    We’re pioneering at the intersection of internet infrastructure, real-world assets, and blockchain communities, creating solutions that redefine what’s possible in Web3. If you want to push boundaries, solve complex problems, and be part of a team that’s shaping the future of the Internet, D3 is the place to do it.
                  </p>

                  <div className={styles.accrodianMobileImage}>
                    <ExportedImage src="/assets/images/careers-image-4.jpg" width={966}  height={873} alt="" unoptimized />
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                  onClick={() => setActiveImage(5)}
                >
                  Benefits & wellness
                </button>
              </h2>

              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    We offer a range of industry-leading benefits that are aimed at strengthening the physical, mental, and financial wellness of our employees and their dependents.
                  </p>

                  <div className={styles.accrodianMobileImage}>
                    <ExportedImage src="/assets/images/careers-image-5.jpg" width={966}  height={873} alt="" unoptimized />
                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>

      
    </div>
  );
}
