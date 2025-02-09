import React from "react"

const ProjectIdea = () => {
    return (
        <div className="bg-tprimary py-24 px-12">
            <div className="container mx-auto text-center ">
                <h2 className="text-white text-5xl">
                    Do you have Project Idea?
                    <br /> Let's discuss your project!
                </h2>
                <p className="text-[#A5ACB5] text-lg my-8">
                    There are many variations of passages of Lorem Ipsum
                    available, <br /> but the majority have suffered alteration.
                </p>
                <a
                    className="group relative inline-flex items-center overflow-hidden rounded bg-primary px-8 py-3 text-white focus:ring-3 focus:outline-hidden"
                    href="#"
                >
                    <span className="absolute -end-full transition-all group-hover:end-4">
                        <svg
                            className="size-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>

                    <span className="text-sm font-medium transition-all group-hover:me-4">
                        Let's work Together
                    </span>
                </a>
            </div>
        </div>
    )
}

export default ProjectIdea
