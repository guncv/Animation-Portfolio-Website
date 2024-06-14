import SkillContent from "./SkillContent";
import SkillText from "./SkillText";

const Skill = () => {
    return (
        <div className="w-screen relative space-y-[10vh]">
            <div className="w-full">
                <SkillText/>
            </div>

            <div className="w-full">
                <SkillContent/>
            </div>
        </div>
    )
}   

export default Skill;