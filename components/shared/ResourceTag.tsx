import React from "react";
import workflowBadge from "@/public/icons/monitor.svg";
import knowledgeBadge from "@/public/icons/greenbubble.svg";
import componentBadge from "@/public/icons/numberlist.svg";
import Image from "next/image";
type ResourceTagType = "knowledge" | "component" | "workflow" | "plain";
interface CustomBadgeProps extends React.PropsWithChildren {
  type: ResourceTagType;
  text?: string;
}

const ResourceTag = (props: CustomBadgeProps) => {
  const { children, type, text } = props;
  const badgeType = type || "plain";
  const baseClass =
    "inline-flex px-0.5 py-1 gap-1 rounded-[3px] items-center justify-center rounded-[3px]";

  const label = {
    component: "Component",
    workflow: "WorkFlow",
    knowledge: "Knowledge",
    plain: text || " ",
  };

  const color = {
    component: "bg-black-700 text-blue-500",
    workflow: "bg-black-700 text-purple-500",
    knowledge: "bg-black-700 text-green-500",
    plain: "bg-black-700 text-white-300 paragraph-3-medium",
  };
  const iconSrc = {
    component: componentBadge,
    workflow: workflowBadge,
    knowledge: knowledgeBadge,
    plain: null,
  };

  return (
    <span
      className={`${baseClass} ${color[type]} hover:${color[type]}`}
      {...props}
    >
      {iconSrc[badgeType] && (
        <Image
          src={iconSrc[badgeType]}
          alt={label[badgeType]}
          className="size-4"
        />
      )}
      {label[badgeType]}
      {children}
    </span>
  );
};

export default ResourceTag;
