import Image from "next/image"
import React from "react"
import logo from "@/Logo.svg"

const links = [
    "Home",
    "About",
    "Process",
    "Portfolio",
    "Blog",
    "Services",
    "Contact",
]
const Header = () => {
    return (
        <header className="bg-white px-12 ">
            <div className="mx-auto container">
                <div className="flex py-5 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block" href="#">
                            <Image
                                src={logo.src}
                                alt="logo"
                                width={172}
                                height={56}
                            />
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center text-sm">
                                {links.map((item) => (
                                    <li key={item} className="">
                                        <a
                                            className="hover:bg-primary  rounded px-6 py-3 hover:shadow-double text-[#333] transition text-xl leading-6 hover:text-white"
                                            href={
                                                "#" + item.toLocaleLowerCase()
                                            }
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
