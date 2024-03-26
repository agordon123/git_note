import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { techStackBadges } from "@/lib/constants";

interface EditTechProps {
  technologies: string[];
  setTechnologies: (newTech: string[]) => void;
}
const EditTech = ({ technologies, setTechnologies }: EditTechProps) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const addTechnology = (tech: string) => {
    const newTech = [...technologies, tech];
    setTechnologies(newTech);
  };

  const removeTechnology = (tech: string) => {
    const newTech = technologies.filter((t) => t !== tech);
    setTechnologies(newTech);
  };
  useEffect(() => {
    const results = techStackBadges.filter((choice) =>
      choice.name.toLowerCase().includes(search.toLowerCase())
    );

    setResults(results as any);
  }, [search]);
  return (
    <section className="flex min-w-full  flex-col justify-stretch gap-2">
      <label
        htmlFor="technologies"
        className="justify-start space-y-2 text-white-300"
      >
        Tech Stacks
      </label>
      <div className="flex w-full">
        <div className="mt-10 box-border  flex w-full bg-black-700 px-2">
          <div className="flex flex-row  content-center items-center justify-center  gap-x-3 ">
            {technologies && // eslint-disable-next-line array-callback-return
              technologies?.map((tech: any, index: number) => {
                const icon = techStackBadges.find(
                  (badge: any) => badge.name === tech
                );

                if (icon)
                  return (
                    <React.Fragment key={tech}>
                      <div className="flex flex-wrap content-center items-center justify-stretch">
                        <button onClick={() => removeTechnology(tech)}>
                          <span
                            key={index}
                            className="paragraph-3-medium profile-shadow flex h-5 content-center items-center justify-center rounded bg-black-600 p-2 capitalize text-white-100"
                          >
                            {icon.icon}
                            {tech}
                          </span>
                        </button>
                      </div>
                    </React.Fragment>
                  );
              })}
          </div>{" "}
          <div className="min-w-1/2   justify-self-stretch bg-black-700">
            <Input
              className=" bg-black-700 text-white-100"
              value={search}
              placeholder="Search Tech..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex h-9 w-full flex-col content-stretch  justify-items-center ">
        {search &&
          results.length > 0 &&
          // eslint-disable-next-line array-callback-return
          results.map((result: any, index: number) => {
            if (technologies?.includes(result.name)) {
              return false;
            }
            const icon = techStackBadges.find(
              (badge: any) => badge.name === result.name
            );

            if (icon)
              return (
                <React.Fragment key={result.name}>
                  <div className="flex flex-col gap-x-2" key={index}>
                    <Button
                      key={index}
                      className="w-full text-white-100"
                      onClick={() => addTechnology(result.name)}
                    >
                      <li
                        key={result.name}
                        className="z-20 flex h-9 w-full flex-row content-center  items-center overflow-y-hidden rounded-[3px]  bg-black-700 p-1"
                      >
                        <span className="paragraph-3-medium profile-shadow flex h-5 content-center items-center justify-center rounded bg-black-600 p-2 capitalize text-white-100">
                          {icon?.icon}
                          {result.name}
                        </span>
                      </li>
                    </Button>
                  </div>
                </React.Fragment>
              );
          })}
      </div>
    </section>
  );
};

export default EditTech;
