import { FaRegCopyright } from "react-icons/fa";

export function FooterNav(){
    return(
        <div className="flex items-center justify-between px-2.5">
            <FaRegCopyright />
            <div className="py-6 font-normal text-sm text-gray-600">2023 | Designed and coded with ❤️️ by Sagar Shah</div>
        </div>
    );
}