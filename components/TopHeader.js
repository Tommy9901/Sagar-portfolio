import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { VscGithubAlt } from "react-icons/vsc";
import { PiTwitterLogoLight } from "react-icons/pi";
import { PiFigmaLogoLight } from "react-icons/pi";

export function Header() {
  return (
    <div className="dark:text-[#D1D5DB] dark:bg-[#030712] md:flex py-16 px-4 md:py-24 md:px-20 md:gap-12 md:flex-row-reverse">
      <div className=" px-8 md:w-[380px] max-w-[400px] mx-auto">
        <div className=" bg-gray-200 dark:bg-[#374151] w-full mb-16 aspect-[5/6] relative md:top-[10%] md:left-[10%]">
          <Image className="border-[white] border-8 dark:border-[#030712] relative rigth-80 object-cover w-[90%] block md:w-full h-full bottom-[5%] md:bottom-[10%] right-[-5%] md:right-[10%]" src="/images/picc.png " width={240} height={280}   />
        </div>

      </div>
      <div className="">
        <div className="text-4xl font- mb-2">Hi, I’m Sagar 👋</div>
        <div className="mb-12 text-base max-w-[786px] flex justify-between">
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
