"use client"
import Link from "next/link"
import {
    FaBehance,
    FaDribbble,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa"
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi"
import { IoCallOutline } from "react-icons/io5"
import { TbSend2 } from "react-icons/tb"
import { client } from "../../sanity/client"

const Card = ({ title, link, icon, href }) => (
    <a
        href={href}
        className="group rounded-[10px] flex gap-3 w-full sm:p-6 px-2 py-4 hover:shadow-[0px_12px_64px_0px_#1C19191F] transition-all overflow-hidden"
    >
        {icon}
        <div className="max-w-[calc(100%-60px)]">
            <p className="text-tsecondary text-sm mb-1">{title}</p>
            <p className="text-tprimary font-bold overflow-hidden text-ellipsis md:text-base text-sm">
                {link}
            </p>
        </div>
    </a>
)
const contacts = [
    {
        icon: (
            <HiOutlineLocationMarker className="rounded transition size-12 p-3 text-primary bg-biege bg-opacity-40 group-hover:text-white group-hover:bg-primary" />
        ),
        title: "Address:",
        link: "Homs, Syria",
        href: "https://www.google.com/maps/place/Homs%E2%80%8E,+Syria/@34.73027,36.5946812,12z/data=!3m1!4b1!4m6!3m5!1s0x15230e9047c7c0fb:0xac367e06303788d0!8m2!3d34.7325256!4d36.713452!16zL20vMGs5cWY?entry=ttu&g_ep=EgoyMDI1MDIwNS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
        icon: (
            <HiOutlineMail className="rounded transition size-12 p-3 text-primary bg-biege bg-opacity-40 group-hover:text-white group-hover:bg-primary" />
        ),
        title: "My Email:",
        link: "mohammad.shaheen.963@gmail.com",
        href: "mailto:mohammad.shaheen.963@gmail.com",
    },
    {
        icon: (
            <IoCallOutline className="rounded transition size-12 p-3 text-primary bg-biege bg-opacity-40 group-hover:text-white group-hover:bg-primary" />
        ),
        title: "Call Me Now:",
        link: "+963 988 824 456",
        href: "tel:+963988824456",
    },
]

const socials = [
    {
        icon: <FaFacebookF className="text-[18px]" />,
        link: "https://www.facebook.com/963shaheen",
    },
    {
        icon: <FaDribbble className="text-[18px]" />,
        link: "https://dribbble.com/SHAHEEN-",
    },
    {
        icon: <FaInstagram className="text-[18px]" />,
        link: "https://www.instagram.com/mohammad.shaheen_",
    },
    {
        icon: <FaLinkedinIn className="text-[18px]" />,
        link: "https://www.linkedin.com/in/shaheen-",
    },
    {
        icon: <FaBehance className="text-[18px]" />,
        link: "https://www.behance.net/shaheen-",
    },
]

const Contact = () => {
    const createContactEntry = async (data, e) => {
        try {
            const result = await client.create(data)
            e.target.reset()
        } catch (error) {
            console.error("Error creating document:", error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            _type: "contact",
            name: e.target[0].value,
            email: e.target[1].value,
            phoneNumber: e.target[2].value,
            subject: e.target[3].value,
            message: e.target[4].value,
        }
        createContactEntry(data, e)
    }
    return (
        <div id="contact" className="bg-white 2xl:px-12 lg:px-8 px-4">
            <div className="bg-white container mx-auto rounded-2xl relative top-20 xl:p-[88px] lg:p-14 md:p-10 p-2 flex lg:flex-row flex-col items-center justify-between shadow-[0px_59px_124px_0px_#0000001F]">
                {/* left-side */}
                <div className="lg:max-w-[40%] ">
                    <h3 className="lg:text-4xl font-semibold md:text-3xl text-2xl mb-4 text-tprimary lg:text-left text-center">
                        Let's discuss your Project
                    </h3>
                    <p className="text-lg text-tsecondary xl:mb-9 lg:mb-6 mb-4 lg:text-left text-center w-fit px-1">
                        There are many variations of passages of Lorem Ipsum
                        available. but the majority have suffered alte.
                    </p>
                    <div className="flex flex-col gap-3 xl:mb-9 lg:mb-6 mb-4 ">
                        {contacts.map((contact) => (
                            <div key={contact.title}>
                                <Card
                                    href={contact.href}
                                    icon={contact.icon}
                                    link={contact.link}
                                    title={contact.title}
                                />
                            </div>
                        ))}
                    </div>
                    {/* socials */}
                    <div className="flex gap-3  bg-white w-fit mx-auto lg:mb-0 mb-10">
                        {socials.map((item) => (
                            <a
                                target="_blank"
                                key={item.link}
                                href={item.link}
                                className="size-12 rounded-[4px] shadow-card transition-all text-primary bg-white hover:bg-primary hover:text-white text-center flex items-center justify-center"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
                {/* form */}
                <div className="lg:max-w-[50%]">
                    <p className="text-tsecondary text-lg lg:text-left text-center lg:mb-12 mb-8">
                        There are many variations of passages of Lorem Ipsum
                        available. but the majority have suffered alte.
                    </p>
                    <form
                        action="#"
                        onSubmit={(e) => handleSubmit(e)}
                        className="space-y-4 text-lg text-tsecondary"
                    >
                        <div>
                            <label className="sr-only" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="w-full p-3 focus:outline-none transition-all outline-none border-b-2 border-[#E6E8EB] focus:border-[#A35C6A]"
                                placeholder="Name"
                                type="text"
                                id="name"
                                spellCheck="false"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full p-3 focus:outline-none transition-all outline-none border-b-2 border-[#E6E8EB] focus:border-[#A35C6A]"
                                    placeholder="Email address"
                                    type="email"
                                    id="email"
                                    spellCheck="false"
                                    required
                                />
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="phone">
                                    Phone
                                </label>
                                <input
                                    className="w-full p-3 focus:outline-none transition-all outline-none border-b-2 border-[#E6E8EB] focus:border-[#A35C6A]"
                                    placeholder="Phone Number"
                                    type="tel"
                                    id="phone"
                                    spellCheck="false"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="subject">
                                Subject
                            </label>
                            <input
                                className="w-full transition-all outline-none p-3 focus:outline-none border-b-2 border-[#E6E8EB] focus:border-[#A35C6A]"
                                placeholder="Subject"
                                type="text"
                                id="subject"
                                spellCheck="false"
                                required
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="message">
                                Message
                            </label>

                            <textarea
                                className="w-full p-3 focus:outline-none transition-all outline-none border-b-2 border-[#E6E8EB] focus:border-[#A35C6A]"
                                placeholder="Message"
                                rows="3"
                                id="message"
                                spellCheck="false"
                                required
                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="group relative md:w-auto w-full inline-flex justify-center items-center overflow-hidden rounded bg-primary px-6 py-3 tracking-widest text-white focus:ring-3 focus:outline-hidden"
                            >
                                <span className="absolute -end-full transition-all group-hover:end-4 mb-1">
                                    <TbSend2 />
                                </span>

                                <span className="text-sm font-medium transition-all group-hover:me-4">
                                    submit
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
