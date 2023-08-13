import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import logo from "../../public/assets/common/logo.png";
import Image from "next/image";

function NavigationBar() {
  const router = useRouter();
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
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4 lg:p-0 lg:py-4 ">
        <a href="https://flowbite.com/" className="flex items-center">
          <Image src={logo} width={60} className=" mr-3" alt="Klenthik" />
          <span className="self-center text-primary-dark text-2xl font-semibold whitespace-nowrap ">
            Klenthik
          </span>
        </a>
        <button
          onClick={handleOpen}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
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
