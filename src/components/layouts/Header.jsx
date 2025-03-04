import { useState } from "react";
import { Link } from "react-router";
export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  function toggleNav() {
    setOpenNav(!openNav);
  }
  return (
    <header className="bg-[#1B262C] text-white py-5 sticky top-0">
      <div className="container px-5 mx-auto flex items-center justify-between">
        <div className="logo w-32 text-lg font-bold">
          <Link to={"/"}>Dark Weather</Link>
        </div>
        <i onClick={toggleNav} className="fa-solid fa-bars text-2xl text-white block md:hidden"></i>
        <nav
          className={`bg-[#1B262C] absolute top-16 left-0 md:static flex md:flex flex-col md:flex-row justify-center md:justify-between md:items-center w-full p-5 md:p-0 ${
            openNav ? "block" : "hidden"
          }`}
        >
          <ul className="mx-auto flex gap-4 flex-col md:flex-row text-center">
            <li>
              <Link
                onClick={() => {
                  setOpenNav(false);
                }}
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setOpenNav(false);
                }}
                to={"/DownloadApp"}
              >
                Download App
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setOpenNav(false);
                }}
                to={"/ContactUs"}
              >
                Contact us
              </Link>
            </li>
          </ul>
          <Link
            onClick={() => {
              setOpenNav(false);
            }}
            className="bg-gradient-to-r from-[#3A5E72] to-[#5C93B1] py-3 px-5 rounded-lg text-center mt-3 md:mt-0"
            to={"/SignUp"}
          >
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
}
