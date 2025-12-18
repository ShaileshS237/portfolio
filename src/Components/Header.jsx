import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<div className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-sm bg-background/80 border-b">
			<div className="grid grid-cols-12 md:gap-4 items-center relative">
				{/* Hamburger Menu Button - Mobile Only */}
				<div className="md:hidden col-span-12 flex justify-end mb-4 px-4">
					<button
						onClick={toggleMenu}
						className="text-white p-3 focus:outline-none z-50 relative bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors"
						aria-label="Toggle menu"
					>
						<div className="space-y-2 w-6">
							<span
								className={`block w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
							></span>
							<span
								className={`block w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
							></span>
							<span
								className={`block w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
							></span>
						</div>
					</button>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex md:col-span-9 col-span-12 self-center md:justify-end mb-5 md:mb-0 navbar">
					<ul className="flex gap-5 text-white self-center justify-center ">
						<NavLink to="/">
							{({ isActive }) =>
								isActive ? (
									<li className=" p-4 border-b-2 border-sky-500 border-opacity-100 duration-200 text-sky-500  cursor-pointer ">
										Home
									</li>
								) : (
									<li className="p-4 hover:text-sky-500  cursor-pointer ">
										Home
									</li>
								)
							}
						</NavLink>
						<NavLink to="/about">
							{({ isActive }) =>
								isActive ? (
									<li className=" p-4 border-b-2 text-sky-500  border-sky-500 border-opacity-100  duration-200 cursor-pointer ">
										About Me
									</li>
								) : (
									<li className="p-4 hover:text-sky-500 cursor-pointer">
										About Me
									</li>
								)
							}
						</NavLink>
					</ul>
				</nav>

				{/* Mobile Navigation Menu */}
				<nav
					className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-zinc-900 transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
				>
					<div className="pt-20 px-6">
						<ul className="flex flex-col gap-4 text-white">
							<NavLink to="/" onClick={closeMenu}>
								{({ isActive }) =>
									isActive ? (
										<li className="p-4 border-l-4 border-sky-500 text-sky-500 cursor-pointer">
											Home
										</li>
									) : (
										<li className="p-4 hover:text-sky-500 hover:border-l-4 hover:border-sky-500 cursor-pointer">
											Home
										</li>
									)
								}
							</NavLink>
							<NavLink to="/about" onClick={closeMenu}>
								{({ isActive }) =>
									isActive ? (
										<li className="p-4 border-l-4 border-sky-500 text-sky-500 cursor-pointer">
											About Me
										</li>
									) : (
										<li className="p-4 hover:text-sky-500 hover:border-l-4 hover:border-sky-500 cursor-pointer">
											About Me
										</li>
									)
								}
							</NavLink>
						</ul>
					</div>
				</nav>

				{/* Overlay */}
				{isOpen && (
					<div
						className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
						onClick={closeMenu}
					></div>
				)}
			</div>
		</div>
	);
};

export default Header;
