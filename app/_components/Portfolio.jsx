"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
// import { type SanityDocument } from "next-sanity"

import { client } from "../../sanity/client"
import createImageUrlBuilder from "@sanity/image-url"
import Link from "next/link"
import Slider from "react-slick"

const options = { next: { revalidate: 30 } }

const Card = ({ img, category, title, text, url }) => (
    <div className="rounded-lg overflow-hidden text-left shadow-card ">
        {/* check image's shadow please */}
        <Image
            src={img}
            alt={title}
            width={424}
            height={248}
            className="shadow-mdd w-full"
        />
        <div className="p-8 xl:h-auto min-h-[257.6px]">
            <p className="text-xs text-tsecondary">{category}</p>
            <p className="text-lg mb-3">{title}</p>
            <p className="text-tsecondary mb-5">{text}</p>
            <Link
                className="group relative inline-flex items-center md:justify-start justify-center overflow-hidden rounded border md:w-fit w-full border-current px-8 py-3 text-primary focus:ring-3 focus:outline-none"
                href={url}
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
                    Case Study
                </span>
            </Link>
        </div>
    </div>
)
const Portfolio = () => {
    const [projects, setProjects] = useState([])
    const [showAll, setShowAll] = useState(false)
    const builder = createImageUrlBuilder(client)
    const fetch = async (all = false) => {
        const POSTS_QUERY = `*[_type=="project"]{projectname,category,link,poster,description} | order(_createdAt desc) ${all ? "" : "[0...6]"}`
        const projects = await client.fetch(POSTS_QUERY, {}, options)
        setProjects(projects)
    }
    useEffect(() => {
        fetch(showAll)
    }, [])

    const urlFor = (source) => builder.image(source)

    const toggleShowAll = () => setShowAll(true)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }
    return (
        <div
            id="portfolio"
            className="container mx-auto text-center py-20 px-12"
        >
            <h2 className="xl:text-5xl font-semibold md:text-3xl text-2xl xl:leading-[56px] mb-6">
                Portfolio
            </h2>
            <p className="text-tsecondary text-lg md:mb-16 mb-8 max-w-[650px] mx-auto">
                I love to create things, and I'm always working on something
                new! You can view some of my favorite projects below.
            </p>
            <div className="xl:grid grid-cols-3 gap-6 hidden">
                {projects.map((project) => {
                    return (
                        <div key={project.projectname}>
                            <Card
                                category={project.category}
                                img={urlFor(project.poster.asset._ref).url()}
                                title={project.projectname}
                                text={project.description}
                                url={project.link}
                            />
                        </div>
                    )
                })}
            </div>
            <div className="xl:hidden w-full">
                <Slider {...settings}>
                    {projects.map((project) => {
                        return (
                            <div className="p-2" key={project.projectname}>
                                <Card
                                    category={project.category}
                                    img={urlFor(
                                        project.poster.asset._ref
                                    ).url()}
                                    title={project.projectname}
                                    text={project.description}
                                    url={project.link}
                                />
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <button
                onClick={toggleShowAll}
                disabled={showAll}
                className="mt-12 inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white transition enabled:hover:scale-110 disabled:bg-opacity-60 hover:shadow-xl focus:ring-3 focus:outline-hidden"
            >
                More Project
            </button>
        </div>
    )
}

export default Portfolio
