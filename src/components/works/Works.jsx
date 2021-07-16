import "./works.scss"
import { useEffect, useState } from "react";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Allerscan App",
            desc:
              "Allerscan is an app that is able to read product ingredient labels and warn the users of possible dangers associated with the products, depending on allergens inputted into the system. ",
            img:
              "assets/allerscan.png",
          },
          {
            id: "2",
            icon: "./assets/globe.png",
            title: "StandardLife Home",
            desc:
              "Standard Life Home is a webpage for SL's clients to check on their insurance data (payment deadlines, insurance agent contact info., etc.). Developed during an internship program at Standard Life LTD",
            img:
              "assets/SLHome.png",
          },
          {
            id: "3",
            icon: "./assets/archive.png",
            title: "JournalArchive",
            desc:
              "The archive represents itself an internal website for the main office to search up crucial client data by the SL's insurance agents. Developed during an internship program at Standard Life LTD",
            img:
              "assets/JournalArchive.png",
          },
    ];

    const handleClick = (way) => {
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="works" id="works ">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
              {data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <a href="https://github.com/Zhalyn">Source</a>
                            </div>
                        </div>
                        <div className="right">
                            <img
                                src={d.img}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/arrow.png" className= "arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className= "arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    );
}
