import React from "react";

import { CheckSquare } from "lucide-react";

const Takeaways = ({ experiences }: { experiences: string[] }) => {
  return (
    <div className="paragraph-1-bold flex w-full flex-col gap-y-2.5 px-[30px] py-6 text-white-100">
      <span className="">Takeaways</span>
      {experiences.length > 0
        ? experiences.map((experience, index) => (
            <>
              <span className="paragraph-2-regular flex gap-2 text-white-300 ">
                {" "}
                <CheckSquare
                  size={16}
                  className="mr-[8px] mt-[2px] stroke-green-400"
                />{" "}
                {experience}{" "}
              </span>
            </>
          ))
        : null}
    </div>
  );
};

export default Takeaways;