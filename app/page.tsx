import Nav from "./components/nav";
import { Github, Twitter, Mail } from "lucide-react";

interface Project {
  title: string;
  desc: string;
}

interface Link {
  title: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "colabcoder",
    desc: "write code together with friends in real time",
  },
  {
    title: "moe-cli",
    desc: "command line tool to search, download and read manga",
  },
  {
    title: "wisepay-backend",
    desc: "rest api for an expense manager with jwt authentication and crud operations",
  },
];

const links: Link[] = [
  {
    title: "Github",
    link: "https://www.github.com/retrovoxel",
  },
  {
    title: "Twitter",
    link: "https://www.twitter.com/retrovoxel",
  },
  {
    title: "Email",
    link: "mailto:retrovoxel@protonmail.com",
  },
];

export default function Home() {
  return (
    <main className="bg-[rgb(23,23,23)] flex justify-center min-h-screen w-full">
      <div className=" px-10 hidden:border min-h-screen min-w-content">
        <Nav />
        <hr className=" color-gray-500" />
        <p className="pt-5 pb-7 text-base text-stone-400 font-normal">
          projects
        </p>
        <ul className=" pb-10 flex flex-col gap-5">
          {projects.map((project, index) => (
            <li key={index}>
              <a
                href={`https://www.github.com/retrovoxel/${project.title}`}
                className="pb-2 text-sm md:text-base text-white font-normal underline underline-offset-4"
              >
                {project.title}
              </a>
              <p className="text-sm md:text-base text-stone-400 font-normal ">
                {project.desc}
              </p>
            </li>
          ))}
        </ul>
        <hr />

        <div className=" py-7 flex gap-5">
          <a href="https://www.github.com/retrovoxel">
            <Github color="white" />
          </a>

          <a href="https://www.twitter.com/retrovoxel">
            <Twitter color="white" />
          </a>
          <a href="mailto:retrovoxel@protonmail.com">
            <Mail color="white" />
          </a>
        </div>
      </div>
    </main>
  );
}
