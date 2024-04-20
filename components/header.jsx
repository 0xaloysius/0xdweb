"use client";
import Link from "next/link";
import Image from "next/image";

const logoImage = ({ src, width, quality }) => {
  return `https://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

const Header = () => (
  <div className="navbar flex justify-between px-4 whitespace-normal uppercase">
    <div className="flex-1">
      <div className="avatar">
        <div className="p-0 h-12 w-12">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>
    </div>
    <div className="">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Image
              loader={logoImage}
              className="size-10"
              width="10"
              height="10"
              alt="Image"
              src="vercel.svg"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 312.5 211.83246657671296"
      className="size-12 btn btn-primary btn-circle p-1 stroke-2"
    >
      <g
        transform="matrix(4.288688776400825,0,0,4.288688776400825,47.42262244719835,-5.580061746098252)"
        className="fill-accent-content"
      >
        <path
          d="M3.5885 40.038594 l-1.5885 0 l0 -27.999 l1.5885 0 l0 27.999 z M6.6112 38.45 l10.167 -0.000039062 l0 1.5885 l-11.755 0 l0 -1.071 l-0.000078125 0 l0 -26.928 l1.5886 0 l0 26.411 z M26.187 26.032 l6.5268 14.003 l-1.753 0 l-0.010352 -0.022226 l-5.6396 -12.1 l-5.6492 12.123 l-1.753 0 l0.025625 -0.054844 l6.5012 -13.948 l-6.522 -13.993 l1.7529 0 l0.01043 0.022305 l5.6344 12.09 l5.6452 -12.112 l1.7529 0 l-0.025625 0.054844 z M26.187 33.0432 l3.2588 6.9924 l-1.7521 0 l-2.383 -5.1124 l-2.3825 5.1124 l-1.7529 0 l3.2589 -6.9924 l-0.00023438 -0.000625 l0.87648 -1.8794 z M33.856 12.027000000000001 l14.778 0 l0 1.5885 l-8.0665 0 l0 26.423 l-1.5885 0 l0 -26.423 l-5.1231 0 l0 -1.5885 z M42.002 15.05 l6.6323 0 l0 1.5885 l-5.0439 0 l0 23.4 l-1.5884 0 l0 -24.989 z"
          className="fill-accent-content"
        />
      </g>
    </svg>
  );
}
