

export function ExperienceCard({props}){
    const listItem = props.listItem;

    return(
        <div className="p-8 shadow-md rounded-lg lg:mx-auto lg:flex lg:justify-between dark:bg-[#1f2937]">
            <div className="mb-4 lg:order-1">
                <img src="/upwork.png" alt="upwrk" />
            </div>
            <div className="mb-4 text-base font-normal text-gray-700 lg:order-3">
                {props.startDate}-{props.endDate}
            </div>
            <div className="lg:order-2">
                <div className="mb-4 text-lg font-semibold lg:order-3">
                    {props.title}
                </div>
                <div className="lg:max-w-[384px]">
                    <ul className="list-disc ml-5 text-gray-600 font-normal text-base">
                        {listItem.map((list, index) => (
                            <li className="mb-2" key={index}>{list}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;