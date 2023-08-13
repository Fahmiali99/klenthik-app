import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const menu = [
  {
    title: "Fitur",
    children: [
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
    ],
  },

  {
    title: "Activity",
    children: [
      {
        name: "Komunitas Daur ",
        href: "/",
      },
      {
        name: "Peluang Usaha ",
        href: "/about",
      },
      {
        name: "Pelatihan",
        href: "/article",
      },
    ],
  },

  {
    title: "Legal",
    children: [
      {
        name: "Privacy Policy",
        href: "/",
      },
      {
        name: "Terms &amp; Conditions",
        href: "/about",
      },
      {
        name: "Intro Klenthink",
        href: "/article",
      },
    ],
  },
];

export const sosmed = [
  {
    Icons: SiGmail,
    href: "mailto:fahmiali130499@gmail.com",
  },
  {
    Icons: FaInstagram,
    href: "https://instagram.com/klenthik.id",
  },
  {
    Icons: FaLinkedinIn,
    href: "https://www.linkedin.com/",
  },
  {
    Icons: FaPhoneAlt,
    href: "https://wa.me/+62",
  },
];
