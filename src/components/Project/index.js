import React from "react";

const Project = (props) => {
  console.log(props);
  const { name, image, url, github } = props.data;
  return (
    <>
      <div className="card" style={{ width: 250, height: 250, margin: 5 }}>
        <a href={url} target="_blank" rel="noreferrer">
          <img className="card-img-top" src={image.default} alt="Card" />
          <div className="flex-row center">{name}</div>
          <div className="flex-row center">
            <a href={github} target="_blank" rel="noreferrer">
              Github
            </a>
          </div>
        </a>
      </div>
    </>
  );
};

export default Project;