import Nav from "./components/nav";
import { Github, Twitter, Mail } from "lucide-react";
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
          <li>
            <a
              href="https://www.github.com/retrovoxel/moe-cli"
              className="pb-2 text-sm md:text-base text-white font-normal underline underline-offset-4"
            >
              moe-cli
            </a>
            <p className="text-sm md:text-base text-stone-400 font-normal ">
              command line tool to search, download and real manga
            </p>
          </li>
          <li>
            <a
              href="https://www.github.com/retrovoxel/wisepay-backend"
              className=" pb-2 text-sm md:text-base text-white font-normal underline underline-offset-4"
            >
              wisepay
            </a>
            <p className=" text-sm md:text-base text-stone-400 font-normal ">
              finance manager crud api with jwt token authentication
            </p>
          </li>
          <li>
            <a
              href="https://www.github.com/retrovoxel/colabcoder"
              className="pb-2 text-sm md:text-base text-white font-normal underline underline-offset-4"
            >
              colabcoder
            </a>
            <p className="text-sm md:text-base text-stone-400 font-normal ">
              write and execute code together with friends in real time
            </p>
          </li>
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
