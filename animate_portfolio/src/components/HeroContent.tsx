'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { variantFromTop,variantFromLeft,variantFromBottom,variantFromRight } from '@/utils/motion';

const HeroContent = () => {
    return (
        <div className="w-full h-full flex flex-row flex-wrap z-10 relative text-white">
            <div className="h-full w-[50vw] px-[6vw] flex flex-col justify-center space-y-[6vh]">
                <motion.div
                    className="flex flex-row space-x-2 border-[#7042f88b] border opacity-90 
                px-[20px] py-[10px] rounded-full w-fit h-fit"
                    variants={variantFromTop(0.5)} animate="visible" initial="hidden"
                >
                    <SparklesIcon className="text-[#b49bff] w-[20px] h-[20px]" />
                    <div>
                        Fullstack Developer Portfolio
                    </div>
                </motion.div>

                <motion.div 
                    className="text-[50px] font-bold"
                variants={variantFromLeft(0.5)} animate="visible" initial="hidden">
                    <div>
                        Providing
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> the best</span>
                    </div>

                    <div>
                        project experience
                    </div>
                </motion.div>

                <motion.div 
                    className="text-lg text-gray-400"
                variants={variantFromLeft(0.8)} animate="visible" initial="hidden">
                    I'm a Full Stack Software Engineer with experience in Website, Mobile, and Software development.
                    Check out my projects and skills
                </motion.div>

                <motion.div 
                    className="cursor-pointer rounded-lg border-[3px] border-purple-900 bg-purple-950
                px-[50px] py-[10px] w-fit h-fit"
                variants={variantFromBottom(1.1)} animate="visible" initial="hidden">
                    Learn More!
                </motion.div>
            </div>

            <motion.div 
                className="h-full w-[50vw] px-[6vw] flex flex-row justify-center items-center"
            variants={variantFromRight(0.8)} animate="visible" initial="hidden">
                <Image className="h-full w-full"
                src="/img/mainIconsdark.svg"
                alt="Failed to load image"
                width={1000}
                height={1000}/>
            </motion.div>
        </div>
    )
}

export default HeroContent;
