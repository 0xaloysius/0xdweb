import Link from "next/link";
import Contactcal from "components/contactcal";
export default function Footer(props) {
  return (
    <div className="btm-nav py-4">
      <div className="mx-auto px-4">
        <hr className="" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full px-4">
            <div className="text-sm text-primary-100 font-semibold py-2 text-center">
              Copyright © {new Date().getFullYear()}
              <Link
                href="https://lexingtontech.us"
                target="_blank"
                className="font-bold text-primary uppercase px-1"
              >
                0xdweb
              </Link>
              |
              <Contactcal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
