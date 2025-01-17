import Image from "next/image";

export function AboutMe(){
    return (
        <div className="flex flex-col md:gap-12 py-16 px-4 gap-6 bg-gray-50 md:py-24 md:px-20 dark:text-gray-600 dark:bg-[#111827]">
            <div className="mx-auto py-1 px-4 bg-gray-200 rounded-lg inline-block text-sm font-medium text-gray-600 mb-5 dark:bg-[#374151] dark:text-[#D1D5DB]">About me</div>
            
            {/* <div className=" px-8 md:w-[280px] max-w-[400px] mx-auto">
                    <div className=" bg-gray-200 w-full mb-16 aspect-[5/6] relative md:top-[10%] md:left-[10%]">
                    <Image className="relative rigth-80 object-cover w-[90%] block md:w-full h-full bottom-[5%] md:bottom-[10%] right-[-5%] md:right-[10%]" src="/images/Pic.png " width={240} height={280}   />
                 </div> */}
            <div className="md:flex md:gap-[192px]">
                <div className=" mb-12 md:w-[330px] max-w[400px] mx-auto ">
                    <div className=" bg-gray-200 dark:bg-[#374151] w-full mb-16 aspect-[5/6] relative md:top-[10%] md:left-[10%]">
                        <Image className="relative rigth-80 object-cover w-[90%] block md:w-full h-full bottom-[5%] md:bottom-[10%] right-[-5%] md:right-[10%] border-[white] border-8 dark:border-[#111827]" src="/images/SagarRed.png" width={280} height={360}/>
                    </div>
                </div>
                <div className="flex flex-col gap-6 md:flex-1">
                    <div className="font-semibold text-2xl mb-[24px]">Curious about me? Here you have it:</div>
                    <div className="md:max-2-[584px] md:flex-1">
                        <div className="mb-4">
                            I'm a passionate, self-proclaimed designer who specializes in full
                            stack development (React.js & Node.js). I am very enthusiastic
                            about bringing the technical and visual aspects of digital
                            products to life. User experience, pixel perfect design, and
                            writing clear, readable, highly performant code matters to me.
                        </div>
                        <div className="mb-4">
                            I'm a passionate, self-proclaimed designer who specializes in full
                            stack development (React.js & Node.js). I am very enthusiastic
                            about bringing the technical and visual aspects of digital
                            products to life. User experience, pixel perfect design, and
                            writing clear, readable, highly performant code matters to me.
                        </div>
                        <div className="mb-4">
                            I am very much a progressive thinker and enjoy working on products
                            end to end, from ideation all the way to development.
                        </div>
                        <div className="mb-4">
                            When I'm not in full-on developer mode, you can find me hovering
                            around on twitter or on indie hacker, witnessing the journey of
                            early startups or enjoying some free time. You can follow me on
                            Twitter where I share tech-related bites and build in public, or
                            you can follow me on GitHub.
                        </div>
                        <div className="mb-4">Finally, some quick bits about me.</div>
                        <div className="flex gap-2.5">
                        <div className="mb-4">
                            <ul className="list-disc ml-4 mr-4">
                            <li>B.E. in Computer Engineering</li>
                            <li>Full time freelancer</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <ul className="list-disc">
                            <li>Avid learner</li>
                            <li>Aspiring indie hacker</li>
                            </ul>
                        </div>
                        </div>
                        <div className="mb-4">
                            One last thing, I'm available for freelance work, so feel free to
                            reach out and say hello! I promise I don't bite 😉
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}