import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from "@/constants/SkillLogo";
import SkillDataProvider from "./SkillDataProvider";

const SkillContent = () => {
    return (
        <div className="h-full w-full flex flex-col relative space-y-[20px] justify-center">
            <div className="flex flex-row justify-center w-full space-x-[10px]">
                {Frontend_skill.map((image,index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

            <div className="flex flex-row justify-center w-full space-x-[10px]">
                {Backend_skill.map((image,index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))} 
            </div>

            <div className="flex flex-row justify-center w-full space-x-[10px]">
                {Full_stack.map((image,index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))} 
            </div>

            <div className="flex flex-row justify-center w-full space-x-[10px]">
                {Other_skill.map((image,index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))} 
            </div>
            
            <div className="h-full w-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 flex justify-center items-center bg-cover">
                <video
                autoPlay
                muted
                preload="false"
                loop>
                    <source src="/video/cards-video.webm" type="video/webm"/>
                </video>
                </div>
            </div>
        </div>  
    )
}

export default SkillContent;