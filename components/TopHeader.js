import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { VscGithubAlt } from "react-icons/vsc";
import { PiTwitterLogoLight } from "react-icons/pi";
import { PiFigmaLogoLight } from "react-icons/pi";

export function Header() {
  return (
    <div className="flex flex-col py-16 px-4 gap-16">
      <div className="flex justify-center bg-slate-600s">
        <Image src="/images/Pic.png" width={240} height={280} />
      </div>
      <div>
        <div className="text-4xl font- mb-2">Hi, I’m Sagar 👋</div>
        <div className="mb-12 text-base">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptionall digital experiences
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
