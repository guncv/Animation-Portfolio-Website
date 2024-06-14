'use client'
import { useRef } from "react"
import Encryption from "./Encryption"
import Hero from "./Hero"
import HeroNavbar from "./HeroNavbar"
import Projects from "./Projects"
import Skill from "./Skill"

const PageToScroll = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    
    return (
        <div className="flex flex-col h-[850px] w-full gap-20">
            <HeroNavbar aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef}/>
            <div ref={aboutRef}>
                <Hero/>
            </div>

            <div ref={skillsRef}>
                <Skill/>
            </div>
            <Encryption/>
            <div ref={projectsRef}>
                <Projects/>
            </div>

            <div className="text-white text-[15px] text-center py-[20px]">
            @ Chanagun Dev 2024 Inc, All rights reserved
            </div>
        </div>  
    )
}

export default PageToScroll