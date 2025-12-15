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
		id: 1,
		comapny_name: "Siemens",
		location: "Bengaluru, Karnataka, India",
		role: "Software Engineer",
		date: "Jul 2024 - Present",
		description: "Maintained and improved the client website using React.js, fixing bugs and optimizing performance. Developed Flutter UI components to enhance the IoT app's user experience. Designed interactive Figma prototypes and created marketing materials using Adobe Illustrator & Photoshop, including leaflets, posters, and daily social media content to boost brand engagement.",
		skills: ["React.js", "Flutter", "Figma", "Adobe Illustrator", "Adobe Photoshop"]
	},
	{
		id: 2,
		comapny_name: "Siemens",
		location: "Bengaluru, Karnataka, India",
		role: "PGET",
		date: "Jul 2023 - Jun 2024",
		description: "",
		skills: []
	},
	{
		id: 3,
		comapny_name: "AUUM Platforms",
		location: "Bhubaneswar, Odisha, India · Remote",
		role: "SDE Intern",
		date: "Jun 2021 - Jun 2023",
		description: "",
		skills: ["Adobe Illustrator", "Figma", "React.js", "Adobe Photoshop", "Flutter"]
	},
	{
		id: 4,
		comapny_name: "National Institute of Technology",
		location: "Kurukshetra, Haryana, India",
		role: "Teaching Assistant",
		date: "Nov 2021 - Jun 2023",
		description: "",
		skills: []
	},
	{
		id: 5,
		comapny_name: "Quick Chicken",
		location: "Pune, Maharashtra, India · Remote",
		role: "Mobile Developer",
		date: "Jan 2022 - Jul 2022",
		description: "As a software developer, I had the opportunity to work on the development of an Android app for a Pune-based startup called Quickchicken. The app was developed using the Ionic framework, which is based on Angular and allows for the creation of cross-platform apps using web technologies. I also utilized MySQL for the app's database and implemented push notifications using OneSignal. A REST API was used for communication between the app and the server, and Razerpay payment gateway was implemented to handle financial transactions.",
		skills: ["Ionic", "Angular", "MySQL", "REST API"]
	},
	{
		id: 6,
		comapny_name: "Victorious Digital",
		location: "Pune, Maharashtra, India",
		role: "Graphic Designer and UI Designer",
		date: "Mar 2019 - Mar 2020",
		description: "",
		skills: ["Adobe Illustrator", "Adobe Creative Suite", "Figma", "Adobe XD", "Adobe Audition", "Adobe After Effects", "Adobe Photoshop", "Adobe Premiere Pro"]
	},
	{
		id: 7,
		comapny_name: "DigitizeBrand Hub (India) Pvt Ltd",
		location: "Pune",
		role: "Graphic Designer and Video Editor",
		date: "Feb 2018 - Feb 2019",
		description: "",
		skills: ["Adobe Creative Suite", "Adobe Audition", "Adobe After Effects", "Adobe Premiere Pro"]
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

export const BLOGS = [
	{
		id: 1,
		title: "Love Akot: Building a Hyperlocal Community App",
		description: "My journey of building a social media platform for my hometown, Akot, to help residents stay informed and connected.",
		date: "Dec 31, 2022",
		tags: ["Mobile App", "Community", "Startup"],
		link: "/blogs/love-akot"
	},
	{
		id: 2,
		title: "Mastering Tailwind CSS",
		description: "Exploring the new features in Tailwind CSS and how it simplifies modern web styling workflows.",
		date: "Nov 02, 2023",
		tags: ["CSS", "Tailwind", "Design"],
		link: "https://medium.com/@shaileshsawale7"
	},
	{
		id: 3,
		title: "The Future of Web Development",
		description: "How AI tools like Copilot and ChatGPT are transforming the developer experience and productivity.",
		date: "Dec 10, 2023",
		tags: ["AI", "Future", "DevTools"],
		link: "https://medium.com/@shaileshsawale7"
	}
];
