import React from "react";
import { EXPERIANCE } from "../Constant/constant";
import Title from "./Title";
import expImage from "../assets/workexp_1.png";
import siemens from "../assets/siemens_logo.png";
const Experiance = () => {
	return (
		<div className=" mt-[40px]">
			<Title width={"full"} titlename={"Experiance"} />
			<div className="grid grid-cols-6 gap-3 mt-2 items-center">
				<div className="mt-10 col-span-6 hidden md:block md:col-span-2 ">
					<img src={expImage} alt="" />
				</div>
				<div className="col-span-6 md:col-span-4">
					<div className="grid grid-cols-1 gap-5 scroll-smooth">
						{EXPERIANCE.slice(0, 1).map((val, id) => {
							return (
								<div
									key={val.id}
									className=" mb-5 animate__animated animate__fadeIn col-span-2 md:col-span-1 border border-zinc-700 rounded-2xl overflow-hidden"
								>
									<div className="px-5 py-4 bg-zinc-800">
										<div className="col-span-4 text-2xl md:text-3xl  font-bold text-zinc-500">
											{val.date}
										</div>
									</div>
									<div className="px-5 py-1 ">
										<div className="col-span-4 my-4 text-4xl md:text-4xl  font-bold text-zinc-600 flex gap-3">
											<img src={siemens} alt="" className="rounded-md" />
											{/* <span className="text-[#0099a9]">
												
											</span> */}
											({val.role}) , {val.location}
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className="grid grid-cols-2 gap-5 scroll-smooth">
						{EXPERIANCE.slice(1).map((val, id) => {
							return (
								<div
									key={val.id}
									className="  animate__animated animate__fadeIn col-span-2 md:col-span-1 border border-zinc-700 rounded-2xl overflow-hidden"
								>
									<div className="px-5 py-4 bg-zinc-800">
										<div className="col-span-4 text-2xl md:text-3xl  font-bold text-zinc-500">
											{val.date}
										</div>
									</div>
									<div className="px-5 py-1 ">
										<div className="col-span-4 my-4 text-4xl md:text-4xl  font-bold text-white">
											{val.comapny_name}
										</div>
										<div className="md:text-lg md:col-span-4 col-span-4  text-zinc-400">
											<h1 className="my-1 text-zinc-300">
												Role: <br />
												{val.role}
											</h1>
										</div>
										<div className="md:text-lg md:col-span-4 col-span-4 text-zinc-400">
											<h1 className="my-1 text-zinc-300 mb-5">
												Location: <br /> {val.location}
											</h1>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experiance;
