import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { VscGithubAlt } from "react-icons/vsc";
import { PiTwitterLogoLight } from "react-icons/pi";
import { PiFigmaLogoLight } from "react-icons/pi";

export function Header() {
  return (
    <div className="lg:flex lg:justify-between py-16 px-4 md:py-24 md:px-20">
      <div className=" bg-slate-600s mb-16 md:order-2">
        <Image className="mx-auto" src="/images/Pic.png" width={240} height={280} />
      </div>
      <div className="md:order-1">
        <div className="text-4xl font- mb-2">Hi, I’m Sagar 👋</div>
        <div className="mb-12 text-base max-w-[786px]">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional`` digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </div>
        <div className="flex items-center gap-2 ">
        <IoLocationOutline />Ahmedabad, India
        </div>
        <div className="flex items-center gap-3 ml-1 mb-12">
            <div className="bg-[#10B981] w-[10px] h-[10px] rounded-md"></div>
            Available for new projects
        </div>
        <div className="flex gap-2">
        <VscGithubAlt />
        <PiTwitterLogoLight />
        <PiFigmaLogoLight />
        </div>
      </div>
    </div>
  );
}
