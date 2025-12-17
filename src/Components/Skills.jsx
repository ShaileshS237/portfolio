import React from "react";
import Marquee from "react-fast-marquee";
import { SKILLS } from "@/constants";
import SkillMarquee from "./SkillMarquee";
import Title from "./Title";
const Skills = () => {
	return (
		<div className="md:mt-10">
			<Title width={"full"} titlename={"Skills"} />
			<div className="grid grid-cols-5 gap-3">
				<SkillMarquee
					marqueeValue={SKILLS.frontend}
					span={2}
					section={"Frontend Development"}
				/>
				<SkillMarquee
					marqueeValue={SKILLS.mobile}
					span={1}
					section={"Mobile App Development"}
				/>
				<SkillMarquee
					marqueeValue={SKILLS.ui}
					span={1}
					section={"UI Designing"}
				/>
				<SkillMarquee
					marqueeValue={SKILLS.backend}
					span={1}
					section={"Backend Development"}
				/>
			</div>
		</div>
	);
};

export default Skills;
