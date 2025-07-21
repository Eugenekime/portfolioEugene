"use client";

import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import MotionText from "@/animations/MotionText";

export default function Footer() {
  return (
    <footer className="flex justify-items-start items-center bg-[#02c37e] w-full h-23 mb-5 px-3 md:h-18 justify-end">
      <ul className="flex flex-col justify-self-start items-start md:justify-end gap-0">
        <a
          href="https://instagram.com/eugkime"
          className="flex items-center gap-2 "
        >
          <FaInstagram />
          {":"}
          <MotionText className="flex-row"> @eugkime</MotionText>
        </a>
        <a href="https://t.me/Eugkime" className="flex items-center gap-2 ">
          <FaTelegramPlane />
          {":"}
          <MotionText className="flex-row">@Eugkime</MotionText>
        </a>
        <a
          href="mailto:kimeugene@gmail.com"
          className="flex items-center gap-2 "
        >
          <SiGmail />
          {":"}
          <MotionText className="flex-row">kimeugene@gmail.com</MotionText>
        </a>
      </ul>
    </footer>
  );
}
