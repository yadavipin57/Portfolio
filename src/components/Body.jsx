import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import { ToastContainer } from 'react-toastify';


const Body = () =>{
    return (
        <div className="mx-auto my-2 sm:my-8 h-fit">
            <Banner/>
            <Projects/>
            <Skills/>
            <About/>
            <Education/>
            <Contact/>
            <Footer/>
            <ToastContainer position="bottom-right" autoClose={1000} />
        </div>
    )
}

export default Body;