import React from "react";
import { EXPERIENCE } from "@/constants";
import { Card, CardContent } from "@/Components/ui/card";
import Title from "./Title";
import expImage from "../assets/workexp_1.png";
import siemens from "../assets/siemens_logo.png";

const ExperienceSection = () => {
	return (
		<div className="mt-[40px]">
			<Title width={"full"} titlename={"Experience"} />
			<div className="grid grid-cols-6 gap-3 mt-2 items-center">
				<div className="mt-10 col-span-6 hidden md:block md:col-span-2 ">
					<img src={expImage} alt="" />
				</div>
				<div className="col-span-6 md:col-span-4">
					<div className="grid grid-cols-1 gap-5 scroll-smooth">
						{EXPERIENCE.slice(0, 1).map((val, id) => {
							return (
								<Card
									key={val.id}
									className="mb-5 animate__animated animate__fadeIn col-span-2 md:col-span-1 overflow-hidden"
								>
									<div className="px-5 py-4 bg-muted/50 border-b">
										<div className="col-span-4 text-2xl md:text-3xl font-bold text-muted-foreground">
											{val.date}
										</div>
									</div>
									<CardContent className="px-5 py-4">
										<div className="col-span-4 text-4xl md:text-4xl font-bold text-foreground flex gap-3">
											<img src={siemens} alt="" className="rounded-md" />
											{/* <span className="text-[#0099a9]">

											</span> */}
											({val.role}) , {val.location}
										</div>
									</CardContent>
								</Card>
							);
						})}
					</div>
					<div className="grid grid-cols-2 gap-5 scroll-smooth">
						{EXPERIENCE.slice(1).map((val, id) => {
							return (
								<Card
									key={val.id}
									className="animate__animated animate__fadeIn col-span-2 md:col-span-1 overflow-hidden"
								>
									<div className="px-5 py-4 bg-muted/50 border-b">
										<div className="col-span-4 text-2xl md:text-3xl font-bold text-muted-foreground">
											{val.date}
										</div>
									</div>
									<CardContent className="px-5 py-4">
										<div className="col-span-4 text-4xl md:text-4xl font-bold text-foreground">
											{val.comapny_name}
										</div>
										<div className="md:text-lg md:col-span-4 col-span-4 text-muted-foreground mt-4">
											<h1 className="my-1 text-foreground">
												Role: <br />
												<span className="text-muted-foreground">{val.role}</span>
											</h1>
										</div>
										<div className="md:text-lg md:col-span-4 col-span-4 text-muted-foreground">
											<h1 className="my-1 text-foreground mb-5">
												Location: <br />
												<span className="text-muted-foreground">{val.location}</span>
											</h1>
										</div>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
