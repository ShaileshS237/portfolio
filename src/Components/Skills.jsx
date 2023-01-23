import React from "react";
import Marquee from "react-fast-marquee";
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

			<div className="grid grid-cols-6 gap-4">
				<div className="col-span-4 ">
					<h3 className="mb-3 text-zinc-500">Frontend Development</h3>
					<div className=" bg-zinc-800 py-8 rounded-xl ">
						<Marquee speed={40} pauseOnHover={true} gradient={false}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
						</Marquee>
					</div>
				</div>
				<div className="col-span-2 ">
					<h3 className="mb-3 text-zinc-500">UI/UX Tools</h3>
					<div className=" bg-zinc-800 py-8 rounded-xl ">
						<Marquee speed={40} pauseOnHover={true} gradient={false}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
						</Marquee>
					</div>
				</div>
				<div className="col-span-3 ">
					<h3 className="mb-3 text-zinc-500">Backend Development</h3>
					<div className=" bg-zinc-800 py-8 rounded-xl ">
						<Marquee speed={40} pauseOnHover={true} gradient={false}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
						</Marquee>
					</div>
				</div>
				<div className="col-span-3 ">
					<h3 className="mb-3 text-zinc-500">Others</h3>
					<div className=" bg-zinc-800 py-8 rounded-xl ">
						<Marquee speed={40} pauseOnHover={true} gradient={false}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
								alt=""
								style={{ height: "50px" }}
							/>
						</Marquee>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
