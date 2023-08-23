import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import logo from "../../public/assets/common/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";

function NavigationBar() {
  const router = useRouter();
  const [isOpen, setisOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Artikel",
      href: "/article",
    },
    {
      name: "Kegiatan",
      href: "/activity",
    },
  ];
  return (
    <nav
      className={`w-full z-20 bg-white fixed  ${
        scrolled ? " bg-blue-500 duration-300 shadow" : "  "
      }`}
    >
      <div className="w-screen max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between p-4  lg:py-4 ">
        <Link href="/" className="flex items-center">
          <Image src={logo} width={60} className=" mr-3" alt="Klenthik" />
          <span className="self-center text-primary-dark text-2xl font-semibold whitespace-nowrap ">
            Klenthik
          </span>
        </Link>
        <button onClick={handleOpen} type="button" className="  md:hidden  ">
          <Hamburger size={30} toggled={isOpen} toggle={setisOpen} rounded />
        </button>

        <div
          className={`w-full md:block md:w-auto ${open ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 `}
          >
            {menu.map((item, idx) => (
              <li
                key={idx}
                className={
                  router.pathname === item.href
                    ? "active  text-primary-blue"
                    : "text-primary-dark"
                }
              >
                <a
                  href={item.href}
                  className="block py-2 pl-3 pr-4    rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
