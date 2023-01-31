import React from "react";

const Title = (props) => {
	return (
		<div className="flex items-center ">
			<h1
				className="text-4xl  bg-clip-text text-transparent bg-gradient-to-tr from-cyan-500 to-blue-500 font-bold"
				style={{ lineHeight: "56px" }}
			>
				{props.titlename}
			</h1>
			<div
				className={`ml-5 w-full`}
				style={{ height: "1px", background: "#3f3f46" }}
			></div>
		</div>
	);
};

export default Title;
