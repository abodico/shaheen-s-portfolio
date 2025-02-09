"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
// import { type SanityDocument } from "next-sanity"

import { client } from "../../sanity/client"
import createImageUrlBuilder from "@sanity/image-url"
import Link from "next/link"

const POSTS_QUERY = `*[_type=="project"]{projectname,category,link,poster,description}`
const options = { next: { revalidate: 30 } }

const Card = ({ img, category, title, text, url }) => (
    <div className="rounded-lg overflow-hidden text-left shadow-card">
        {/* check image's shadow please */}
        <Image
            src={img}
            alt={title}
            width={424}
            height={248}
            className="shadow-mdd w-full"
        />
        <div className="p-8 ">
            <p className="text-xs text-tsecondary">{category}</p>
            <p className="text-lg mb-3">{title}</p>
            <p className="text-tsecondary mb-5">{text}</p>
            <Link
                className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-primary focus:ring-3 focus:outline-hidden"
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
    const builder = createImageUrlBuilder(client)
    const fetch = async () => {
        const projects = await client.fetch(POSTS_QUERY, {}, options)
        setProjects(projects)
        console.log(projects)
    }
    useEffect(() => {
        fetch()
    }, [])

    const urlFor = (source) => builder.image(source)

    return (
        <div className="container mx-auto text-center py-20 px-12">
            <h2 className="text-5xl leading-[56px] mb-6">Portfolio</h2>
            <p className="text-tsecondary text-lg mb-16 max-w-[650px] mx-auto">
                I love to create things, and I'm always working on something
                new! You can view some of my favorite projects below.
            </p>
            <div className="grid grid-cols-3 gap-6">
                {projects.map((project) => {
                    const projectImageUrl = project.poster
                        ? urlFor(project.poster)?.width(550).height(310).url()
                        : null
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
            <button className="mt-12 inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden">
                More Project
            </button>
        </div>
    )
}

export default Portfolio
