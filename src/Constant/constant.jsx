export const SKILLS = {
	frontend: [
		{
			id: 1,
			name: "html",
			icon: "images/skills/html.png",
		},
		{
			id: 2,
			name: "css",
			icon: "images/skills/css.png",
		},
		{
			id: 3,
			name: "javascript",
			icon: "images/skills/js.png",
		},
		{
			id: 4,
			name: "react",
			icon: "images/skills/react2.png",
		},

		{
			id: 6,
			name: "angular",
			icon: "images/skills/angular.png",
		},

		{
			id: 7,
			name: "mui",
			icon: "images/skills/mui.png",
		},
		{
			id: 5,
			name: "tailwind",
			icon: "images/skills/tailwind.png",
		},
		{
			id: 8,
			name: "bootstarp",
			icon: "images/skills/bootstarp.png",
		},
	],
	backend: [
		{
			id: 1,
			name: "Nodejs",
			icon: "images/skills/node.png",
		},
		{
			id: 2,
			name: "css",
			icon: "images/skills/express.png",
		},
		{
			id: 3,
			name: "javascript",
			icon: "images/skills/mysql.png",
		},
		{
			id: 4,
			name: "react",
			icon: "images/skills/mongodb.png",
		},
	],
	mobile: [
		{
			id: 1,
			name: "Ionic",
			icon: "images/skills/ionic.png",
		},
		{
			id: 2,
			name: "css",
			icon: "images/skills/react.png",
		},
		{
			id: 3,
			name: "javascript",
			icon: "images/skills/flutter.png",
		},
	],
	ui: [
		{
			id: 1,
			name: "figma",
			icon: "images/skills/figma.png",
		},
		{
			id: 2,
			name: "sketch",
			icon: "images/skills/xd.png",
		},
		{
			id: 3,
			name: "photoshop",
			icon: "images/skills/ps.png",
		},
		{
			id: 4,
			name: "illustartor",
			icon: "images/skills/ai.png",
		},
	],
	userInterface: ["figma", "sketch", "illustrator", "photoshop"],
	other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export const MENULINKS = [
	{
		name: "Home",
		ref: "home",
	},
	{
		name: "Works",
		ref: "works",
	},
	{
		name: "Skills",
		ref: "skills",
	},
	{
		name: "Timeline",
		ref: "timeline",
	},
	{
		name: "Contact",
		ref: "contact",
	},
];
export const PROJECTS = [
	{
		id: 1,
		project_name: "Love Akot",
		icon: "images/projects/projects_logo/la_logowhite.png",
		type: "Mobile App",
		lUdpate: "31 Dec 2022",
		description:
			"LoveAkot is an Android app designed for the city of Akot. It serves as a social media platform that helps residents stay informed about local events and activities. The app also provides convenient access to contact information for various service providers, such as electricians and plumbers, allowing users to connect with them effortlessly.",
		status: "2",
		project_type: "Personal",
		route: "/work",
		href: "https://github.com/ShaileshS237/loveAkot",
		livelink: "https://play.google.com/store/apps/details?id=com.loveakot",
		headerImage: "../public/images/projects/projects_logo/bktcard_logo.png",
	},
	{
		id: 2,
		project_name: "Quick Chicken - APP",
		type: "Mobile App",
		icon: "images/projects/projects_logo/qc_white.png",
		description: "Online E-commerce Android application for meat delivery shop",
		status: "1",
		lUdpate: "12 Jan 2022",
		project_type: "Freelance",
		href: "",
		livelink: "https://play.google.com/store/apps/details?id=com.quickchicken",
	},
	// {
	// 	id: 3,
	// 	project_name: "Quick Chicken - Website",
	// 	icon: "images/projects/projects_logo/qc_white.png",
	// 	description: "Online E-commerce Web application for meat delivery shop",
	// 	status: "1",
	// 	type: "Website",
	// 	lUdpate: "12 Jan 2022",
	// 	href: "",
	// 	project_type: "Freelance",
	// 	livelink: "http://quickchicken.in/",
	// },
	{
		id: 5,
		project_name: "bktcard",
		icon: "images/projects/projects_logo/bktcard_logo.png",
		description:
			"BKTcard is a note-taking app that streamlines organization through categorization. With customizable buckets, you have the flexibility to categorize your notes in a way that suits your needs.",
		status: "2",
		lUdpate: "12 Jan 2022",
		type: "Website",
		href: "https://github.com/ShaileshS237/BktCard",
		livelink: "",
	},
	{
		id: 4,
		project_name: "Matrimoney App",
		icon: "",
		description:
			"Matrimony App project connects individuals seeking partners for marriage. Features profile creation, matching, communication tools, search by criteria, privacy controls, and user verification for a safe and trustworthy platform to simplify finding life partners.",
		status: "1",
		lUdpate: "12 Jan 2022",
		project_type: "Freelance",
		type: "Mobile App",
		href: "https://github.com/ShaileshS237/shadiapp",
		livelink: "",
	},
	{
		id: 8,
		project_name: "Placement Android App",
		icon: "",
		description:
			"Placement Android App connects students with potential employers for internships and job placements. Features resume building, job search, interview scheduling, real-time updates, and secure communication for an efficient and effective placement process.",
		status: "1",
		lUdpate: "12 Jan 2022",
		project_type: "Personal",
		type: "Mobile App",
		// techStack:[{id:}]
		href: "https://github.com/ShaileshS237/password-generator",
		livelink: "",
	},
	// {
	// 	id: 12,
	// 	project_name: "Placement Android App - Dashboard",
	// 	icon: "",
	// 	description:
	// 		"Placement Android App connects students with potential employers for internships and job placements. Features resume building, job search, interview scheduling, real-time updates, and secure communication for an efficient and effective placement process.",
	// 	status: "2",
	// 	lUdpate: "12 Jan 2022",
	// 	project_type: "Personal",
	// 	type: "Mobile App",
	// 	// techStack:[{id:}]
	// 	href: "https://github.com/ShaileshS237/password-generator",
	// 	livelink: "",
	// },
	// {
	// 	id: 9,
	// 	project_name: "NIT Kurukshtra College Website",
	// 	icon: "",
	// 	description:
	// 		"NIT Kurukshetra College Website showcases academic programs, research, campus life, facilities, and achievements, with information on admission, fees, scholarships, and events. Improves communication and promotes institute's image.",
	// 	status: "3",
	// 	lUdpate: "12 Jan 2022",
	// 	project_type: "Personal",
	// 	type: "Website",
	// 	// techStack:[{id:}]
	// 	href: "https://github.com/ShaileshS237/nitkkr",
	// 	livelink: "",
	// },
	{
		id: 6,
		project_name: "Netflix- Clone",
		icon: "",
		description:
			"Netflix Clone is a streaming platform that offers a vast library of movies, TV shows, documentaries, and original content. Users can browse, search, and stream content on various devices with personalized recommendations and a user-friendly interface. The platform offers a subscription-based model with options for offline viewing. The goal is to provide a similar viewing experience to that of Netflix.",
		status: "2",
		lUdpate: "12 Jan 2022",
		project_type: "Personal",
		type: "Website",
		href: "https://github.com/ShaileshS237/loveAkot",
		livelink: "",
	},
	{
		id: 7,
		project_name: "Password Generator",
		icon: "",
		description:
			"Password Generator is a tool that creates secure, random passwords for individuals and businesses. It allows users to specify password length and complexity criteria, such as including uppercase and lowercase letters, numbers, and special characters. The tool helps improve password security by generating strong, unique passwords",
		status: "1",
		lUdpate: "12 Jan 2022",
		project_type: "Personal",
		type: "Mobile App",
		// techStack:[{id:}]
		href: "https://github.com/ShaileshS237/password-generator",
		livelink: "",
	},

	// {
	// 	id: 10,
	// 	project_name: "Contact Parser using CSV file",
	// 	icon: "",
	// 	description:
	// 		"Contact Parser using CSV file is a tool that parses and extracts information from CSV files containing contact information. It organizes the data into structured format, and allows users to export the information into various file formats, such as vCard, Excel, and more.",
	// 	status: "1",
	// 	lUdpate: "12 Jan 2022",
	// 	project_type: "Personal",
	// 	type: "Website",
	// 	// techStack:[{id:}]
	// 	href: "https://github.com/ShaileshS237/nitkkr",
	// 	livelink: "",
	// },
	{
		id: 11,
		project_name: "Neumorphic Clock",
		icon: "",
		description:
			"Neumorphic Style Clock is a clock design featuring soft, curvy shapes with a gradient background, creating a unique and modern look.",
		status: "1",
		lUdpate: "12 Jan 2022",
		project_type: "Personal",
		type: "Website",
		// techStack:[{id:}]
		href: "https://github.com/ShaileshS237/clock",
		livelink: "https://shaileshs237.github.io/clock/",
	},
];

export const EXPERIANCE = [
	{
		id: 5,
		comapny_name: "SIEMENS India",
		location: "Bangalore",
		role: "Software Engineer",
		date: "July 2023 - Present",
	},
	{
		id: 1,
		comapny_name: "Auum Platform",
		location: "Bhubaneswar, Orissa, India(Remote)",
		role: "SDE Intern",
		date: "Jun 2021 - May 2023 ",
		logo: "../assets/auum_logo.png",
	},
	{
		id: 4,
		comapny_name: "Quick Chicken",
		location: "Pune, Maharashtra, India",
		role: "Mobile Developer (Freelancer)",
		date: "Jan 2022 - Jul 2022",
		logo: "https://quickchicken.in/assets/while_logo.png",
	},
	{
		id: 2,
		comapny_name: "Victorious Digital Pvt Ltd.",
		location: "Pune, Maharashtra, India",
		role: "Frontend Developer",
		date: "Mar 2019 - Mar 2020 ",
		logo: "https://victoriousdigital.in/wp-content/uploads/2022/06/vd-logo-final.webp",
	},
	{
		id: 3,
		comapny_name: "DigitizeBrand",
		location: "Pune, Maharashtra, India",
		role: "Frontend Developer",
		date: "Feb 2018 - Feb 2019 ",
		logo: "https://digitizebrand.com/asset/images/logo.png",
	},
];

export const SOCAILS = [
	{
		id: 1,
		name: "Linked In",
		link: "https://www.linkedin.com/in/shaileshsawale/",
		icon: "icons/006-linkedin.png",
		type: "Professional Network ",
	},
	{
		id: 2,
		name: "github",
		link: "https://github.com/ShaileshS237",
		icon: "icons/007-github.png",
		type: "Design Sharing ",
	},
	{
		id: 3,
		name: "twitter",
		link: "https://twitter.com/TheSawale",
		icon: "icons/004-twitter.png",
		type: "Design Sharing ",
	},
	{
		id: 4,
		name: "Facebook",
		link: "https://www.facebook.com/TheRealShailesh/",
		icon: "icons/003-facebook.png",
		type: "Social Media ",
	},
	{
		id: 5,
		name: "Instagram",
		link: "https://www.instagram.com/shaaaailesh/",
		icon: "icons/001-instagram.png",
		type: "Social Media ",
	},

	{
		id: 6,
		name: "Dribble",
		link: "https://dribbble.com/Shailesh237",
		icon: "icons/002-dribble.png",
		type: "Design Sharing ",
	},
	{
		id: 7,
		name: "Medium",
		link: "https://medium.com/@shaileshsawale7",
		icon: "icons/005-medium.png",
		type: "Design Sharing ",
	},
];
