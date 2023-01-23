import React from "react";
import { SOCAILS } from "../Constant/constant";
const Footer = () => {
	return (
		<div className="bg-zinc-800">
			<div className="  container  mx-auto py-5 ">
				<h1 className="text-4xl font-bold text-zinc-400">
					Let's Connect There
				</h1>
				<div>
					<div className="grid grid-cols-4 mt-5 gap-4">
						{SOCAILS.map((res) => {
							return (
								<div className=" ">
									<div className=" border border-white cursor-pointer grid grid-cols-6 py-5 px-5  hover:bg-zinc-900 text-white hover:text-white items-center">
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
					<h6 className="text-center text-zinc-400 mt-6">
						Copyright @ 2023, Shailesh Sawale
					</h6>
				</div>
			</div>
		</div>
	);
};

export default Footer;
