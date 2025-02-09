import Image from "next/image"
import person from "/public/Person.png"
import { FaFacebookF } from "react-icons/fa"
import { FaDribbble } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaBehance } from "react-icons/fa"
import { FiDownload } from "react-icons/fi"
import Link from "next/link"

const socials = [
    {
        icon: <FaFacebookF className="text-[18px]" />,
        link: "www.facebook.com",
    },
    {
        icon: <FaDribbble className="text-[18px]" />,
        link: "www.dribbble.com",
    },
    {
        icon: <FaInstagram className="text-[18px]" />,
        link: "www.instagram.com",
    },
    {
        icon: <FaLinkedinIn className="text-[18px]" />,
        link: "www.linkedin.com",
    },
    {
        icon: <FaBehance className="text-[18px]" />,
        link: "www.behance.com",
    },
]
const Experience = () => {
    return (
        <div className="px-12">
            <div className="shadow-experience-double container mx-auto relative top-20 flex gap-32 px-28 py-20 rounded-2xl max-w-[1320px]c bg-white">
                {/* image-side */}
                <div className="w-[424px] h-[468px] bg-[#F0F1F3] overflow-visible rounded-[10px] relative z-10">
                    <div className="size-full bg-[#F0F1F3] overflow-visible rounded-[10px] absolute inset-0 z-10"></div>
                    <Image
                        src={person.src}
                        alt="person"
                        width={480}
                        height={483}
                        className="relative z-10 w-[460px] h-[463px] max-w-max max-h-max  rounded-[10px]"
                    />
                    <div className="absolute inset-0 w-[calc(100%+10px)] h-[calc(100%+10px)] rounded-[10px] bg-primary z-0 animate-shake"></div>
                    {/* socials */}
                    <div className="flex mx-auto bg-white p-3 shadow-md w-fit relative rounded bottom-7 z-10">
                        {socials.map((item) => (
                            <Link
                                key={item.link}
                                href={item.link}
                                className="size-12 rounded-[4px] text-primary bg-white transition hover:bg-primary hover:text-white text-center flex items-center justify-center"
                            >
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* info-side */}
                <div className="">
                    <h3 className="text-[38px] leading-[50px] mb-8">
                        I am Professional User Experience Designer
                    </h3>
                    <p className="text-lg text-[#556070] mb-4">
                        I design and develop services for customers specializing
                        in creating stylish, modern websites, web services and
                        online stores. My passion is to design digital user
                        experiences.
                    </p>
                    <p className="text-lg text-[#556070] mb-4">
                        Highly experienced in working with international teams
                        and clients. I design digital products with enterprises
                        and startups since 2023.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            className="inline-block rounded bg-primary px-6 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-hidden"
                            href="#"
                        >
                            My Project
                        </Link>

                        <a
                            className="flex items-center gap-3 rounded border border-current px-6 text-sm font-medium text-primary transition hover:scale-110 hover:shadow-xl focus:outline-hidden"
                            download="Abdalmoamen Abbara.pdf"
                            href={"Abdalmoamen Abbara.pdf"}
                        >
                            <FiDownload className="size-6" />
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
