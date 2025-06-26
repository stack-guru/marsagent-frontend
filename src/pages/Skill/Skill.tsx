import SkillItem from "./components/SkillItem";
import Subject from "../../components/Subject";
import {
  skills,
  title,
} from "../../constant/skill";

export default function Skill() {
  return (
    <>
      <Subject item={title} />
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} item={skill.item} />
        ))}
      </div>
    </>
  );
}
