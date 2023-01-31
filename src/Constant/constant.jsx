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
			"LoveAkot is a Social Media Android App for Akot(Native City) that aims to help people within a city. It helps in various ways like notifying what is going on in the city, help in to get contact no. of various people like electricians, plumbers, etc. in one click.",
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
	{
		id: 3,
		project_name: "Quick Chicken - Website",
		icon: "images/projects/projects_logo/qc_white.png",
		description: "Online E-commerce Web application for meat delivery shop",
		status: "1",
		type: "Website",
		lUdpate: "12 Jan 2022",
		href: "",
		project_type: "Freelance",
		livelink: "http://quickchicken.in/",
	},
	{
		id: 5,
		project_name: "bktcard",
		icon: "images/projects/projects_logo/bktcard_logo.png",
		description:
			"LoveAkot is a Social Media Android App for Akot(Native City) that aims to help people within a city. It helps in various ways like notifying what is going on in the city, help in to get contact no. of various people like electricians, plumbers, etc. in one click.",
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
			"LoveAkot is a Social Media Android App for Akot(Native City) that aims to help people within a city. It helps in various ways like notifying what is going on in the city, help in to get contact no. of various people like electricians, plumbers, etc. in one click.",
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
			"LoveAkot is a Social Media Android App for Akot(Native City) that aims to help people within a city. It helps in various ways like notifying what is going on in the city, help in to get contact no. of various people like electricians, plumbers, etc. in one click.",
		status: "1",
		lUdpate: "12 Jan 2022",
		project_type: "Personal",
		type: "Mobile App",
		// techStack:[{id:}]
		href: "https://github.com/ShaileshS237/password-generator",
		livelink: "",
	},
	{
		id: 12,
		project_name: "Placement Android App - Dashboard",
		icon: "",
		description:
			"LoveAkot is a Social Media Android App for Akot(Native City) that aims to help people within a city. It helps in various ways like notifying what is going on in the city, help in to get contact no. of various people like electricians, plumbers, etc. in one click.",
		status: "2",
		lUdpate: "12 Jan 2022",
		project_type: "Personal",
		type: "Mobile App",
		// techStack:[{id:}]
		href: "https://github.com/ShaileshS237/password-generator",
		livelink: "",
	},
	{
		id: 9,
		project_name: "NIT Kurukshtra College Website",
		icon: "",
		description:
			"LoveAkot is a Social Media Android App for Akot(Native City) that aims to help people within a city. It helps in various ways like notifying what is going on in the city, help in to get contact no. of various people like electricians, plumbers, etc. in one click.",
		status: "3",
		lUdpate: "12 Jan 2022",
		project_type: "Personal",
		type: "Website",
		// techStack:[{id:}]
		href: "https://github.com/ShaileshS237/nitkkr",
		livelink: "",
	},
	{
		id: 6,
		project_name: "Netflix- Clone",
		icon: "",
		description:
			"LoveAkot is a Social Media Android App for Akot(Native City) that aims to help people within a city. It helps in various ways like notifying what is going on in the city, help in to get contact no. of various people like electricians, plumbers, etc. in one click.",
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
			"LoveAkot is a Social Media Android App for Akot(Native City) that aims to help people within a city. It helps in various ways like notifying what is going on in the city, help in to get contact no. of various people like electricians, plumbers, etc. in one click.",
		status: "1",
		lUdpate: "12 Jan 2022",
		project_type: "Personal",
		type: "Mobile App",
		// techStack:[{id:}]
		href: "https://github.com/ShaileshS237/password-generator",
		livelink: "",
	},

	{
		id: 10,
		project_name: "Contact Parser using CSV file",
		icon: "",
		description:
			"LoveAkot is a Social Media Android App for Akot(Native City) that aims to help people within a city. It helps in various ways like notifying what is going on in the city, help in to get contact no. of various people like electricians, plumbers, etc. in one click.",
		status: "1",
		lUdpate: "12 Jan 2022",
		project_type: "Personal",
		type: "Website",
		// techStack:[{id:}]
		href: "https://github.com/ShaileshS237/nitkkr",
		livelink: "",
	},
	{
		id: 11,
		project_name: "Neumorphic Clock",
		icon: "",
		description:
			"LoveAkot is a Social Media Android App for Akot(Native City) that aims to help people within a city. It helps in various ways like notifying what is going on in the city, help in to get contact no. of various people like electricians, plumbers, etc. in one click.",
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
		id: 1,
		comapny_name: "Auum Platform.",
		location: "Bhubaneswar, Orissa, India(Remote)",
		role: "Software Developer Intern",
		date: "Jun 2021 - Present ",
	},
	{
		id: 4,
		comapny_name: "Quick Chicken.",
		location: "Pune, Maharashtra, India",
		role: "Mobile Developer (Freelancer)",
		date: "Jan 2022 - Jul 2022",
	},
	{
		id: 2,
		comapny_name: "Victorrious Digital.",
		location: "Pune, Maharashtra, India",
		role: "UI Designer & Graphic Designer ",
		date: "Mar 2019 - Mar 2020 ",
	},
	{
		id: 3,
		comapny_name: "DigitizeBrand. ",
		location: "Pune, Maharashtra, India",
		role: "Graphic & Motion Designer ",
		date: "Feb 2018 - Feb 2019 ",
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
