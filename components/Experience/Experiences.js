import { ExperienceCard } from "./ExperienceCard";

const cards = [
  {
    startDate: "Nov 2021 ",
    endDate: "Present",
    title: "Sr. Frontend Developer",
    listItem: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },

  {
    startDate: "Jul 2017",
    endDate: "Oct 2021",
    title: "Team Lead",
    listItem: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },

  {
    startDate: "Dec 2015 ",
    endDate: "May 2017",
    title: "Full Stack Developer",
    listItem: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

export function Experience() {
  return (
    <div className=" bg-gray-50 dark:text-[#F9FAFB] dark:bg-[#111827]">
      <div className="py-16 px-4 md:py-24 md:px-20 md:max-w-[896px] mx-auto">
        <div className="text-center">
          <div className="mx-auto inline-block px-5 py-1 bg-gray-200 rounded-lg mb-4 text-sm font-medium text-gray-600">
            Experience
          </div>
          <div className="font-normal text-lg text-gray-600 mb-6">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-12">
          {cards.map((card, index) => (
            <div key={index}>
              <ExperienceCard props={card} />
              {}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
