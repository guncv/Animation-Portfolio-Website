import { Project_information } from "@/constants/SkillLogo";
import Image from "next/image";

const Projects = () => {
    return (
        <div className="w-screen">

            <div className="text-center text-[50px] w-full h-[20vh]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    My Projects
                </span>
            </div>

            <div className="flex flex-row justify-around flex-wrap w-full">
                    {
                        Project_information.map((image,index) => (
                            <div className="w-[29vw] h-fit space-y-[20px] rounded-xl border-[1px] shadow-lg border-[#2A0E61]
                            transition-transform duration-300 hover:scale-105 z-40 cursor-pointer">
                                <Image className="w-full h-auto rounded-t-xl"
                                alt={image.title}
                                src={image.Image}
                                width={1000}
                                height={1000}/>
                                <div className="w-full h-full px-[15px] z-40"> 
                                    <div className="text-white font-bold text-[25px]">
                                        {image.title}
                                    </div>
                                    <div className="text-gray-300 opacity-80 pb-[20px] pt-[10px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Maecenas non viverra magna. Donec ipsum ante, egestas id nunc at, 
                                        fermentum elementum magna. 
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            </div>

        </div>
    )
}

export default Projects;