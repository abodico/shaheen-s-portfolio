"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

import { client } from "@/sanity/client"
import createImageUrlBuilder from "@sanity/image-url"
import Link from "next/link"
import Slider from "react-slick"

const POSTS_QUERY = `*[_type=="blog"]{poster,date,blogName,link}`
const options = { next: { revalidate: 30 } }

const Card = ({ img, date, title, url }) => (
    <Link
        href={url}
        className="rounded-lg block overflow-hidden text-left shadow-card "
    >
        {/* check image's shadow please */}
        <Image
            src={img}
            alt={title}
            width={424}
            height={248}
            className="shadow-mdd w-full"
        />
        <div className="p-6 ">
            <p className="text-sm text-tsecondary mb-2">{date}</p>
            <p className="text-lg text-[#333]">{title}</p>
        </div>
    </Link>
)
const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const builder = createImageUrlBuilder(client)
    const fetch = async () => {
        const blogs = await client.fetch(POSTS_QUERY, {}, options)
        setBlogs(blogs)
        console.log(blogs)
    }
    useEffect(() => {
        fetch()
    }, [])

    const urlFor = (source) => builder.image(source)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <div className="container mx-auto text-center py-20 px-12 overflow-x-hidden ">
            <h2 className="text-5xl leading-[56px] mb-6">My Blog</h2>
            <p className="text-tsecondary text-lg mb-16 max-w-[650px] mx-auto">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
            </p>
            <Slider {...settings}>
                {blogs.map((blog) => {
                    const blogImageUrl = blog.poster
                        ? urlFor(blog.poster)?.width(550).height(310).url()
                        : null
                    return (
                        <div className="px-3" key={blog.blogName}>
                            <Card
                                date={blog.date}
                                img={urlFor(blog.poster.asset._ref).url()}
                                title={blog.blogName}
                                url={blog.link}
                            />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Blog
