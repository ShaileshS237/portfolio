import React from "react";
import Marquee from "react-fast-marquee";

const SkillMarquee = (props) => {
	return (
		<div className={`md:col-span-${props.span} col-span-12`}>
			<h3 className="mb-3 text-zinc-500">{props.section}</h3>
			<div className=" bg-zinc-800 py-4 rounded-xl ">
				<Marquee speed={60} delay={1} pauseOnHover={true} gradient={false}>
					{props.marqueeValue.map((val) => {
						return (
							<div key={val.id}>
								<img
									src={process.env.PUBLIC_URL + val.icon}
									alt=""
									className="ml-3 rounded-lg"
									style={{ height: "50px" }}
								/>
							</div>
						);
					})}
				</Marquee>
			</div>
		</div>
	);
};

export default SkillMarquee;
