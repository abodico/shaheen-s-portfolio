import Header from "./_components/Header"
import Hero from "./_components/Hero"
import Icons from "./_components/Icons"
import Experience from "./_components/Experience"
import WorkProcess from "./_components/WorkProcess"
import Portfolio from "./_components/Portfolio"
import ProjectIdea from "./_components/ProjectIdea"
import Blog from "./_components/Blog"
import WhatIDo from "./_components/WhatIDo"
import Contact from "./_components/Contact"
import Footer from "./_components/Footer"

export default function Home() {
    return (
        <div className="bg-white ">
            <Header />
            <Hero />
            <Icons />
            <Experience />
            <WorkProcess />
            <Portfolio />
            <ProjectIdea />
            <Blog />
            <WhatIDo />
            <Contact />
            <Footer />
        </div>
    )
}
