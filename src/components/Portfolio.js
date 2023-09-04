import React, { useState } from "react";
import Modal from "./Modal";

const Portfolio = ({ resumeData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [portfolioObject, setPortfolioObject] = useState({});

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleClick = (obj) => {
    window.open(obj.github)
  };

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Personal Projects</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {resumeData.portfolio.map((item, index, array) => {
              return (
                <div className="columns portfolio-item" key={index}>
                  <div className="item-wrap">
                    <img
                      src={`${item.imgurl}`}
                      alt={item.name}
                      className="item-img"
                    />
                    <div className="overlay" onClick={() => handleClick(item)}>
                      <div className="portfolio-item-meta">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <p><br></br>Click to view the code on Github.</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {isModalOpen ? (
              <Modal item={portfolioObject} handleClose={handleClose} />
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;