import Link from "next/link";
export default function Footer(props) {
  return (
    <div className="btm-nav">
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full px-4">
          <div className="text-sm text-primary-100 font-semibold py-2 text-center">
            Copyright
            <span className="font-bold text-primary uppercase px-1">
              0x<span className="text-white">dweb</span>
            </span>
            ©{new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  );
}
