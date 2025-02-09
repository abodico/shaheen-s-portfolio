import React from "react"
import logo from "../../public/footerLogo.svg"
import Image from "next/image"
import { FaRegCopyright } from "react-icons/fa"
const links = [
    "Home",
    "About",
    "Process",
    "Portfolio",
    "Blog",
    "Services",
    "Contact",
]
const Footer = () => {
    return (
        <footer className="px-12 bg-tprimary py-20">
            <div className="mx-auto container mt-20">
                <div className="flex items-center justify-between mb-10">
                    <a className="block" href="#">
                        <Image
                            src={logo.src}
                            alt="logo"
                            width={231}
                            height={56}
                        />
                    </a>

                    <nav aria-label="Global">
                        <ul className="flex items-center text-xl leading-6 text-white ">
                            {links.map((item) => (
                                <li key={item} className="">
                                    <a
                                        className="p-3"
                                        href={"#" + item.toLocaleLowerCase()}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <p className="text-white">
                        Copyright <FaRegCopyright className="inline" /> 2025
                        Shaheen.
                    </p>
                </div>
                <p className="text-center text-white">
                    Developed by{" "}
                    <a href="tel:+963936047684" className="underline">
                        Abdalmoamen Abbara
                    </a>{" "}
                    !
                </p>
            </div>
        </footer>
    )
}

export default Footer
