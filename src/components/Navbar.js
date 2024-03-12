import  React,{useEffect,useState } from "react";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import db  from "../firebase";
import { doc, query, getDoc } from "firebase/firestore";
import { useAuth } from "../AuthContext";


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { currentUser, CurrentUserData } = useAuth();

  console.log(CurrentUserData)



  return (
    <>
      <nav
        className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-200 border-gray-200 dark:bg-gray-900 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="flex w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            
            <Link to="/home" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 hover:underline whitespace-nowrap uppercase ">
              iTOP科学教室会計
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>

            <p className="px-3 py-2 items-center text-xs uppercase font-bold leading-snug hover:underline hover:opacity-75">
              {CurrentUserData.name}
            </p>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to="/home" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 hover:underline">
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/event/index" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:underline hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">申請</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/expenses/index" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:underline hover:opacity-75">
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">閲覧</span>
                </Link>
              </li>
              <li>
            
              </li>
              <LogOutButton></LogOutButton>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}