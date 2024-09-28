"use client";

import { useRouter } from "next/navigation";
import UAuth from "@uauth/js";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const uauth = new UAuth({
  clientID: process.env.NEXT_PUBLIC_clientID,
  redirectUri: process.env.NEXT_PUBLIC_redirectUri,
  scope: "openid wallet messaging:notifications:optional",
});

export default function HeaderLogin() {
  //= () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  // Check to see if the user is inside the cache
  useEffect(() => {
    setLoading(true);
    uauth
      .user()
      .then(setUser)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Login with a popup and save the user
  const handleLogin = () => {
    setLoading(true);
    if (!uauth) {
      return;
    }

    uauth
      .loginWithPopup()
      .then(() => uauth.user().then(setUser))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  // Logout and delete user
  const handleLogout = () => {
    setLoading(true);
    if (!uauth) {
      return;
    }

    uauth
      .logout()
      .then(() => setUser(undefined))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <div className="btn bg-[#0D67FE] uppercase font-bold text-center btn-wide h-12">
        Connecting
        <span className="loading loading-spinner loading-xs text-neutral"></span>
        <span className="loading loading-spinner loading-xs text-warning"></span>
        <span className="loading loading-spinner loading-xs text-info"></span>
      </div>
    );
  }

  if (error) {
    console.error(error);
    return <>{redirect("/")}</>;
    /*{String(error.stack)}*/
  }

  if (user) {
    return (
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-squircle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block size-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="absolute mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box max-w-52"
        >
          <li>
            <h2 className="mx-auto py-2">{user.sub}</h2>
            <p className="truncate text-xs text-info max-w-40">
              Address:{user.wallet_address}
              <span>...</span>
            </p>
          </li>
          <li>
            <a className="justify-between">
              CHAT
              <span className="badge">CHAT</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="btn btn-block bg-[#0D67FE] hover:bg-[#0546B7] focus:btn-[#478BFE]  font-bold uppercase btn-wide px-2"
            >
              <svg height="2em" viewBox="0 0 40 40">
                <path
                  d="M38.3333 3.90803V16.5517L1.66666 31.4942L38.3333 3.90803Z"
                  className="fill-blue-400"
                />
                <path
                  d="M31.4583 3.33333V25.1724C31.4583 31.5203 26.3281 36.6667 20 36.6667C13.6719 36.6667 8.54166 31.5203 8.54166 25.1724V15.977L15.4167 12.1839V25.1724C15.4167 26.2394 15.8392 27.2626 16.5913 28.0171C17.3434 28.7716 18.3635 29.1954 19.4271 29.1954C20.4907 29.1954 21.5108 28.7716 22.2629 28.0171C23.015 27.2626 23.4375 26.2394 23.4375 25.1724V7.75862L31.4583 3.33333Z"
                  className="fill-blue-800"
                />
              </svg>
              Logout
            </button>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className="btn bg-[#0D67FE] hover:bg-[#0546B7] focus:btn-[#478BFE] font-bold uppercase h-12 px-2 btn-wide"
    >
      <UDLogo />
      <span className="text-white uppercase">Connect</span>
    </button>
  );
}

//export default HeaderLogin;

function UDLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 2.34473V9.93093L1 18.8965L23 2.34473Z"
        fill="#2FE9FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.875 2V15.1034C18.875 18.9123 15.797 22 12 22C8.20304 22 5.125 18.9123 5.125 15.1034V9.58621L9.25 7.31034V15.1034C9.25 16.4365 10.3273 17.5172 11.6562 17.5172C12.9852 17.5172 14.0625 16.4365 14.0625 15.1034V4.65517L18.875 2Z"
        fill="white"
      />
    </svg>
  );
}
