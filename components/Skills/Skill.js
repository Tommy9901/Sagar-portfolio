import { SkillsIcon } from "./Skill.icon";


export function Skills(){
    return(
        <div className="py-16 px-4 md:py-24 md:px-20 dark:text-[#F9FAFB] dark:bg-[#030712]">
            <div className="text-center ">
                <div className="mx-auto py-1 px-4 inline-block  bg-gray-200 rounded-lg mb-4 text-sm font-medium text-gray-600 dark:bg-[#374151] dark:text-[#D1D5DB]">Skills</div>
                <div className="font-normal text-lg text-gray-600 mb-6">The skills, tools and technologies I am really good at:</div>
            </div>
            <div>
                <SkillsIcon />
            </div>
        </div>
    );
}