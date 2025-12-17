import React from "react";
import { Link } from "react-router-dom";

import Social from "./Social";
const Footer = () => {
	return (
		<div className="py-5 ">
			<div
				className="md:mt-10 mb-7 h-px bg-border"
			></div>
			<div className="text-center">
				<h1 className="text-5xl md:text-7xl  font-bold text-zinc-700">
					Say Hello! <span className="wave">👋</span>
				</h1>
				<h1 className="text-md md:text-xl font-light mt-3 text-zinc-500">
					Have an opportunity, wanna collaborate on something cool or just say
					hello!
				</h1>
				<div className="m-7">
					<span className="bg-white text-zinc-800 rounded-[100px] py-3 px-10">
						shaileshsawale7@gmail.com
					</span>
				</div>
				{/* <h1 className="text-xl font-light mt-3 text-zinc-500">
					Connect with me on social media.
				</h1> */}
				<Social align={"center"} />
			</div>
			{/* <div className=" md:container mx-auto">
				<h1 className="text-2xl md:text-4xl font-bold text-zinc-400 mb-5">
					Let's Connect There
				</h1>
				<div className="grid grid-cols-12 gap-4">
					{SOCIAL.map((res) => {
						return (
							<div key={res.id} className="col-span-12 md:col-span-3">
								<div className=" border rounded-lg border-muted cursor-pointer grid grid-cols-6 py-5 px-5 hover:bg-zinc-900 text-white hover:text-white items-center">
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
				Designed and Developed with ❤️ by Shailesh
			</h6>
		</div>
	);
};

export default Footer;
