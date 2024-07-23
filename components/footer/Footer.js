import Tag from "../Work/Works";
import { GoMail } from "react-icons/go";
import { LuCopy } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";

import { VscGithubAlt } from "react-icons/vsc";
import { PiTwitterLogoLight } from "react-icons/pi";
import { PiFigmaLogoLight } from "react-icons/pi";

export function Footer() {
  return (
    <div className="px-4 py-16">
        <div className="flex justify-center pb-4">
            <Tag name="Get in touch"/>
        </div>
      <div className="text-xl font-normal text-gray-600 pb-6 text-center">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </div>
      <div>
        <div className="flex justify-between items-center">
            <GoMail />
            <p className="text-gray-900">reachsagarshah@gmail.com</p>
            <LuCopy />
        </div>
        <div className="flex justify-center items-center gap-4 pb-6">
            <IoCallOutline />
            <p className="text-gray-900">+91 8980500565</p>
            <LuCopy />
        </div>
      </div>
      <div>
        <div className="text-center font-normal text-base text-gray-600 mb-2">You may also find me on these platforms!</div>
        <div className="flex gap-1 justify-center">
        <VscGithubAlt />
        <PiTwitterLogoLight />
        <PiFigmaLogoLight />
        </div>
      </div>
    </div>
  );
}
