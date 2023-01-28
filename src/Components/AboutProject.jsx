import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Routes, Route, useParams } from "react-router-dom";
import { PROJECTS } from "../Constant/constant";
import bg from "../assets/background.png";

const AboutProject = () => {
	let { id } = useParams();
	const [projectDetails, setProjectDetails] = useState(null);
	useEffect(() => {
		let temp = PROJECTS.filter((x) => x.id == id);
		setProjectDetails(temp[0]);
	}, []);
	return (
		<div>
			<div className="container mx-auto">
				<Header />
			</div>
			{/* <header
				className={`flex mt-5 items-center justify-center h-[400px] mb-12 bg-fixed bg-center bg-cover bg-[url("../public/images/projects/la_background.jpg")]`}
			></header> */}

			<img src={"../public/images/projects/la_background.jpg"} alt="" />
			<div className="container mx-auto">
				<p className="mb-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					placerat a magna non varius. Proin leo felis, euismod non porta eget,
					varius sit amet sapien. Maecenas in nulla at leo convallis consectetur
					id a sapien. Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et
					volutpat libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est.
					Nulla eu sem elit. Fusce nec laoreet sem, semper molestie libero.
				</p>
				<p className="mb-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					placerat a magna non varius. Proin leo felis, euismod non porta eget,
					varius sit amet sapien. Maecenas in nulla at leo convallis consectetur
					id a sapien. Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et
					volutpat libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est.
					Nulla eu sem elit. Fusce nec laoreet sem, semper molestie libero.
				</p>
				<p className="mb-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					placerat a magna non varius. Proin leo felis, euismod non porta eget,
					varius sit amet sapien. Maecenas in nulla at leo convallis consectetur
					id a sapien. Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et
					volutpat libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est.
					Nulla eu sem elit. Fusce nec laoreet sem, semper molestie libero.
				</p>
				<p className="mb-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					placerat a magna non varius. Proin leo felis, euismod non porta eget,
					varius sit amet sapien. Maecenas in nulla at leo convallis consectetur
					id a sapien. Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et
					volutpat libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est.
					Nulla eu sem elit. Fusce nec laoreet sem, semper molestie libero.
				</p>
				<p className="mb-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					placerat a magna non varius. Proin leo felis, euismod non porta eget,
					varius sit amet sapien. Maecenas in nulla at leo convallis consectetur
					id a sapien. Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et
					volutpat libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est.
					Nulla eu sem elit. Fusce nec laoreet sem, semper molestie libero.
				</p>
				<p className="mb-4">
					Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin,
					lectus et fringilla ultrices, dolor nisi scelerisque tortor, vel
					finibus magna massa non nunc. Phasellus massa quam, egestas a nisl
					sed, porta volutpat metus. Nunc sed elit ac tellus tempor cursus.
					Suspendisse potenti. Vestibulum varius rutrum nisl nec consequat.
					Suspendisse semper dignissim sem viverra semper. Nulla porttitor,
					purus nec accumsan pharetra, nisi dolor condimentum ipsum, id
					consequat nulla nunc in ligula.
				</p>
				<p className="mb-12">
					Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris
					porta dignissim hendrerit. Cras id velit varius, fermentum lectus
					vitae, ultricies dolor. In bibendum rhoncus purus vel rutrum. Nam
					vulputate imperdiet fringilla. Donec blandit libero massa. Suspendisse
					dictum diam mauris, vitae fermentum dolor tincidunt in. Pellentesque
					sollicitudin venenatis dolor, vitae scelerisque elit ultrices eu.
					Donec eget sodales risus, quis dignissim neque.
				</p>
				<p className="mb-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					placerat a magna non varius. Proin leo felis, euismod non porta eget,
					varius sit amet sapien. Maecenas in nulla at leo convallis consectetur
					id a sapien. Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et
					volutpat libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est.
					Nulla eu sem elit. Fusce nec laoreet sem, semper molestie libero.
				</p>
				<p className="mb-4">
					Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin,
					lectus et fringilla ultrices, dolor nisi scelerisque tortor, vel
					finibus magna massa non nunc. Phasellus massa quam, egestas a nisl
					sed, porta volutpat metus. Nunc sed elit ac tellus tempor cursus.
					Suspendisse potenti. Vestibulum varius rutrum nisl nec consequat.
					Suspendisse semper dignissim sem viverra semper. Nulla porttitor,
					purus nec accumsan pharetra, nisi dolor condimentum ipsum, id
					consequat nulla nunc in ligula.
				</p>
				<p className="mb-12">
					Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris
					porta dignissim hendrerit. Cras id velit varius, fermentum lectus
					vitae, ultricies dolor. In bibendum rhoncus purus vel rutrum. Nam
					vulputate imperdiet fringilla. Donec blandit libero massa. Suspendisse
					dictum diam mauris, vitae fermentum dolor tincidunt in. Pellentesque
					sollicitudin venenatis dolor, vitae scelerisque elit ultrices eu.
					Donec eget sodales risus, quis dignissim neque.
				</p>
				<p className="mb-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					placerat a magna non varius. Proin leo felis, euismod non porta eget,
					varius sit amet sapien. Maecenas in nulla at leo convallis consectetur
					id a sapien. Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et
					volutpat libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est.
					Nulla eu sem elit. Fusce nec laoreet sem, semper molestie libero.
				</p>
				<p className="mb-4">
					Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin,
					lectus et fringilla ultrices, dolor nisi scelerisque tortor, vel
					finibus magna massa non nunc. Phasellus massa quam, egestas a nisl
					sed, porta volutpat metus. Nunc sed elit ac tellus tempor cursus.
					Suspendisse potenti. Vestibulum varius rutrum nisl nec consequat.
					Suspendisse semper dignissim sem viverra semper. Nulla porttitor,
					purus nec accumsan pharetra, nisi dolor condimentum ipsum, id
					consequat nulla nunc in ligula.
				</p>
				<p className="mb-12">
					Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris
					porta dignissim hendrerit. Cras id velit varius, fermentum lectus
					vitae, ultricies dolor. In bibendum rhoncus purus vel rutrum. Nam
					vulputate imperdiet fringilla. Donec blandit libero massa. Suspendisse
					dictum diam mauris, vitae fermentum dolor tincidunt in. Pellentesque
					sollicitudin venenatis dolor, vitae scelerisque elit ultrices eu.
					Donec eget sodales risus, quis dignissim neque.
				</p>
			</div>
		</div>
	);
};

export default AboutProject;
