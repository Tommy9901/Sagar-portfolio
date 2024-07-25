import { useState } from "react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Skills } from "./Skills/Skill";

const navigation = [
  {
    name: "About",
    link: "/about",
  },

  {
    name: "Work",
    link: "/work",
  },

  {
    name: "Testimonials",
    link: "/testimonials",
  },

  {
    name: "Contact",
    link: "/contact",
  },
];

export function Nav() {
  // let [open, isDark] = useState(true);
  // let [dark, setOpen] = useState(false);

  const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);

  function modeHandler() {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  }

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
    console.log("working");
  }

  return (
    <div className="flex justify-between px-4 md:px-20 dark:text-[#F9FAFB] dark:bg-[#030712]">
      <div className="font-[700] text-3xl ">{`<SS />`}</div>

      <div className="flex gap-[24px] py-[0] items-center">
        <div className="hidden lg:block">About</div>
        <div className="hidden lg:block">World</div>
        <div className="hidden lg:block">Testimonials</div>
        <div className="hidden lg:block">Contact</div>
        <div className="text-gray-500 hidden lg:block">|</div>

        <div className="flex gap-8 items-center">
          <div className="hidden lg:block">
            <IoSunnyOutline onClick={modeHandler} />
          </div>
          <button className="w-[136px] h-[36px] bg-[#111827] text-white rounded-[10px] hidden lg:block">
            Download
          </button>
        </div>

        <div className="flex justify-between  gap-4 lg:hidden z-10">
          <button onClick={openMenu}>
            <IoMdMenu />
          </button>

          <div>
            <div
              className={`fixed transition-all inset-0 bg-slate-500/90 ${
                open ? "block" : "hidden"
              }`}
              onClick={closeMenu}
            ></div>
            <div
              className={`fixed top-0 bottom-0 transition-all w-64 text-black bg-white shadow-lg ${
                open ? "right-0" : "-right-full"
              }`}
            >
              <div className="flex items-center justify-between p-4">
                <div className="text-2xl font-bold">{`<SS />`}</div>
                <button onClick={closeMenu}>
                  <IoMdClose />
                </button>
              </div>
              <hr className="mb-4" />

              <div className="flex flex-col ml-4 gap-4">
                {navigation.map((nav) => (
                  <Link
                    key={nav.link}
                    href={nav.link}
                    className="text-gray-600 font-medium text-base"
                  >
                    {nav.name}
                  </Link>
                ))}
              </div>
              <hr className="my-4" />
              <div className="flex flex-col gap-4 mx-3 text-gray-600 font-medium text-base">
                <div className="flex items-center justify-between mr-3">
                  <div>Switch Theme</div>
                  <IoSunnyOutline />
                </div>
                <button className=" py-2.5 bg-gray-900 text-gray-50 rounded-lg text-sm font-medium">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
