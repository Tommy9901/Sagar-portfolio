import Image from "next/image";


export function Works(){
    return(
        <div className="py-16 px-4">
            <div className="mb-6">
                <div className="flex justify-center pb-4">
                    <Tag name="Work" />
                </div>
                <div className="mb-6">Some of the noteworthy projects I have built:</div>
            </div>

            

            <WorkCard />
            <WorkCard />
            <WorkCard />

        </div>
    );
}



function WorkCard(){
    return(
        <div className="">
             <div className="flex justify-center p-8 bg-gray-100 rounded-lg">
                <Image src="/Skill.png" width={279} height={192}/>
            </div>

            <div className="p-8 rounded-lg  shadow-lg mb-6">
                <div className="font-semibold text-lg text-gray-900 mb-6">Fiskil</div>
                <div className="mb-6 font-normal text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</div>
                <div className="flex flex-wrap gap-2 mb-6">
                    <Tag name= "React"/>
                    <Tag name= "Next.js"/>
                    <Tag name= "Typescript"/>
                    <Tag name= "Nest.js"/>
                    <Tag name= "PostgreSQL"/>
                    <Tag name= "Tailwindcss"/>
                    <Tag name= "Figma"/>
                    <Tag name= "Cypress"/>
                    <Tag name= "Storybook"/>
                    <Tag name= "Git"/>
                </div>

                <div>
                    <img src="/share-icon.png" alt="icon" />
                </div>
            </div>
        </div>
    );
}

function Tag({name}){
    return(
        <div className="px-5 py-1 rounded-xl bg-gray-200 text-sm font-medium text-gray-600">{name}</div>
    );
}

export default Tag;