import React from "react";
import { EXPERIANCE } from "../Constant/constant";
import Title from "./Title";
import expImage from "../assets/workexp_1.png";
const Experiance = () => {
	return (
		<div className=" mt-[40px]">
			<Title width={"full"} titlename={"Experiance"} />
			<div className="grid grid-cols-6 gap-3 mt-2">
				<div className="mt-10 col-span-6 hidden md:block md:col-span-2 ">
					<img src={expImage} alt="" />
				</div>
				<div className="col-span-6 md:col-span-4">
					<div className="grid grid-cols-2 gap-5 scroll-smooth">
						{EXPERIANCE.map((val, id) => {
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
										<div className="col-span-4 my-4 text-4xl md:text-4xl  font-bold text-zinc-600">
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
									{/* <div key={val.id}>
										<div className="grid grid-cols-4 gap-2">
											<div className="col-span-4 mt-4 text-3xl md:text-4xl  font-bold text-zinc-700">
												{val.comapny_name}
											</div>
											<div className="md:text-lg md:col-span-2 col-span-1  text-zinc-400">
												<h1 className="my-1 text-zinc-300">Role: {val.role}</h1>
											</div>
											<div className="md:text-lg md:col-span-1 col-span-1 text-zinc-400">
											<h1 className="my-1 text-zinc-300">
												Company: <br /> {val.comapny_name}
											</h1>
										</div>
											<div className="md:text-lg md:col-span-2 col-span-1 text-zinc-400">
												<h1 className="my-1 text-zinc-300">
													Location : {val.location}
												</h1>
											</div>
											<div className="col-span-3 mt-4 text-3xl md:text-2xl  font-bold text-zinc-700">
												{val.date}
											</div>
										</div>
									</div> */}
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
