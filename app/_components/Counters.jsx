"use client"
import CountUp from "react-countup"

const countersData = [
    {
        num: 2,
        title: " Years",
        subtitle: "Experience",
    },
    {
        num: 10,
        title: "+",
        subtitle: "Project Completed",
    },
    {
        num: 5,
        title: "+",
        subtitle: "Happy Client",
    },
]
const Counters = () => {
    return (
        <div className="grid grid-cols-3 gap-1 w-[648px] rounded-md overflow-hidden">
            {countersData.map((item) => (
                <div
                    key={item.subtitle}
                    className="text-tsecondary text-center bg-biege bg-opacity-40 py-4"
                >
                    <p className="text-3xl">
                        <CountUp end={+item.num} start={0} duration={5} />
                        {item.title}
                    </p>
                    <p className="">{item.subtitle}</p>
                </div>
            ))}
        </div>
    )
}

export default Counters
