import HeroContent from "./HeroContent";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-screen w-full">
            <video
             autoPlay
             muted
             loop
             className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
            >
                <source src="/video/public_blackhole.webm" type="video/webm"/>
            </video>
            <HeroContent/>
        </div>
    )
}

export default Hero;