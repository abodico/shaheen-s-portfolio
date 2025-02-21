import Image from "next/image"
import person from "../../public/Person.png"
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
        <div id="about" className="2xl:px-12 lg:px-8 px-4">
            <div className="shadow-experience-double container mx-auto relative lg:top-20 top-10 flex lg:flex-row flex-col justify-between items-center 2xl:gap-32 xl:gap-24 md:gap-10 gap-16  xl:px-28 lg:px-12 px-4 lg:py-20 py-8 rounded-2xl bg-white">
                {/* image-side */}
                <div className="xl:w-[424px] xl:h-[468px] lg:w-[380px] lg:h-[400px] md:w-[330px] md:h-[350px] w-[270px] h-[290px] bg-[#F0F1F3] overflow-visible rounded-[10px] relative z-10">
                    <div className="size-full bg-[#F0F1F3] overflow-visible rounded-[10px] absolute inset-0 z-10"></div>
                    <Image
                        src={person.src}
                        alt="person"
                        width={480}
                        height={483}
                        className="relative z-10 xl:w-[460px] xl:h-[463px] lg:size-[400px] md:w-[350px] md:h-[350px] w-[295px]c h-[295px] bottom-1 md:bottom-0 max-w-max rounded-[10px]"
                    />
                    <div className="absolute inset-0 w-[calc(100%+10px)] h-[calc(100%+10px)] rounded-[10px] bg-primary z-0 animate-shake"></div>
                    {/* socials */}
                    <div className="flex mx-auto bg-white p-3 shadow-md w-fit relative rounded bottom-7 z-10">
                        {socials.map((item) => (
                            <Link
                                key={item.link}
                                href={item.link}
                                className="xl:size-12 md:size-10 size-8 rounded-[4px] text-primary bg-white transition hover:bg-primary hover:text-white text-center flex items-center justify-center"
                            >
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* info-side */}
                <div className="max-w-[536px] lg:text-left text-center">
                    <h3 className="xl:text-[38px] font-semibold md:text-3xl text-2xl text-tprimary md:leading-[50px] md:mb-8 mb-4">
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
                    <div className="flex md:flex-row flex-col justify-center lg:justify-start gap-4">
                        <Link
                            className="inline-block rounded md:w-auto w-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-hidden"
                            href="#portfolio"
                        >
                            My Projects
                        </Link>

                        <a
                            className="flex items-center gap-3 md:w-auto w-full justify-center rounded border border-current px-6 py-3 text-sm font-medium text-primary transition hover:scale-110 hover:shadow-xl focus:outline-hidden"
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
