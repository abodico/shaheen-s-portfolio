"use client"
import React from "react"
import _1 from "../../public/icons/Rectangle 2848.svg"
import _2 from "../../public/icons/Rectangle 2849.svg"
import _3 from "../../public/icons/Rectangle 2850.svg"
import _4 from "../../public/icons/Rectangle 2851.svg"
import _5 from "../../public/icons/Rectangle 2852.svg"
import _6 from "../../public/icons/Rectangle 2853.svg"
import _7 from "../../public/icons/Rectangle 2854.svg"
import _8 from "../../public/icons/Rectangle 2855.svg"
import _9 from "../../public/icons/Rectangle 2856.svg"
import _10 from "../../public/icons/Rectangle 2857.svg"
import _11 from "../../public/icons/Rectangle 2858.svg"
import _12 from "../../public/icons/Rectangle 2859.svg"
import _13 from "../../public/icons/Rectangle 2860.svg"
import _14 from "../../public/icons/Rectangle 2861.svg"
import _15 from "../../public/icons/Rectangle 2862.svg"
import _16 from "../../public/icons/Rectangle 2863.svg"
import _17 from "../../public/icons/Rectangle 2864.svg"
import Image from "next/image"
import Slider from "react-slick"

const icons = [
    _1,
    _2,
    _3,
    _4,
    _5,
    _6,
    _7,
    _8,
    _9,
    _10,
    _11,
    _12,
    _13,
    _14,
    _15,
    _16,
    _17,
]
const Icons = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 17,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1535,
                settings: {
                    slidesToShow: 14,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 12,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
        ],
    }
    return (
        <div className="container mx-auto lg:px-12 px-4 flex gap-3.5 justify-center relative z-10">
            <div className="w-full">
                <Slider {...settings}>
                    {icons.map((icon) => (
                        <Image
                            key={icon.src}
                            src={icon.src}
                            alt="icon"
                            width={70}
                            height={70}
                            className="md:h-[70px] h-12 w-auto"
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Icons
