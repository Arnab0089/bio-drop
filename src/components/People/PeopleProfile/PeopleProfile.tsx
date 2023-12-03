import { FaLocationDot } from "react-icons/fa6";
import PeopleLink from "./PeopleLink";

export default function PeopleProfile({ userData }: { userData: any }) {
  const {
    name,
    username,
    headline,
    summary,
    links,
    profilePic,
    location,
    tags,
  } = userData;
  return (
    <div className="w-full flex flex-col items-center ">
      <img src={profilePic} alt="" className="rounded-full" width={150} />
      <h1 className="text-3xl font-bold mt-4">{name}</h1>
      <p className="text-lg font-medium mt-1">{headline}</p>
      <p className="text-sm flex items-center gap-1 mt-1">
        <FaLocationDot className="" />
        {location.city}, {location.country}
      </p>
      <h1 className="text-xl font-bold mt-4">About</h1>
      <p className="text-md font-medium mt-4 text-center md:w-[70%]">
        {summary}
      </p>
      <div className="flex flex-wrap justify-center gap-2 my-4 md:w-[70%]">
        {tags.map((tag: string) => (
          <span className="bg-sky-200 cursor-pointer text-sm text-sky-600 rounded-full px-2 transition-all duration-400 hover:border hover:border-sky-600">
            {tag}
          </span>
        ))}
      </div>
      <div className="w-full mt-2 mb-8">
        <h1 className="text-xl font-bold text-center">Links({links.length})</h1>
        <ul className="mt-2 flex flex-col gap-3">
          {links.map((link: any) => (
            <li className="">
              <PeopleLink
                key={link.id}
                label={link.label}
                url={link.url}
                type={link.type}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
