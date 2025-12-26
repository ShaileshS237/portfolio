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

export const TECH_STACK_ICONS = {
	"Angular": "images/skills/angular.png",
	"Ionic": "images/skills/ionic.png",
	"TypeScript": "images/skills/js.png",
	"Tailwind CSS": "images/skills/tailwind.png",
	"Node.js": "images/skills/node.png",
	"REST APIs": "images/skills/node.png",
	"MongoDB": "images/skills/mongodb.png",
	"AWS EC2": "images/skills/node.png",
	"AWS S3": "images/skills/node.png",
	"Docker": "images/skills/node.png",
	"PM2": "images/skills/node.png",
	"CI/CD": "images/skills/node.png",
	"React": "images/skills/react2.png",
	"React Native": "images/skills/react.png",
	"JavaScript": "images/skills/js.png",
	"CSS": "images/skills/css.png",
	"HTML": "images/skills/html.png",
	"Express": "images/skills/express.png",
	"MySQL": "images/skills/mysql.png",
	"Firebase": "images/skills/node.png",
	"Ionic Capacitor": "images/skills/ionic.png",
	"Razorpay": "images/skills/node.png",
	"One Signal": "images/skills/node.png",
	"Local Storage": "images/skills/js.png",
	"TMDB API": "images/skills/node.png",
	"Crypto API": "images/skills/js.png",
	"Android": "images/skills/flutter.png",
	"Java": "images/skills/js.png",
	"SQLite": "images/skills/mysql.png",
	"Material Design": "images/skills/flutter.png",
	"CSV Parser": "images/skills/node.png",
	"File System": "images/skills/node.png",
	"Neumorphism": "images/skills/css.png",
	"Next.js": "images/skills/react2.png",
	"Shadcn UI": "images/skills/react2.png",
	"Zod": "images/skills/js.png",
	"React Hook Form": "images/skills/react2.png",
	"Razorpay SDK": "images/skills/node.png",
	"Monaco Editor": "images/skills/js.png",
	"MDX": "images/skills/react2.png",
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
		project_name: "Love Akot - A Fully-Fledged Hyperlocal App",
		icon: "images/projects/projects_logo/la_logo.png",
		type: "Mobile App",
		lUdpate: "31 Dec 2022",
		description:
			"Love Akot is a hyperlocal community-based mobile application built for my native city Akot, Maharashtra, aimed at digitally empowering local citizens, businesses, and municipal services by bringing everything a city needs into one unified platform.",
		vision: "Build a digital ecosystem for my native city Akot, strengthen community engagement, support local businesses, and provide easy access to city-level information & services. Act as a single source of truth for hyperlocal updates.",
		whyBuilt: "I built Love Akot to address critical gaps in local digital infrastructure. There was no unified platform for citizens to access city information, local businesses struggled with visibility, community announcements were scattered across multiple channels, and ward-wise civic information was inaccessible. The goal was to create a digital twin of my city that truly serves its people.",
		features: [
			{
				title: "Community & City Updates",
				description: "Local announcements, city news, important alerts, public notices, and community-driven discussions",
				icon: "🏘️"
			},
			{
				title: "Hyperlocal Marketplace",
				description: "Post local buy/sell requests, promote small businesses, and connect buyers with sellers",
				icon: "🛍️"
			},
			{
				title: "Municipality Module",
				description: "Ward-wise information, area & boundary details, public services awareness, and foundation for future grievance tracking",
				icon: "🏛️"
			},
			{
				title: "Location-Based Experience",
				description: "Content tailored to Akot city with ward-level segmentation for hyperlocal relevance",
				icon: "📍"
			}
		],
		differentiators: "Built specifically for one city with real local impact, community-first approach, and a scalable blueprint for other cities. Unlike generic apps, Love Akot understands the unique needs and culture of Akot.",
		myRole: "As Founder & Lead Developer, I conceptualized the product vision, built the frontend & backend architecture from scratch, designed user flows and UI/UX, developed RESTful APIs and data models, managed AWS hosting and deployment, and released Love Akot v2.0.1 - the 'All-in-One' version.",
		currentStatus: "Live & actively developed with Version 2.x released, continuous feature expansion, and modular architecture for future scaling.",
		impact: [
			"2000+ active users from Akot and surrounding areas",
			"500+ local businesses registered on the marketplace",
			"10,000+ community posts and announcements shared",
			"Featured in local news and recognized by municipal authorities",
			"Improved local business visibility by 60%",
			"Reduced information gap between citizens and civic bodies",
			"Learned full-stack development, cloud deployment, and product management",
			"Built scalable architecture that can be replicated for other cities"
		],
		roadmap: [
			"Ward-level grievance redressal system with ticket tracking",
			"Event & notice board for community gatherings",
			"Business analytics dashboard for local shops",
			"Admin panel for municipal authorities",
			"Expansion to nearby cities with customizable modules",
			"Mobile payment integration for marketplace transactions"
		],
		techStack: ["Angular", "Ionic", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "MongoDB", "AWS EC2", "AWS S3", "Docker", "PM2", "CI/CD"],
		status: "1",
		project_type: "Personal",
		route: "/work",
		href: "https://github.com/ShaileshS237/loveAkot",
		livelink: "https://play.google.com/store/apps/details?id=com.loveakot.android",
		videoLink: "https://www.youtube.com/watch?v=HoPkcpzqU3M&t=4s",
		website: "https://loveakot.in",
		adminPanel: "https://admin.loveakot.in",
		headerImage: "../public/images/projects/projects_logo/bktcard_logo.png",
	},
	{
		id: 2,
		project_name: "Quick Chicken - Freelance Quick Commerce App",
		type: "Mobile App",
		icon: "images/projects/projects_logo/qc_white.png",
		description: "Quick Chicken is an on-demand meat delivery app that enables users to order fresh and high-quality chicken, mutton, and other meats directly to their doorstep. With a focus on convenience, freshness, and hygiene, Quick Chicken brings a variety of meat products from trusted local suppliers straight to the customer's home.",
		techStack: ["Ionic Capacitor", "Tailwind CSS", "Node.js", "Express", "MySQL", "Razorpay", "One Signal"],
		status: "2",
		lUdpate: "12 Jan 2022",
		project_type: "Freelance",
		href: "https://github.com/ShaileshS237/QuickChicken",
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
		project_name: "Memo Bucket",
		icon: "images/projects/projects_logo/bktcard_logo.png",
		description:
			"Memo Bucket is a note-taking app that streamlines organization through categorization. With customizable buckets, you have the flexibility to categorize your notes in a way that suits your needs.",
		techStack: ["React", "JavaScript", "Tailwind CSS", "Local Storage"],
		status: "2",
		lUdpate: "12 Jan 2022",
		type: "Website",
		href: "https://github.com/ShaileshS237/BktCard",
		livelink: "https://bktcard.netlify.app/",
	},
	{
		id: 4,
		project_name: "Matrimoney App",
		icon: "",
		description:
			"Matrimony App project connects individuals seeking partners for marriage. Features profile creation, matching, communication tools, search by criteria, privacy controls, and user verification for a safe and trustworthy platform to simplify finding life partners.",
		techStack: ["React Native", "Node.js", "MongoDB", "Express", "Firebase"],
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
		techStack: ["Android", "Java", "Firebase", "SQLite", "Material Design"],
		status: "1",
		lUdpate: "12 Jan 2022",
		project_type: "Personal",
		type: "Mobile App",
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
		techStack: ["React", "JavaScript", "TMDB API", "Tailwind CSS", "Firebase"],
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
		techStack: ["React Native", "JavaScript", "Crypto API"],
		status: "1",
		lUdpate: "12 Jan 2022",
		project_type: "Personal",
		type: "Mobile App",
		href: "https://github.com/ShaileshS237/password-generator",
		livelink: "",
	},

	{
		id: 10,
		project_name: "Contact Parser using CSV file",
		icon: "",
		description:
			"Contact Parser using CSV file is a tool that parses and extracts information from CSV files containing contact information. It organizes the data into structured format, and allows users to export the information into various file formats, such as vCard, Excel, and more.",
		techStack: ["JavaScript", "Node.js", "CSV Parser", "File System"],
		status: "1",
		lUdpate: "12 Jan 2022",
		project_type: "Personal",
		type: "Website",
		href: "https://github.com/ShaileshS237/nitkkr",
		livelink: "",
	},
	{
		id: 11,
		project_name: "Neumorphic Clock",
		icon: "",
		description:
			"Neumorphic Style Clock is a clock design featuring soft, curvy shapes with a gradient background, creating a unique and modern look.",
		techStack: ["HTML", "CSS", "JavaScript", "Neumorphism"],
		status: "1",
		lUdpate: "12 Jan 2022",
		project_type: "Personal",
		type: "Website",
		href: "https://github.com/ShaileshS237/clock",
		livelink: "https://shaileshs237.github.io/clock/",
	},
];

export const EXPERIENCE = [
	{
		id: 1,
		comapny_name: "Siemens Technology and Services Pvt. Ltd",
		location: "Bengaluru, Karnataka",
		role: "Software Development Engineer",
		date: "Jul 2023 - Present",
		description: "Designed and developed 10+ complex frontend components including Asset Details, Component Overview, and Vulnerabilities Tabs, enhancing OT Companion's usability. Resolved 150+ critical frontend bugs, identifying root causes and deploying timely fixes, boosting application stability by 25% and reducing production incidents by 30% through proactive triage and code improvements. Implemented document storage and interactive Map View using Geocoding APIs, increasing geographic data accuracy by 40% and improving user interaction scores.",
		skills: ["Angular", "TypeScript", "Frontend Development", "Bug Fixing", "Geocoding APIs"],
		type: "technical"
	},
	{
		id: 3,
		comapny_name: "Auum Platform",
		location: "Remote",
		role: "Software Development Engineer Intern",
		date: "Jun 2021 - Jun 2023",
		description: "Built a cross-platform Android application Agnaya using Flutter, enabling real-time monitoring and control for 1,000+ IoT-enabled gas stove units, increasing customer satisfaction by 25%. Maintained and debugged company website, improving page load speed by 40%, resolving 50+ critical issues, and boosting average session duration by 15%. Integrated 15+ RESTful APIs to enable real-time communication between the mobile app and IoT devices, ensuring 99.9% uptime and consistent data flow.",
		skills: ["Flutter", "RESTful APIs", "IoT", "Web Development", "React.js"],
		type: "technical"
	},
	{
		id: 4,
		comapny_name: "National Institute of Technology",
		location: "Kurukshetra, Haryana, India",
		role: "Teaching Assistant",
		date: "Nov 2021 - Jun 2023",
		description: "Assisted professors in conducting lab sessions for B.Tech students, providing guidance on programming concepts and project development. Managed and evaluated student assignments, fostering a supportive learning environment and improving student engagement.",
		skills: ["C++", "Data Structures", "Teaching"],
		type: "non-technical"
	},
	{
		id: 5,
		comapny_name: "Quick Chicken",
		location: "Pune, Maharashtra, India · Remote",
		role: "Mobile Developer",
		date: "Jan 2022 - Jul 2022",
		description: "As a software developer, I had the opportunity to work on the development of an Android app for a Pune-based startup called Quickchicken. The app was developed using the Ionic framework, which is based on Angular and allows for the creation of cross-platform apps using web technologies. I also utilized MySQL for the app's database and implemented push notifications using OneSignal. A REST API was used for communication between the app and the server, and Razerpay payment gateway was implemented to handle financial transactions.",
		skills: ["Ionic", "Angular", "MySQL", "REST API"],
		type: "technical"
	},
	{
		id: 6,
		comapny_name: "Victorious Digital",
		location: "Pune, Maharashtra, India",
		role: "Graphic Designer and UI Designer",
		date: "Mar 2019 - Mar 2020",
		description: "Created visually compelling designs for digital and print media, focusing on user interface elements and brand identity. Collaborated with cross-functional teams to deliver high-quality design solutions that met client requirements and enhanced user experiences.",
		skills: ["Adobe Illustrator", "Adobe Creative Suite", "Figma", "Adobe XD", "Adobe Audition", "Adobe After Effects", "Adobe Photoshop", "Adobe Premiere Pro"],
		type: "technical"
	},
	{
		id: 7,
		comapny_name: "DigitizeBrand Hub (India) Pvt Ltd",
		location: "Pune",
		role: "Graphic Designer and Video Editor",
		date: "Feb 2018 - Feb 2019",
		description: "Produced creative graphic content and edited engaging videos for social media and marketing campaigns. Managed multiple design projects from concept to completion, ensuring brand consistency and high production quality.",
		skills: ["Adobe Creative Suite", "Adobe Audition", "Adobe After Effects", "Adobe Premiere Pro"],
		type: "technical"
	},
];

export const SOCIAL = [
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
		date: "May 08, 2024",
		tags: ["Mobile App", "Community", "Startup"],
		link: "/blogs/love-akot"
	},
	{
		id: 2,
		title: "Beyond AI: The Top 10 Developer Tools Every Modern Engineer Needs in 2025 🚀",
		description: "In today’s fast-paced tech world, great productivity isn’t just about writing code — it’s about crafting a seamless workflow. Here’s a list of tools every modern engineer needs.",
		date: "Jul 07, 2025",
		tags: ["Productivity", "DevTools", "AI"],
		link: "https://medium.com/@shaileshsawale7/beyond-ai-the-top-10-developer-tools-every-modern-engineer-needs-in-2025-b9acd74baaf2"
	},
	{
		id: 3,
		title: "🔐 Unlocking Closures in JavaScript — Made Simple",
		description: "If you’re learning JavaScript, chances are you’ve heard the term “closure” tossed around. It may sound complicated, but it's simpler than you think.",
		date: "May 24, 2025",
		tags: ["JavaScript", "Concepts", "Web Dev"],
		link: "https://medium.com/@shaileshsawale7/unlocking-closures-in-javascript-made-simple-2a31616aa1aa"
	},
	{
		id: 4,
		title: "Top 5+ Angular Design System Worth considering In 2023",
		description: "A design system for Angular is a set of reusable UI components, guidelines, and design principles that allow for consistent and cohesive development.",
		date: "Jan 16, 2023",
		tags: ["Angular", "Design System", "UI/UX"],
		link: "https://medium.com/@shaileshsawale7/top-5-angular-design-system-worth-considering-in-2023-e64f18d173a1"
	}
];

export const GEAR_ITEMS = [
	{
		category: "Workstation",
		items: [
			{
				id: 1,
				name: "MacBook Air M4 (14-inch)",
				description: "My main machine for development and design.",
				icon: "Laptop"
			},
			{
				id: 13,
				name: "Asus ROG Strix G",
				description: "A powerful gaming laptop for heavy workloads.",
				icon: "Laptop"
			},
			{
				id: 2,
				name: "LG 29-inch Long Monitor",
				description: "Primary display for coding and multitasking.",
				icon: "Monitor"
			},
			{
				id: 3,
				name: "Logitech MX 3S Mouse",
				description: "Handy mouse and keyboard for productivity and ergonomic comfort.",
				icon: "Mouse"
			},
			{
				id: 4,
				name: "Logitech MX Keyboard",
				description: "Handy mouse and keyboard for productivity and ergonomic comfort.",
				icon: "Keyboard"
			},
			{
				id: 5,
				name: "LG 27 inch monitor",
				description: "Secondary display for coding and multitasking.",
				icon: "Monitor"
			}
		]
	},
	{
		category: "Audio & Accessories",
		items: [
			{
				id: 6,
				name: "Apple AirPods Pro (2nd Gen)",
				description: "For meetings and casual listening on the go.",
				icon: "Headphones"
			},
			{
				id: 7,
				name: "iPhone 14",
				description: "My daily driver and test device for mobile apps.",
				icon: "Smartphone"
			},
			{
				id: 12,
				name: "Realme X7 Max",
				description: "Secondary testing device for Android apps.",
				icon: "Smartphone"
			}
		]
	},
	{
		category: "Software & Tools",
		items: [
			{
				id: 8,
				name: "VS Code",
				description: "My go-to editor with a minimal setup.",
				icon: "Code"
			},
			{
				id: 9,
				name: "Google Antigravity",
				description: "A powerful agentic AI coding assistant designed by Google DeepMind.",
				icon: "Sparkles"
			},
			{
				id: 11,
				name: "Figma",
				description: "Where all my design ideas come to life.",
				icon: "Layout"
			}
		]
	}
];
