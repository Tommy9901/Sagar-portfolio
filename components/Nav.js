import { IoMenu } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

export function Nav(){
    return(
        <div className="flex justify-between px-4 md:px-20">
      <div className="font-[700] text-3xl ">{`<SS />`}</div>

      <div className="flex gap-[24px] px-[32px] py-[0] items-center">
        <div className="hidden lg:block">About</div>
        <div className="hidden lg:block">World</div>
        <div className="hidden lg:block">Testimonials</div>
        <div className="hidden lg:block">Contact</div>
        <div className="text-gray-500 hidden lg:block">|</div>

        <div className="flex gap-8 items-center">
          <div className="hidden lg:block">
            <IoSunnyOutline />
          </div>
          <button className="w-[136px] h-[36px] bg-[#111827] text-white rounded-[10px] hidden lg:block">
            Download
          </button>
        </div>
        <div className="lg:hidden">
          <IoMenu />
        </div>
      </div>
    </div>
    );
}