import React from "react";
import Marquee from "react-fast-marquee";
import { SKILLS } from "../Constant/constant";
import SkillMarquee from "./SkillMarquee";
const Skills = () => {
	return (
		<div className="md:mt-10">
			<h1
				className="text-4xl mb-2  text-zinc-400
			  font-bold"
			>
				Skills :
			</h1>
			<div
				className="my-5"
				style={{ height: "0.5px", background: "#3f3f46" }}
			></div>
			{/* FRONTEND DEVELOPMENT */}

			<div className="grid grid-cols-12 gap-4">
				<SkillMarquee
					marqueeValue={SKILLS.frontend}
					span={4}
					section={"Frontend Development"}
				/>
				<SkillMarquee
					marqueeValue={SKILLS.mobile}
					span={3}
					section={"Mobile App Development"}
				/>
				<SkillMarquee
					marqueeValue={SKILLS.ui}
					span={2}
					section={"UI Designing"}
				/>
				<SkillMarquee
					marqueeValue={SKILLS.backend}
					span={3}
					section={"Backend Development"}
				/>
			</div>
		</div>
	);
};

export default Skills;
