import React from "react";
import Header from "../Components/Header";
import TitleHero from "../Components/TitleHero";
import Projects2 from "../Components/Projects2";
const Work = () => {
	return (
		<div className="">
			<div className="container2 lg:container mx-auto pt-5 p-5 md:p-0">
				<Header />
				{/* <div className="bg-zinc-700 mt-5 rounded-xl mb-10">
					<h1 className="text-[3rem] md:text-[10rem] text-center text-zinc-300 font-bold animate__animated animate__fadeIn">
						Projects
					</h1>
				</div> */}
				<TitleHero title={"Projects"} color={"pink"} />
				<Projects2 />
			</div>
		</div>
	);
};

export default Work;
