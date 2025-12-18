import React from "react";
import Navbar from "@/Components/Navbar";
import PageHeader from "@/Components/PageHeader";
import PageContainer, { MainContent } from "@/Components/PageContainer";
import { motion } from "framer-motion";
import "animate.css";

const About = () => {
	return (
		<PageContainer>
			<Navbar />
			<MainContent>
				<PageHeader title="About Me" description="Get to know me better" />

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="space-y-6"
				>
					<p className="text-lg leading-relaxed">
						Hello <span className="inline-block animate-wave">👋</span>, at this point you already
						knew me. Still (I'm Shailesh Sawale).
					</p>

					<p className="text-lg leading-relaxed">
						I have experience with front-end technologies such as
						HTML, CSS, and JavaScript, and I am able to turn design mockups into
						functional web pages. I have a keen eye for detail and a passion for
						creating seamless and intuitive user experiences. I ❤️ to Design &
						Develop Things.
					</p>

					<p className="text-lg leading-relaxed">
						I love to play ⚾ Baseball, 🏐 Volleyball & 🏸 Badminton
					</p>
				</motion.div>
			</MainContent>
		</PageContainer>
	);
};

export default About;
