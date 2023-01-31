import React from "react";
import image from "../assets/image1.png";
import logo from "../assets/logo.png";
import profile from "../assets/profile2.png";
import bg from "../assets/background.png";
import { BsArrowRight } from "react-icons/bs";

const TitleHero = (props) => {
	console.log(props);
	return (
		<div className="grid  animate__animated animate__fadeIn md:my-10 mt-2  text-center">
			<div
				className={`bg-sky-700 p-10 col-span-10 lg:col-span-7 rounded-xl bg-cover `}
				style={{ backgroundImage: `url(${bg})` }}
			>
				<h1 className="text-6xl lg:text-9xl font-bold ">{props.title}</h1>
			</div>
		</div>
	);
};

export default TitleHero;
