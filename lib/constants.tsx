import { SidebarLink, SocialLink } from "@/types/global";
import React from "react";
import {
  FaCss3,
  FaDribbble,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJava,
  FaJs,
  FaLaravel,
  FaLinkedin,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import {
  DiCss3,
  DiGithub,
  DiHtml5,
  DiJava,
  DiJavascript,
  DiLaravel,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";

export const githubClientID = process.env.GITHUB_CLIENT_ID!;
export const githubClientSecret = process.env.GITHUB_CLIENT_SECRET!;

export const cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME!;
export const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY!;
export const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET!;

export const quickLinks: SidebarLink[] = [
  {
    linkType: "plain",
    route: "https://github.com/agordon123",
    label: "Github Page",
    iconSrc: "/icons/github-icon.png",
  },
  {
    linkType: "plain",
    route: "/home/posts/",
    label: "Placeholder 2",
    iconSrc: "/icons/jsm-logo.png",
  },
  {
    linkType: "plain",
    route: "/api/sign-out/",
    label: "Placeholder 3",
    iconSrc: "/icons/jsm-logo.png",
  },
];
export const socialLinks: SocialLink[] = [
  {
    linkType: "github",
    route: "https://github.com/agordon123",
    label: "agordon123",
    icon: FaGithub,
  },
  {
    linkType: "linkedin",
    route: "https://www.linkedin.com/in/aaron-gordon-1a1a0a1b7/",
    label: "adamgordon-119",
    icon: FaLinkedin,
  },
  {
    linkType: "twitter",
    route: "https://twitter.com/AGordon123",
    label: "@agordon123",
    icon: FaTwitter,
  },
  {
    linkType: "dribbble",
    route: "https://dribbble.com/agordon123",
    label: "Email",
    icon: FaDribbble,
  },
  {
    linkType: "instagram",
    route: "https://instagram.com",
    label: "InstaGram",
    icon: FaInstagram,
  },
];
export interface TechStackBadges {
  name: string;
  icon: React.JSX.Element;
  color?: string;
}
export const TechIcons: IconType[] = [
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaJava,
  FaGithub,
  BiLogoTailwindCss,
  TbBrandNextjs,
  FaLaravel,
  FaPhp,
  BiLogoTypescript,
];

export const techStackBadges: TechStackBadges[] = [
  {
    name: "react",
    icon: <DiReact fill="rgb(0, 255, 255)" />,
    color: "name-blue-500",
  },
  {
    name: "node",
    icon: <DiNodejs fill="rgb(0, 255, 255)" />,
    color: "bg-green-500",
  },
  {
    name: "html",
    icon: <DiHtml5 fill="red" />,
    color: "bg-red-500",
  },
  {
    name: "css",
    icon: <DiCss3 fill="blue" />,
  },
  {
    name: "javascript",
    icon: <DiJavascript fill="yellow" />,
  },
  {
    name: "python",
    icon: <DiPython fill="yellow" />,
  },
  {
    name: "java",
    icon: <DiJava fill="red" />,
  },
  {
    name: "github",
    icon: <DiGithub fill="gray" />,
  },
  {
    name: "tailwind",
    icon: <BiLogoTailwindCss fill="rgb(0, 255, 255)" />,
  },
  {
    name: "nextjs",
    icon: <TbBrandNextjs fill="white" stroke="black" />,
  },
  {
    name: "laravel",
    icon: <DiLaravel fill="red" />,
  },
  {
    name: "php",
    icon: <FaPhp fill="blue" />,
  },
  {
    name: "typescript",
    icon: <BiLogoTypescript fill="blue" />,
  },
];
