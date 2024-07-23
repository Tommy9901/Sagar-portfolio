

export function ExperienceCard({props}){
    const listItem = props.listItem;

    return(
        <div className="flex flex-col p-8 shadow-md rounded-lg ">
            <div className="mb-4">
                <img src="/upwork.png" alt="upwrk" />
            </div>
            <div className="mb-4 text-base font-normal text-gray-700">
                {props.startDate}-{props.endDate}
            </div>
            <div>
                <div className="mb-4 text-lg font-semibold">
                    {props.title}
                </div>
                <div>
                <ul className="list-disc ml-5 text-gray-600 font-normal text-base ">
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