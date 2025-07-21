"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { fetchProjects } from "@/lib/api";
import FadeInDiv from "@/animations/FadeInDiv";

export default function page() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then(setProjects).catch(console.error);
  }, []);
  return (
    <div className="bg-[#212829] w-full p-5 min-h-screen">
      <header>
        <FadeInDiv>
          <Link href={"/projects"}>
            <Button className="text-white">Back</Button>
          </Link>
        </FadeInDiv>
      </header>
      <div className="flex flex-col justify-between items-center">
        {projects.map((proj) => (
          <FadeInDiv
            key={proj._id}
            className="bg-[#216143] p-1.5 my-8 md:w-[900px] cursor-pointer rounded-2xl relative"
          >
            <a
              href={`${proj.link}`}
              target="_blank"
              className="block text-black"
              rel="noopener noreferrer"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-2xl md:h-[438px] md:object-cover"
              />
              <h2 className="text-xl  font-bold mt-2 text-center text-white">
                {proj.title}
              </h2>
              <p className="text-white">{proj.description}</p>
              <p className="text-white text-sm mt-2">stack: {proj.stack}</p>
            </a>
            <a
              href={`${proj.code}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:absolute md:bottom-2 md:right-2"
            >
              <Button className="m-2 ml-auto">View code</Button>
            </a>
          </FadeInDiv>
        ))}
      </div>
    </div>
  );
}
