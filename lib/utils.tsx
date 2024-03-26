import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getToken } from "next-auth/jwt";
import qs from "query-string";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
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
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// This is an example of how to read a JSON Web Token from an API route

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // If you don't have the NEXTAUTH_SECRET environment variable set,
  // you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req });
  res.send(JSON.stringify(token, null, 2));
}
interface URLQueryParams {
  params: string;
  key: string;
  value: string | null;
}
export const formUrlQuery = ({ params, key, value }: URLQueryParams) => {
  const currentURL = qs.parse(params);
  currentURL[key] = value;
  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentURL },
    { skipNull: true }
  );
};
interface RemoveURLQueryParams {
  params: string;
  keysToRemove: string[];
}
export const removeKeysFromQuery = ({
  params,
  keysToRemove,
}: RemoveURLQueryParams) => {
  const currentURL = qs.parse(params);
  keysToRemove.forEach((key) => delete currentURL[key]);
  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentURL },
    { skipNull: true }
  );
};

export const validatePassword = async (
  hashedPassword: string,
  password: string
) => {
  const isMatch = await bcrypt.compare(hashedPassword, password);
  if (isMatch) {
    return true;
  } else {
    throw new Error("Passwords don't match.");
  }
};

export const turnNameToIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case "react":
      console.log("react");
      return <DiReact />;
    case "nodejs":
      return <DiNodejs />;
    case "javascript":
      return <DiJavascript />;
    case "python":
      return <DiPython />;
    case "java":
      return <DiJava />;
    case "html5":
      return <DiHtml5 />;
    case "css3":
      return <DiCss3 />;
    case "typescript":
      return <BiLogoTypescript />;
    case "tailwind css":
      return <BiLogoTailwindCss />;
    case "laravel":
      return <DiLaravel />;
    case "github":
      return <DiGithub />;
    default:
      return <DiReact />;
  }
};
