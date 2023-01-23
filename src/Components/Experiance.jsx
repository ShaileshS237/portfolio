import React from "react";
import { EXPERIANCE } from "../Constant/constant";

const Experiance = () => {
	return (
		<div className=" mt-[40px]">
			<h1
				className="text-4xl text-zinc-400
			  font-bold"
			>
				Experiance :
			</h1>
			<div
				className="mt-5"
				style={{ height: "0.5px", background: "#3f3f46" }}
			></div>

			{EXPERIANCE.map((val) => {
				return (
					<>
						<div className="grid grid-cols-3">
							<div className="col-span-3 my-4 text-5xl font-bold text-zinc-700">
								{val.date}
							</div>
							<div className="text-2xl text-zinc-400">
								Role: <br />
								<h1 className="my-1 text-zinc-300">{val.role}</h1>
							</div>
							<div className="text-2xl text-zinc-400">
								Company: <br />
								<h1 className="my-1 text-zinc-300">{val.comapny_name}</h1>
							</div>
							<div className="text-2xl text-zinc-400">
								Location :<br />
								<h1 className="my-1 text-zinc-300">{val.location}</h1>
							</div>
						</div>
						<div
							className="mt-5"
							style={{ height: "0.5px", background: "#3f3f46" }}
						></div>
					</>
				);
			})}
		</div>
	);
};

export default Experiance;
