import React from "react";
import workflowBadge from "@/public/icons/monitor.svg";
import knowledgeBadge from "@/public/icons/greenbubble.svg";
import componentBadge from "@/public/icons/numberlist.svg";
import Image from "next/image";
import {
  DiJsBadge,
  DiReact,
  DiAndroid,
  DiLaravel,
  DiPhp,
  DiVisualstudio,
  DiJavascript,
  DiHtml5,
  DiApple,
  DiCode,
  DiNodejs,
} from "react-icons/di";
import { TechStackBadges } from "@/lib/constants";
type ResourceTagType =
  | "knowledge"
  | "component"
  | "workflow"
  | "plain"
  | "tech";
interface ResourceTagProps extends React.PropsWithChildren {
  type: ResourceTagType;
  text?: string;
  tech?: TechStackBadges;
  icon?: any;
}

const ResourceTag = ({
  type = "plain",

  ...props
}: ResourceTagProps) => {
  const { children, tech, text, ...rest } = props;

  const badgeType = type || "plain";
  const baseClass =
    "inline-flex px-0.5 py-0.5 gap-1 rounded-[3px] items-center justify-center rounded-[3px]";

  const label = {
    component: "Component",
    workflow: "WorkFlow",
    knowledge: "Knowledge",
    plain: text || " ",
    tech: tech?.name || " ",
  };

  const color = {
    component: "bg-black-700 text-blue-500",
    workflow: "bg-black-700 text-purple-500",
    knowledge: "bg-black-700 text-green-500",
    plain: "bg-black-700 text-white-300 paragraph-3-medium",
    tech: "bg-black-700 text-white-300 paragraph-3-medium",
  };
  const iconSrc = {
    component: componentBadge,
    workflow: workflowBadge,
    knowledge: knowledgeBadge,
    plain: null,
    tech: tech?.icon || null,
  };
  const icon = {
    react: <DiReact />,
    android: <DiAndroid />,
    laravel: <DiLaravel />,
    php: <DiPhp />,
    apple: <DiApple />,
    visualstudio: <DiVisualstudio />,
    javascript: <DiJavascript />,
    html: <DiHtml5 />,
    code: <DiCode />,
    node: <DiNodejs />,
  };

  return (
    <span
      className={`${baseClass} ${color[type || "plain"]} hover:${color[type || "plain"]}`}
      {...rest}
    >
      {iconSrc[badgeType] &&
        (text === "react" ? (
          <DiJsBadge />
        ) : (
          <Image
            src={iconSrc[badgeType]}
            alt={label[badgeType]}
            className="size-4"
          />
        ))}
      {icon}
      {label[badgeType]}
      {children}
    </span>
  );
};

export default ResourceTag;
