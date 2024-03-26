"use client";
import { SocialLink } from "@/types/global";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
interface SocialLinksProps {
  socialLinks: SocialLink[];
  children?: React.ReactNode;
}
const SocialLinks = ({ socialLinks }: SocialLinksProps) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col">
      {socialLinks.map((link) => {
        return (
          <a
            key={link.label}
            href={link.route}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-row items-center space-x-2"
          >
            <span>{link.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
