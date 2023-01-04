
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Denis",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Denis",
	description: "A product manager learning data analytics.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://buttered-resistance-e2d.notion.site/Denis-Gimaletdinov-en-b9314d1966a041c7a53bc0f8fab52fed",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"Since 2011 I worked in Video Surveillance industry. With each new project I learned it from another side, f.e. transitioned from HW product management to SW product management, from B2B to B2C and back.",
		"The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I like learning, so now I try to dive deeper into Data Analytics which I'm sure will help me on my journey.",
		"When I’m not at work, I focus on my hobbies which are: learning Chinese language, gym, writing down my memories and experience.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Product Management",
			description: "I create products based on data and user/buyer feedback.",
			icons: null,
		},
		{
			title: "Data Analytics",
			description: "Learning the ropes and getting insights from vast oceans of data.",
			icons: null,
		},
		{
			title: "Learning Chinese",
			description: "To be able to expand my universe with foreign content",
			icons: null,
		}
	],
}
// https://fontawesome.com/search?o=r&f=brands
export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Product Manager's Dashboard",
			description: "A set of tools and templates tailored to help a product manager to organize his/hers daily work life",
			icons: [
				{
					icon: faDownload,
					link: "https://unpotatolife.gumroad.com/l/pm-dashboard",
				}
			]
		},
		{
			title: "Product Manager's Buzzwords [Russian]",
			description: "Curated Anki deck containing terms and useful materials for learning and understanding product management",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/dikology/pm-buzzwords",
				}
			]
		},
		{
			title: "Project3",
			description: ".",
			icons: [
				{
					icon: faGithub,
					link: "",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at dgimaletdinov@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:dgimaletdinov@gmail.com",
			isPrimary: true,
		},
		{
			title: "Telegram",
			link: "https://t.me/dikobrist",
			isPrimary: false,
		}
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Denis Gimaletdinov | Product Manager | Data Analyst | Video surveillance expert",
	description: "I create products and explore data. I work in security and smarthome industry since 2011.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@dikobrist",
	description: "Product Manager | Data Analyst | Video surveillance expert",
	cards: [
		{
			title: "Telegram App",
			link: "https://t.me/dikobrist",
		},
		{
			title: "Instagram",
			link: "https://instagram.com/unpotato_lifestyle",
		},
		{
			title: "My GitHub",
			link: "https://github.com/dikology/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/dikology/",
		}
	]
}