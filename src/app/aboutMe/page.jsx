"use client";
import AnimatedList from "@/animations/AnimatedList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div className="bg-[#212829] w-full h-full p-5 text-white">
      <nav>
        <Link href={"/"}>
          <Button>Back</Button>
        </Link>
      </nav>
      <AnimatedList className="flex flex-col p-5 mx-1.5 text-2xl leading-12 gap-5">
        <p className="bg-[#293638] rounded-2xl p-2.5">
          My name is Eugene. I was born in 2002 in a small village in
          Uzbekistan. I completed only secondary school, and after graduation, I
          went to South Korea to earn money. Since I didn’t have any specific
          skills, I worked at various factories.
        </p>
        <p className="bg-[#293638] rounded-2xl p-2.5">
          At some point, I realized I didn’t want to live like that anymore and
          decided to change my life. I made a plan: to save money for one year
          to invest in education and find my true path. After a year of hard
          work, I managed to save 26,750,000 KRW. It wasn’t a huge amount, but
          it was enough to take the next step.
        </p>
        <p className="bg-[#293638] rounded-2xl p-2.5">
          I tried online sales, got my driver’s license, learned about Amway and
          their system, studied insurance, and even attempted to create my own
          sales course on Coupang. Unfortunately, none of those ventures worked
          out.
        </p>
        <p className="bg-[#293638] rounded-2xl p-2.5">
          That’s when I decided to become a programmer — specifically, a
          frontend developer. But I don’t want to stop there. I’m aiming to grow
          further in this field by learning backend development, DevOps, AI, and
          more.
        </p>
        <p className="bg-[#293638] rounded-2xl p-2.5">
          This website showcases some of my pet projects. I built it using
          modern technologies such as Next.js, Framer Motion, and Tailwind on
          the frontend, along with MongoDB and Express on the backend.
        </p>
      </AnimatedList>
    </div>
  );
}
