'use client'
import Link from 'next/link';
import Image from "next/image"
import { RefObject, useEffect } from 'react';

interface Props {
    aboutRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
}

const HeroNavbar = ({aboutRef, skillsRef, projectsRef} : Props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
        if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const Socials = [
        {
            source : "/img/instagram.svg",
            link : "https://www.instagram.com/guncv_/"
        },
        {
            source : "/img/facebook.svg",
            link : "https://www.facebook.com/profile.php?id=100009512147281"
        },
        {
            source : "/img/discord.svg",
            link : "https://discord.com/"
        }
    ]

    return (
        <div className="w-full shadow-[#2AOE61]/50 bg-[#03001417] backdrop-blur-md fixed top-0 left-0 right-0 h-[10vh] z-[50]
            flex flex-row justify-between">
            <div className="w-[33vw] h-full flex flex-row items-center justify-start pl-[3vw] space-x-8">
                <Image className="w-[5vw] h-[80%]" 
                src="/img/NavLogo.png"
                alt="Failed To load image"
                width={1000}
                height={1000}/>
                <div className="text-[20px]">
                    Guncv Dev
                </div>
            </div>

            <div className="w-[33vw] h-full flex justify-center items-center py-[2vh]">
                <div className="w-full flex justify-between border border-[#7042f861] bg-[#0300145e] items-center flex-row 
                    h-full text-[15px] rounded-full px-5">   
                    <div className="cursor-pointer" onClick={() => scrollToRef(aboutRef)}>About me</div>
                    <div className="cursor-pointer" onClick={() => scrollToRef(skillsRef)}>Skills</div>
                    <div className="cursor-pointer" onClick={() => scrollToRef(projectsRef)}>Projects</div>
                </div>
            </div>
            
            <div className="w-[33vw] h-full flex justify-end flex-row pr-[3vw] items-center space-x-6">
                {Socials.map((social) => (
                    <Link href={social.link} className="w-[25px] h-[80%]" target="_blank">
                        <Image className="w-full h-full" 
                        src={social.source}
                        alt = "Failed to load"
                        width = {1000}
                        height = {1000}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HeroNavbar;