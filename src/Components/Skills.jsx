import React from "react";
import Marquee from "react-fast-marquee";
import { SKILLS } from "../Constant/constant";
const Skills = () => {
	return (
		<div className="mt-10">
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

			<div className="grid grid-cols-10 gap-4">
				<div className="col-span-5 ">
					<h3 className="mb-3 text-zinc-500">Frontend Development</h3>
					<div className=" bg-zinc-800 py-4 rounded-xl ">
						<Marquee speed={40} delay={1} pauseOnHover={true} gradient={false}>
							{SKILLS.frontend.map((val) => {
								return (
									<div>
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
				<div className="col-span-2 ">
					<h3 className="mb-3 text-zinc-500">Mobile App Development</h3>
					<div className=" bg-zinc-800 py-4 rounded-xl ">
						<Marquee speed={40} pauseOnHover={true} delay={1} gradient={false}>
							{SKILLS.mobile.map((val) => {
								return (
									<>
										<img
											key={val.id}
											src={process.env.PUBLIC_URL + val.icon}
											alt=""
											className="ml-3 rounded-lg"
											style={{ height: "50px" }}
										/>
									</>
								);
							})}
						</Marquee>
					</div>
				</div>

				<div className="col-span-3 ">
					<h3 className="mb-3 text-zinc-500">UI Desigining Tools</h3>
					<div className=" bg-zinc-800 py-4 rounded-xl ">
						<Marquee speed={40} pauseOnHover={true} delay={1} gradient={false}>
							{SKILLS.ui.map((val) => {
								return (
									<>
										<img
											key={val.id}
											src={process.env.PUBLIC_URL + val.icon}
											alt=""
											className="ml-3 rounded-lg"
											style={{ height: "50px" }}
										/>
									</>
								);
							})}
						</Marquee>
					</div>
				</div>
				<div className="col-span-2">
					<h3 className="mb-3 text-zinc-500">Backend Development</h3>
					<div className=" bg-zinc-800 py-4 rounded-xl ">
						<Marquee speed={40} pauseOnHover={true} delay={1} gradient={false}>
							{SKILLS.backend.map((val) => {
								return (
									<>
										<img
											key={val.id}
											src={process.env.PUBLIC_URL + val.icon}
											alt=""
											className="ml-3 rounded-lg"
											style={{ height: "50px" }}
										/>
									</>
								);
							})}
						</Marquee>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
