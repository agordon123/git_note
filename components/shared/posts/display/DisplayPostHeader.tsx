import React from "react";
import ResourceTag from "../../ResourceTag";
import threeDots from "@/public/icons/threeDots.svg";
import Image from "next/image";
import { Calendar, Eye, Star } from "lucide-react";
import { format } from "date-fns";
import Badge from "@/components/ui/badge";
interface DisplayPostHeaderProps {
  title: string;
  description: string;
  postType: string;
  tags: string[];
  createdAt: Date;
  views?: number;
}
const DisplayPostHeader = ({
  title,
  description,
  postType,
  tags,
  createdAt,
  views,
}: DisplayPostHeaderProps) => {
  return (
    <section className="flex h-[248px] w-full gap-[20px] pl-[40px] pr-[32px] pt-[30px]">
      <div className="flex w-full flex-col  gap-5  ">
        <div className="flex h-10 justify-between">
          <h1 className="display-1-bold text-white-100">{title}</h1>
          <div className="gap-2.5">
            <Badge>{postType}</Badge>
            <Image src={threeDots} alt="three dots" />
          </div>
        </div>
        <span className="paragraph-3-regular text-white-300">
          {description}
        </span>
        <div className="flex w-full flex-col gap-4 text-white-300">
          <div className="flex gap-3.5 px-2">
            <span className=" flex gap-1">
              {format(createdAt!, "MM dd, yyyy")} <Calendar size={16} />
            </span>
            <span className=" flex gap-1">
              <Star size={16} /> 1k Stars
            </span>
            <span className=" flex gap-1">
              <Eye size={16} /> 1k Views
            </span>
          </div>
          <div>
            <div className="flex gap-3.5 capitalize">
              {tags.map((tag, index) => (
                <ResourceTag key={index} type="plain" text={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayPostHeader;
