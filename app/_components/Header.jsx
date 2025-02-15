"use client"
import Image from "next/image"
import React, { useState } from "react"
import logo from "../../public/Logo.svg"
import { GiHamburgerMenu } from "react-icons/gi"

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
    const [toggleMenu, setToggleMenu] = useState(false)
    const onToggleMenu = () => setToggleMenu((prev) => !prev)
    return (
        <header className="bg-white px-12 ">
            <div className="mx-auto container">
                <div className="flex py-5 items-center justify-between ">
                    <a className="md:block hidden" href="#">
                        <Image
                            src={logo.src}
                            alt="logo"
                            width={172}
                            height={56}
                            className="lg:w-44 w-36 h-auto"
                        />
                    </a>
                    <GiHamburgerMenu
                        onClick={onToggleMenu}
                        className="cursor-pointer md:hidden"
                    />
                    <div
                        className={`${toggleMenu ? "" : "md:translate-x-0 -translate-x-full"} left-0 md:inset-0 md:shadow-none shadow-double transition-transform md:h-auto h-full md:p-0 p-4 py-2.5 z-10 block md:relative absolute  top-0 bg-red-300c bg-biege md:bg-white`}
                    >
                        <nav aria-label="Global">
                            <ul className="flex md:flex-row flex-col md:gap-0 gap-4 items-center text-sm">
                                <li className="flex gap-8 items-center justify-evenly md:hidden">
                                    <Image
                                        src={logo.src}
                                        alt="logo"
                                        width={172}
                                        height={56}
                                        className="w-32 h-auto"
                                    />
                                    <p
                                        onClick={onToggleMenu}
                                        className="cursor-pointer "
                                    >
                                        X
                                    </p>
                                </li>
                                {links.map((item) => (
                                    <li
                                        key={item}
                                        onClick={() => setToggleMenu(false)}
                                        className=""
                                    >
                                        <a
                                            className="hover:bg-primary rounded xl:px-6 lg:px-4 px-2.5 py-3 hover:shadow-double text-[#333] transition xl:text-xl lg:text-lg md:text-base text-lg leading-6 hover:text-white"
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
