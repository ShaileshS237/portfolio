import React from "react";

const Title = (props) => {
	return (
		<div className="flex items-center ">
			<h1
				className="text-4xl mb-2  text-sky-400
			  font-bold"
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
