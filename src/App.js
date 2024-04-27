import { useEffect } from "react";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
    useEffect(() => {
        Aos.init({
            duration: 1800,
            easing: "ease-in-out",
            disable: "mobile",
            once: true,
            mirror: true,
        });
    }, []);

    return (
        <div className='flex-grow max-w-7xl mx-auto '>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
