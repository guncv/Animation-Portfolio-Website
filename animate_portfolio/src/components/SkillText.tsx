'use client'
import { SparklesIcon } from "@heroicons/react/24/solid";
import style from "@/styles/Font.module.css"
import {motion} from "framer-motion"
import { variantFromTop,variantFromLeft,variantFromRight } from '@/utils/Heromotion';
import { useInView } from "react-intersection-observer";

const SkillText = () => {
    const {ref,inView} = useInView({
        triggerOnce: true
    })

    return (
        <div className="flex flex-col justyfy-center items-center flex-wrap space-y-[20px]">
            <motion.div ref={ref} className="flex flex-row space-x-2 border-[#7042f88b] border opacity-90 
                px-[20px] py-[10px] rounded-full w-fit h-fit"
                variants={variantFromTop(0.1)} animate={inView? "visible" : "hidden"} initial="hidden">
                <SparklesIcon className="text-[#b49bff] w-[20px] h-[20px]" />
                <div>
                    Think better with Next js 15
                </div>
            </motion.div>

            <motion.div ref={ref} className="text-[30px] text-white"
            variants={variantFromLeft(0.1)} animate={inView? "visible" : "hidden"} initial="hidden">
                Making apps with modern technologies
            </motion.div>

            <motion.div ref={ref} className={`${style.satisfyFont} text-[20px] text-gray-200 mt-[20px] `}
            variants={variantFromRight(0.1)} animate={inView? "visible" : "hidden"} initial="hidden">
                There miss a task, deadline or idea 
            </motion.div>
        </div>
    )
}

export default SkillText;