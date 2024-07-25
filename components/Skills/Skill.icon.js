
const items = [
    {picture: "Javascript.png", name: "Javascript"},
    {picture: "Typescript.png", name: "Typescript"},
    {picture: "React.png", name: "React"},
    {picture: "Next.js.png", name: "Next.js"},
    {picture: "Node.js.png", name: "Node.js"},
    {picture: "Express.js.png", name: "Express.js"},
    {picture: "Nest.js.png", name: "Nest.js"},
    {picture: "Socket.io.png", name: "Socket.js"},
    {picture: "PostgreSQL.png", name: "PostgreSQL"},
    {picture: "MongoDB.png", name: "MongoDB"},
    {picture: "Sass.png", name: "Sass"},
    {picture: "Tailwindcss.png", name: "Tailwindcss"},
    {picture: "Figma.png", name: "Figma"},
    {picture: "Cypress.png", name: "Cypress"},
    {picture: "Storybook.png", name: "Storybook"},
    {picture: "Git.png", name: "Git"},
];


export function SkillsIcon(){
    return(
    <div>
        <div className="grid grid-cols-3 gap-8 md:grid-cols-8 md:mt-12">
        {items.map((item, index) => (
            <div >
                <div className="grid justify-center items-center mb-[7px] ">
                <img src={`/skills/${item.picture}`} />
                </div>
                <h2 className="text-center text-gray-600 text-base font-normal">
                   {item.name} 
                </h2>
            </div>
        ))}
        </div>
    </div>
    );
}

