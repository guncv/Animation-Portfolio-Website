import Encryption from "@/components/Encryption";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <main className="h-full w-full">

      <div className="flex flex-col h-[850px] w-full gap-20">
        <Hero/>
        <Skill/>
        <Encryption/>
        <Projects/>
        <div className="text-white text-[15px] text-center py-[20px]">
          @ Chanagun Dev 2024 Inc, All rights reserved
        </div>
      </div>  

    </main>
  );
}
