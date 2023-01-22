import React from "react";
import Marquee from "react-fast-marquee";
const Skills = () => {
	return (
		<div>
			<Marquee speed={80} pauseOnHover={true} gradient={false}>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
					alt=""
					style={{ height: "50px" }}
				/>
				<img
					src="https://angular.io/assets/images/logos/angular/angular.png"
					alt=""
					style={{ height: "50px" }}
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
					alt=""
					style={{ height: "50px" }}
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
					alt=""
					style={{ height: "50px" }}
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
					alt=""
					style={{ height: "50px" }}
				/>
			</Marquee>
		</div>
	);
};

export default Skills;
