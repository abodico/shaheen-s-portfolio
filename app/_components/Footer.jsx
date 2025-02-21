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
        <footer className="2xl:px-12 lg:px-8 px-4 bg-tprimary lg:py-20 py-10">
            <div className="mx-auto container mt-20">
                <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 items-center justify-between mb-10">
                    <a className="block" href="#">
                        <Image
                            src={logo.src}
                            alt="logo"
                            width={231}
                            height={56}
                        />
                    </a>

                    <nav aria-label="Global">
                        <ul className="grid lg:grid-cols-7 grid-cols-2 lg:gap-0 gap-8 items-center text-xl leading-6 text-white ">
                            {links.map((item, index) => (
                                <li
                                    key={item}
                                    className={
                                        "mx-auto hover:text-primary transition" +
                                        (index === 6
                                            ? " lg:col-span-1 col-span-2"
                                            : "")
                                    }
                                >
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
