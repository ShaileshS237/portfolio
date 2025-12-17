import React from "react";
import { SOCIAL } from "@/constants";
const Social = () => {
	return (
		<div>
			<div className={`flex justify-center flex-row md:gap-7 gap-3`}>
				{SOCIAL.map((res) => {
					return (
						<div key={res.id} className="mt-3">
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
	);
};

export default Social;
