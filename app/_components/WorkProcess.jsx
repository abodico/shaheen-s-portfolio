import React from "react"
import { MdOutlineEventNote } from "react-icons/md"
import { FaChartBar } from "react-icons/fa"
import { FaPencilAlt } from "react-icons/fa"
import { FaLaptop } from "react-icons/fa"
const Card = ({ icon, title, text }) => (
    <div className="group hover:shadow-[32px_32px_124px_0px_#2B384C1A] rounded-xl bg-white p-8 hover:-translate-y-4 transition-all">
        {icon}
        <h3 className="text-xl mt-8 mb-3">{title}</h3>
        <p className="text-tsecondary leading-6">{text}</p>
    </div>
)
const WorkProcess = () => {
    return (
        <div className="bg-section-secondary w-full py-40 px-12">
            <div className="container mx-auto bg-section-secondary flex justify-between items-center">
                {/* info */}
                <div className=" max-w-[40%]">
                    <h2 className="text-5xl leading-[56px] mb-6">
                        Work Process
                    </h2>
                    <p className="text-2xl mb-4 text-tsecondary">
                        Our streamlined process ensures efficiency and
                        excellence at every stage.
                    </p>
                    <p className="text-2xl text-tsecondary">
                        We begin with in-depth research to understand your
                        goals, analyze data to craft a strategic plan, design
                        user-centric solutions that blend functionality with
                        aesthetics, and finally launch the project with
                        precision, ensuring a flawless experience.
                    </p>
                </div>
                {/* cards */}
                <div className="flex gap-6 max-w-[50%]">
                    <div className=" flex flex-col gap-6">
                        <Card
                            icon={
                                <MdOutlineEventNote className="text-primary size-[72px] p-5 rounded-md bg-biege bg-opacity-40 group-hover:bg-primary group-hover:text-white transition-all " />
                            }
                            text={
                                "Gather insights to understand your goals and audience and requirements."
                            }
                            title={"1. Research"}
                        />
                        <Card
                            icon={
                                <FaPencilAlt className="text-primary size-[72px] p-5 rounded-md bg-biege bg-opacity-40 group-hover:bg-primary group-hover:text-white transition-all " />
                            }
                            text={
                                "Create user-focused, visually appealing, and functional designs."
                            }
                            title={"3. Design"}
                        />
                    </div>
                    <div className="mt-6 flex flex-col gap-6">
                        <Card
                            icon={
                                <FaChartBar className="text-primary size-[72px] p-5 rounded-md bg-biege bg-opacity-40 group-hover:bg-primary group-hover:text-white transition-all " />
                            }
                            text={
                                "Collected data, identify challenges, and create a clear roadmap."
                            }
                            title={"2. Analyze"}
                        />
                        <Card
                            icon={
                                <FaLaptop className="text-primary size-[72px] p-5 rounded-md bg-biege bg-opacity-40 group-hover:bg-primary group-hover:text-white transition-all " />
                            }
                            text={
                                "Deliver and deploy with precision, ensuring a seamless experience."
                            }
                            title={"4. Launch"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkProcess
