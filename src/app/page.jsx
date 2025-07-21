"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MotionText from "@/animations/MotionText";
import FadeInDiv from "@/animations/FadeInDiv";
import { FaInstagram, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      <section className="h-screen bg-[#212829]  max-w-full overflow-x-hidden">
        <FadeInDiv>
          <header className="flex justify-end items-center h-15 p-5 pt-4 bg-[#02c37e]">
            <ul className="hidden md:flex justify-end gap-3.5">
              <Button variant="destructive" className="text-2xl hover:text-3xl">
                <Link href={"/aboutMe"}>
                  <MotionText>About me</MotionText>
                </Link>
              </Button>
              <Button variant="destructive" className="text-2xl hover:text-3xl">
                <Link href={"/projects"}>
                  <MotionText>Projects</MotionText>
                </Link>
              </Button>
            </ul>
            <div className="text-white flex gap-3 md:hidden">
              <a
                href="https://t.me/Eugkime"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="">
                  <FaTelegramPlane></FaTelegramPlane>
                </Button>
              </a>
              <a
                href="https://www.instagram.com/eug.kime"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="">
                  <FaInstagram></FaInstagram>
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/eugene-kim-123569355"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="">
                  <FaLinkedinIn></FaLinkedinIn>
                </Button>
              </a>
            </div>
          </header>
        </FadeInDiv>

        <FadeInDiv className="flex p-5 sm:gap-[15%] md:justify-around">
          <MotionText className="text-white flex-wrap flex w-[300px] font-bold text-[65px] md:w-[320px] md:h-[200px] md:mt-10 md:mr-7 sm:w-[300px] ">
            Portfolio Eugene
          </MotionText>

          <div className="hidden md:flex md:w-[48%] md:flex-col ">
            <p className="text-5xl text-white pt-[20%]">
              Hi, I'm Eugene, a frontend developer who loves creating clean and
              interactive web experiences.
            </p>
            <div className="flex justify-end items-end mt-[30%]">
              <div className="text-white flex gap-3">
                <a
                  href="https://t.me/Eugkime"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="">
                    <FaTelegramPlane></FaTelegramPlane>
                  </Button>
                </a>
                <a
                  href="https://www.instagram.com/eug.kime"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="">
                    <FaInstagram></FaInstagram>
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/eugene-kim-123569355"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="">
                    <FaLinkedinIn></FaLinkedinIn>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </FadeInDiv>
        <div className="md:hidden">
          <div className="flex flex-col gap-7 mt-[90px] items-center">
            <FadeInDiv>
              <Link href={"/projects"}>
                <Button className="text-3xl text-white rounded-3xl p-7 w-80 active:scale-90">
                  Pet Projects
                </Button>
              </Link>
            </FadeInDiv>
            <FadeInDiv>
              <Link href={"/aboutMe"}>
                <Button className="text-3xl text-white rounded-3xl p-7 w-80 active:scale-90">
                  About me
                </Button>
              </Link>
            </FadeInDiv>
          </div>
        </div>
      </section>
    </div>
  );
}
