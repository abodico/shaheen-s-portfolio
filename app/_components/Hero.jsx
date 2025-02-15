import Image from "next/image"
import React from "react"
import avatar from "../../public/Subtract.png"
import Counters from "./Counters"

const Hero = () => {
    return (
        <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-4 container mx-auto items-center 2xl:justify-evenly md:py-20 sm:py-14 py-10 2xl:px-12 lg:px-8 px-4 overflow-hidden">
            <div className="2xl:max-w-[750px] lg:max-w-full w-auto lg:text-left text-center lg:mt-0 mt-4 ">
                <h1 className="xl:text-7xl lg:text-5xl md:text-4xl text-3xl xl:leading-[84px] tracking-tight text-tprimary xl:mb-6 mb-3">
                    Hello, I'm
                    <br />
                    <span className="whitespace-nowrap">Mohammad Shaheen</span>
                </h1>
                <p className="text-tsecondary xl:text-2xl text-base xl:mb-6 mb-4">
                    I'm a UI/UX Designer and Product Designer designing digital
                    products with enterprises and startups since 2023. Highly
                    experienced in working with international teams and clients,
                    seeking a new challenge to user-centered designs that
                    enhance usability, engagement, and business goals.
                </p>
                <button className="inline-block rounded bg-primary lg:px-6 lg:py-3 px-12 py-4 sm:w-auto w-full lg:mb-16 mb-8 xl:text-xl lg:text-lg tracking-wider font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none ">
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
                    className="2xl:w-[467px] lg:w-[430px] md:w-96 sm:w-[330px] size-[236px] w- h-auto z-10 absolute lg:left-[46px] md:left-[40px] sm:left-6 left-5 md:bottom-[10px] bottom-1.5 "
                />
                <div className="2xl:size-[530px] lg:size-[490px] md:size-[441px] sm:size-[362px] size-[262px] rounded-full bg-avatar-gradient flex items-center justify-center animate-rotate">
                    <div className="2xl:size-[510px] lg:size-[470px] md:size-[421px] sm:size-[350px] size-[252px] bg-biege rounded-full "></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
