import React from "react";
import logo from "../assets/logo.png";
import { BsArrowRight } from "react-icons/bs";
const Header = () => {
	return (
		<div className="ticky top-0 z-50 mt-5">
			<div className="grid grid-cols-12 gap-4 items-center">
				<div className="md:col-span-2 col-span-12">
					<img src={logo} alt="" />
				</div>
				<div className="col-span-10 hidden md:flex self-center justify-end ">
					<ul className="flex gap-20 text-white self-center ">
						<li className="hover:color-sky-700  cursor-pointer">Home</li>
						<li className="cursor-pointer pa">Work</li>
						<li className="cursor-pointer">About</li>
						<li className="cursor-pointer">Article</li>
					</ul>
					<a href={process.env.PUBLIC_URL + "/Shailesh_Resume.pdf"}>
						<button className=" border border-[#2f3034] flex items-center px-6 py-3 b ml-12 hover:bg-[#2f3034] text-white hover:text-white transition-all duration-500 rounded-xl">
							Download Resume <BsArrowRight className="ml-5" />
						</button>
					</a>
				</div>
			</div>
			<div className="divide-y divide-blue-200"></div>
		</div>
	);
};

export default Header;
