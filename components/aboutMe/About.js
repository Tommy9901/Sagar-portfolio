import Image from "next/image";

export function AboutMe(){
    return (
        <div className="flex flex-col gap-12 py-16 px-4 gap-6 bg-gray-50">
            <div className="mx-auto py-1 px-4 bg-gray-200 rounded-lg inline-block text-sm font-medium text-gray-600">About me</div>
            
            <div>
                <div className="flex justify-center mb-12">
                    <Image src="/images/About.png" width={280} height={360}/>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="font-semibold text-2xl mb-[24px]">Curious about me? Here you have it:</div>
                    <div className="flex flex-col gap-4 font-">
                        <div>
                            I'm a passionate, self-proclaimed designer who specializes in full
                            stack development (React.js & Node.js). I am very enthusiastic
                            about bringing the technical and visual aspects of digital
                            products to life. User experience, pixel perfect design, and
                            writing clear, readable, highly performant code matters to me.
                        </div>
                        <div>
                            I'm a passionate, self-proclaimed designer who specializes in full
                            stack development (React.js & Node.js). I am very enthusiastic
                            about bringing the technical and visual aspects of digital
                            products to life. User experience, pixel perfect design, and
                            writing clear, readable, highly performant code matters to me.
                        </div>
                        <div>
                            I am very much a progressive thinker and enjoy working on products
                            end to end, from ideation all the way to development.
                        </div>
                        <div>
                            When I'm not in full-on developer mode, you can find me hovering
                            around on twitter or on indie hacker, witnessing the journey of
                            early startups or enjoying some free time. You can follow me on
                            Twitter where I share tech-related bites and build in public, or
                            you can follow me on GitHub.
                        </div>
                        <div>Finally, some quick bits about me.</div>
                        <div className="flex gap-2.5">
                        <div className="">
                            <ul className="list-disc ml-4 mr-4">
                            <li>B.E. in Computer Engineering</li>
                            <li>Full time freelancer</li>
                            </ul>
                        </div>

                        <div>
                            <ul className="list-disc">
                            <li>Avid learner</li>
                            <li>Aspiring indie hacker</li>
                            </ul>
                        </div>
                        </div>
                        <div>
                            One last thing, I'm available for freelance work, so feel free to
                            reach out and say hello! I promise I don't bite 😉
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}