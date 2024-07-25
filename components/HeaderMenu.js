import Link from "next/link";
import { useState } from "react";


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

export function HeaderMenu(){
    let [open, setOpen] = useState(true);

    function modeHandler(){
        document.documentElement.classList.toggle("dark")
        setDark(dark)
        unSetDark(!dark)
    }
    
    function openMenu(){
        setOpen(true);
    }
    
    function closeMenu(){
        setOpen(false);
    }
    
    return(
        <div className="flex flex-col justify-between  gap-4">
            <div>
                {navigation.map((nav) => (
                    <Link key={nav.link} href={nav.link} className="text-slate-400">
                        {nav.name}
                    </Link>
                ))}
            </div>

            <button onClick={openMenu}>Mobile Menu</button>

            <div>
                <div className={`fixed transition-all inset-0 bg-slate-500/90 ${open ? "block" : "hidden"}`} onClick={closeMenu}></div>
                <div className={`fixed top-0 bottom-0 transition-all w-64 text-black bg-white shadow-lg ${open ? "right-0" : "-right-full"}`}>
                    Content
                    <button onClick={closeMenu}>Close</button>
                </div>
            </div>


        </div>
    );
}