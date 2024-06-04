import InstagramIcon from '@mui/icons-material/Instagram';

const HeroNavbar = () => {
    return (
        <div className="w-full shadow-[#2AOE61]/50 bg-[#03001417] backdrop-blur-md fixed top-0 left-0 right-0 h-[10vh] z-[50]
            flex flex-row justify-between">
            <div className="w-[33vw] h-full">

            </div>

            <div className="w-[33vw] h-full flex justify-center items-center py-[2vh]">
                <div className="w-full flex justify-between border border-[#7042f861] bg-[#0300145e] items-center flex-row 
                    h-full text-[15px] rounded-full px-5">   
                    <div> About me </div>
                    <div> Skills </div>
                    <div> Projects </div>
                </div>
            </div>
            
            <div className="w-[33vw] h-full flex justify-end flex-row pr-[20px]">
                <div>
                </div>
            </div>
        </div>
    )
}

export default HeroNavbar;