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
    <div className="dark:text-[#D1D5DB] dark:bg-[#030712] md:flex md:flex-col md:gap-6">
      <div className="py- px-4 md:py-24 md:px-20 dark:text-[#D1D5DB] rounded-lg">
        <div className="mb-6">
          <div className="flex justify-center pb-4  py-16">
            <Tag className="dark:bg-[#374151] dark:text-[#D1D5DB] py-16" name="Work" />
          </div>
          <div className="mb-6 text-center md:mb-12">
            Some of the noteworthy projects I have built:
          </div>
        </div>


        <div className="dark:bg-[#030712]">
        <div className="md:flex md:flex-col md:gap-14 dark:text-[#F9FAFB] ">
          {worksData.map((work, index) => (
            <WorkCard key={work.title} work={work} isReverse={index % 2 === 1} />
          ))}
        </div>

        </div>
      </div>

    </div>
  );
}

// md:flex  mb-8 md:py-24 md:px-20

function WorkCard({ isReverse = false, work }) {
  return (
    <div
      className={`md:flex mb-8 dark:bg-[#111827] ${
        isReverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-[50%] md:rounded justify-center p-8 bg-gray-100 rounded-lg md:p-12 dark:bg-[#1F2937]">
        <Image
          src="/work.png"
          width={279}
          height={192}
          className="w-full rounded-lg shadow "
        />
      </div>

      <div className="flex flex-col p-8 rounded-lg  shadow-lg mb- md:w-[50%] md:rounded">
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
