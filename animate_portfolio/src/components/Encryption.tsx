'use client'
import Image from "next/image";
import style from "@/styles/Font.module.css"
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer"
import { variantFromLeft, variantFromTop } from "@/utils/Heromotion";

const Encryption = () => {
    const [ref,inView] = useInView({
        triggerOnce: true
    })

    const [ref2,inView2] = useInView({
        triggerOnce: true
    })

    return (
        <div className="w-screen h-screen flex flex-col justify-between items-center py-[10vh] relative">
            <motion.div ref={ref} className="w-full h-[10vh] text-center text-[30px]"
                variants={variantFromTop(0.2)} animate={inView ? "visible" : "hidden"} initial="hidden">
                <span>Performance</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    {" "} & {" "}
                </span>
                <span>Security</span>
            </motion.div>

            <div className="h-[70vh] w-full relative flex flex-col items-center justify-center z-[20] space-y-[10px]">
                <div className="flex flex-col items-center group cursor-pointer w-auto h-auto z-40">
                    <Image
                        src="/img/LockTop.png"
                        alt="Lock Top"
                        width={50}
                        height={50}
                        className="translate-y-5 transition-transform duration-200 group-hover:translate-y-11"
                    />
                    <Image
                        src="/img/LockMain.png"
                        alt="Lock Main"
                        width={70}
                        height={70}
                        className="z-10"
                    />
                </div>


                <div className="px-[15px] py-[4px] z-[20] border-[1px] border-[#7042f88b] text-gray-200 opacity-[0.7]
                    rounded-full">
                    Encryption
                </div>

                <div className="h-full w-full absolute flex justify-center">
                    <div className="w-full h-full z-[30] opacity-30 flex justify-center items-center bg-cover">
                        <video
                        autoPlay
                        muted
                        preload="false"
                        loop>
                            <source src="/video/encryption.webm" type="video/webm"/>
                        </video>
                    </div>
                </div>
            </div>

            <motion.div ref={ref2} className={`${style.satisfyFont} text-[20px] h-[5vh]`}
                variants={variantFromLeft(0.2)} animate={inView2 ? "visible" : "hidden"} initial="hidden">
                Secure your data with end-to-end encryption
            </motion.div>
            
        </div>
    )
}

export default Encryption;
