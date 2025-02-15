import React from "react"

const Card = ({ title, text }) => (
    <div className="hover:border-l-[5px] hover:translate-x-4 transition-all bg-white border-l-primary rounded-md shadow-card p-8">
        <h3 className="text-tprimary">{title}</h3>
        <p className="text-tsecondary">{text}</p>
    </div>
)
const data = [
    {
        title: "User Experience (UX) Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
    {
        title: "User Interface (UI) Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
    {
        title: "Visual Identity Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
]
const WhatIDo = () => {
    return (
        <div className="bg-section-secondary py-20 px-12">
            <div className="container mx-auto flex items-center justify-between ">
                <div className="max-w-[40%]">
                    <h2 className="text-5xl text-[#333] mb-6">What I do?</h2>
                    <p className="text-tsecondary text-lg mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla purus arcu, varius eget velit non, laoreet
                        imperdiet orci. Mauris ultrices eget lorem ac
                        vestibulum. Suspendis imperdiet,
                    </p>
                    <p className="text-tsecondary text-lg ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla purus arcu, varius eget velit non.
                    </p>
                    <button className="mt-12 inline-block rounded bg-primary px-6 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden">
                        Say Hello!
                    </button>
                </div>
                <div className="flex flex-col gap-6 max-w-[50%]">
                    {data.map((item) => (
                        <div key={item.title}>
                            <Card title={item.title} text={item.text} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhatIDo
