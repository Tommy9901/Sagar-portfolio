import Image from "next/image";

const worksData = [
  {
    title: "Fiskil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "/skill.png",
    link: "/",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    title: "Fiskil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "/skill.png",
    link: "/",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    title: "Fiskil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "/skill.png",
    link: "/",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
];

export function Works() {
  return (
    <div className="py-16 px-4 md:py-24 md:px-20">
      <div className="mb-6">
        <div className="flex justify-center pb-4">
          <Tag name="Work" />
        </div>
        <div className="mb-6 text-center md:mb-12">
          Some of the noteworthy projects I have built:
        </div>
      </div>

      <div className="md:flex md:flex-col md:gap-4">
        {worksData.map((work, index) => (
          <WorkCard key={work.title} work={work} isReverse={index % 2 === 1} />
        ))}
      </div>
    </div>
  );
}

// md:flex  mb-8 md:py-24 md:px-20

function WorkCard({ isReverse = false, work }) {
  return (
    <div
      className={`md:flex  mb-8  ${
        isReverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:flex-1 justify-center p-8 bg-gray-100 rounded-lg md:p-12 ">
        <Image
          src="/skill.png"
          width={279}
          height={192}
          className="w-full rounded-lg shadow"
        />
      </div>

      <div className="flex flex-col p-8 rounded-lg  shadow-lg mb- md:flex-1">
        <div className="font-semibold text-lg text-gray-900 mb-6">{work.title}</div>
        <div className="mb-6 font-normal text-base text-gray-600">
          {work.desc}
        </div>
        <div className="flex flex-wrap gap-2 mb-6 ">
          {work.tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
        <div>
          <img src="/share-icon.png" alt="icon" />
        </div>
      </div>
    </div>
  );
}

function Tag({ name }) {
  return (
    <div className="px-5 py-1 rounded-xl bg-gray-200 text-sm font-medium text-gray-600">
      {name}
    </div>
  );
}

export default Tag;
