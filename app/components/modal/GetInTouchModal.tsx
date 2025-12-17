"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function GetInTouchModal() {
  const formLoaded = useRef(false);

  useEffect(() => {
    const modal = document.getElementById("getInTouch");

    const loadForm = () => {
      if (
        typeof window !== "undefined" &&
        (window as any).hbspt &&
        !formLoaded.current
      ) {
        (window as any).hbspt.forms.create({
          region: "na2",
          portalId: "40823119",
          formId: "44b15aa2-de88-4049-9c89-f024cfdf42c1",
          target: "#hs-form-container",
        });
        formLoaded.current = true;
      }
    };

    modal?.addEventListener("shown.bs.modal", loadForm);
    return () => modal?.removeEventListener("shown.bs.modal", loadForm);
  }, []);

  return (
    <>
      <Script
        src="https://js.hsforms.net/forms/v2.js"
        strategy="afterInteractive"
      />

      <div className="modal fade" id="getInTouch" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body">
              <div id="hs-form-container" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
