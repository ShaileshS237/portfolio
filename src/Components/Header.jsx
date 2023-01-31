import React, { useState } from "react";
import logo from "../assets/logo.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
const Header = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="top-0 z-50 md:mt-5">
			<div className="grid grid-cols-12 md:gap-4 items-center">
				<div className="md:col-span-3 col-span-12">
					<Link to="/">
						<img className="h__image md:w-max w-[85%]" src={logo} alt="" />
					</Link>
				</div>
				{/* <div className="flex justify-center md:col-span-3 md:hidden col-span-12">
					<Link to="/">
						<Hamburger toggled={isOpen} toggle={setOpen} />
					</Link>
				</div> */}
				<div className="md:col-span-9 col-span-12  md:flex self-center md:justify-end  navbar">
					<ul className="flex gap-5 text-white self-center justify-center ">
						<Link to="/">
							<li className=" p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer active">
								Home
							</li>
						</Link>
						<Link to="/project">
							<li className="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer active">
								Projects
							</li>
						</Link>
						{/* <Link to="/about">
							<li className="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer active">
								About
							</li>
						</Link> */}
						{/* <li className="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer active">
							Article
						</li> */}
					</ul>
				</div>
			</div>

			{/* <div
				className="mt-5"
				style={{ height: "0.5px", background: "#3f3f46" }}
			></div> */}
			{/* <div className="grid grid-cols-12 gap-4 items-center">
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
			</div> */}
			{/* <div className="divide-y divide-blue-200"></div> */}
		</div>
	);
};

export default Header;
