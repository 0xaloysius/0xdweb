"use client";
/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyCal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#242b29" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <div className="px-1 inline-block hover:text-primary">
      <p
        className="uppercase"
        data-cal-namespace=""
        data-cal-link="0xdweb/30min"
        data-cal-config='{"layout":"month_view"}'
      >
        Contact
      </p>
    </div>
  );
}
