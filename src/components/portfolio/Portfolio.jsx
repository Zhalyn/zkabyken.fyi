import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
} from "../../data"

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "fetured",
            title: "Press",
        },
        {
            id: "web",
            title: "Web Apps",
        },
        {
            id: "mobile",
            title: "Mobile Apps",
        },
    ];

    useEffect(()=>{

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
         
    },[selected])

    const hyperLink = (link) =>{
        let path = link;
        return window.location.assign(path);
    }

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                  <PortfolioList 
                    title={item.title} 
                    active={selected == item.id} 
                    setSelected={setSelected}
                    id={item.id}
                  />
                ))}
            </ul>
            <div className="container">
              {data.map(d=>(
                <div className="item">
                    <img 
                        src={d.img}
                        alt=""
                        onClick={() => hyperLink(d.link)}
                    />
                    <h3>{d.title}</h3>
                </div>
              ))}
            </div>
        </div>
    )
}
