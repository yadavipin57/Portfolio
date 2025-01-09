import About from "./About";
import Banner from "./Banner";
import Projects from "./Projects";
import Skills from "./Skills";


const Body = () =>{
    return (
        <div className="mx-auto my-2 sm:my-8 h-fit">
            <Banner/>
            <Projects/>
            <Skills/>
            <About/>
        </div>
    )
}

export default Body;