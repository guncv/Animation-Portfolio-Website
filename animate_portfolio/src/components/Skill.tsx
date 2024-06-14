import SkillContent from "./SkillContent";
import SkillText from "./SkillText";

const Skill = () => {
    return (
        <div className="w-screen h-screen relative">
            <div className="w-full">
                <SkillText/>
            </div>

            <div className="h-full w-full">
                <SkillContent/>
            </div>
        </div>
    )
}   

export default Skill;