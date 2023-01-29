import React from "react";
import Header from "../Components/Header";
import "animate.css";
import TitleHero from "../Components/TitleHero";
const About = () => {
	return (
		<div className="">
			<div className="container2 lg:container mx-auto pt-5 p-5 md:p-0">
				<Header />

				<TitleHero title={"About Me"} color={"sky"} />
				<h1 className=" animate__animated animate__fadeIn mt-10 font-bold md:text-[3.00rem] text-[1.4rem]">
					Hello <span className="rotate-45">👋</span>, at this point you already
					knew me, Still (I'm Shailesh Sawale ).
					<br /> <br /> I have experience with front-end technologies such as
					HTML, CSS, and JavaScript, and I am able to turn design mockups into
					functional web pages. I have a keen eye for detail and a passion for
					creating seamless and intuitive user experiences I ❤️ to Design &
					Developed Things. <br /> <br />I Love play ⚾(Baseball),
					🏐(Volleyball) & 🏸(Badminton)
				</h1>
			</div>
		</div>
	);
};

export default About;
