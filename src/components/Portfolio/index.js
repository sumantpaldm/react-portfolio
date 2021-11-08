import React from "react";
import Project from "../Project";
import { portfolio } from "../Data/index.js";

const Portfolio = () => {
  return (
    <>
      <section>
        <h3 className="flex-row center my-3">Recent Projects</h3>
        <div className="flex-row center">
          {portfolio.map((item) => {
            return <Project data={item} key={item.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;