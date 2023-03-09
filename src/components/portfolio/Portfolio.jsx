import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  backendPortfolio,
  frontendPortfolio,
  fullstackPortfolio,
} from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "backend",
      title: "Backend",
    },
    {
      id: "frontend",
      title: "Frontend",
    },
    {
      id: "fullstack",
      title: "Fullstack",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "backend":
        setData(backendPortfolio);
        break;
      case "frontend":
        setData(frontendPortfolio);
        break;
      case "fullstack":
        setData(fullstackPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data?.map((data) => {
          return (
            <div key={data.id} className="item">
              <img src={data.img} alt="" />
              <h3>{data.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
