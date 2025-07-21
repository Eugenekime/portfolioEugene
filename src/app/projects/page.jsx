import FadeInDiv from "@/animations/FadeInDiv";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div className="bg-[#212829] w-full h-screen p-5 md:h-screen">
      <header>
        <FadeInDiv>
          <Link href={"/"}>
            <Button className="text-white">Back</Button>
          </Link>
        </FadeInDiv>
      </header>
      <FadeInDiv className="flex flex-col m-8 justify-center items-center gap-4 md:justify-around md:flex-row">
        <Link href={"/projects/frontend"}>
          <Button className="text-white w-[200px] md:w-[250px] md:h-[250px] md:text-5xl">
            Frontend
          </Button>
        </Link>
        <Link href={"/projects/frontend"}>
          <Button className="text-white w-[200px] md:w-[250px] md:h-[250px] md:text-5xl">
            Backend
          </Button>
        </Link>
      </FadeInDiv>
    </div>
  );
}
