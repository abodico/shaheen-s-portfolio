import Image from "next/image"
import React from "react"
import avatar from "@/public/Subtract.png"
import Counters from "./Counters"

const Hero = () => {
    return (
        <div className="flex gap-12 container mx-auto items-center justify-evenly py-20 px-12 overflow-hidden">
            <div className="max-w-[750px]k">
                <h1 className="text-7xl leading-[84px] tracking-tight text-tprimary mb-6">
                    Hello, I'm
                    <br />
                    <span className="whitespace-nowrap">Mohammad Shaheen</span>
                </h1>
                <p className="text-tsecondary text-2xl mb-6">
                    I'm a UI/UX Designer and Product Designer designing digital
                    products with enterprises and startups since 2023. Highly
                    experienced in working with international teams and clients,
                    seeking a new challenge to user-centered designs that
                    enhance usability, engagement, and business goals.
                </p>
                <button className="inline-block rounded bg-primary px-6 py-3 mb-16 text-xl tracking-wider font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none ">
                    Say Hello!
                </button>
                <Counters />
            </div>
            <div className="relative">
                <Image
                    src={avatar.src}
                    alt="avatar"
                    width={462}
                    height={574}
                    className="w-[467px] h-[574px] z-10 absolute inset-0, left-[46px] bottom-[8px]"
                />
                <div className="size-[530px] rounded-full  bg-avatar-gradient flex items-center justify-center animate-rotate">
                    <div className="size-[510px] bg-biege rounded-full "></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
