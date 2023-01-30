import React from "react";
import { Link } from "react-router-dom";
import { SOCAILS } from "../Constant/constant";
const Footer = () => {
	return (
		<div className="container  mx-auto p-5 ">
			<div
				className="md:mt-10 mb-7"
				style={{ height: "0.5px", background: "#3f3f46" }}
			></div>
			<div className="text-center">
				<h1 className="text-7xl font-bold text-zinc-700">Say Hello!</h1>
				<h1 className="text-xl font-light mt-3 text-zinc-500">
					Have an opportunity, wanna collaborate on something cool or just say
					hello!
				</h1>
				<div className="m-7">
					<span className="bg-zinc-700 rounded-[100px] py-3 px-10">
						shaileshsawale7@gmail.com
					</span>
				</div>
				<h1 className="text-xl font-light mt-3 text-zinc-500">
					Connect with me on social media.
				</h1>
				<div className="flex justify-center flex-row gap-3">
					{SOCAILS.map((res) => {
						return (
							<div className="mt-3">
								<a target={"_black"} href={res.link}>
									<img
										className="col-span-1"
										src={process.env.PUBLIC_URL + res.icon}
										alt=""
									/>
								</a>
							</div>
						);
					})}
				</div>
			</div>
			{/* <div className=" md:container mx-auto">
				<h1 className="text-2xl md:text-4xl font-bold text-zinc-400 mb-5">
					Let's Connect There
				</h1>
				<div className="grid grid-cols-12 gap-4">
					{SOCAILS.map((res) => {
						return (
							<div key={res.id} className="col-span-12 md:col-span-3">
								<div className=" border rounded-lg border-white cursor-pointer grid grid-cols-6 py-5 px-5 hover:bg-zinc-900 text-white hover:text-white items-center">
									<div className="col-span-4 ">
										<h1 className="text-2xl font-bold ">{res.name}</h1>
										<h1 className="text-1xl font-light ">{res.type}</h1>
									</div>
									<div className="col-span-2 flex justify-end">
										<img src={res.icon} style={{ maxWidth: "54%" }} alt="" />
									</div>
								</div>
							</div>
						);
					})}
				</div>
				
			</div> */}
			<h6 className="text-center text-zinc-400 mt-5">
				Copyright @ 2023, Shailesh Sawale
			</h6>
		</div>
	);
};

export default Footer;
