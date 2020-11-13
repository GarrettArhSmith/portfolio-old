import React from 'react';

function Project(props) {
    const {title, description, imgUrl, link, tech} = props.project

    return (
        <div className="project">
            <img src={props?.project?.imgUrl} alt={title}/>
            <div className="container">
                <div className="info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <h4 className="tech" style={{border:"none", paddingLeft:0}}>Tech used:</h4>
                    {tech?.map(tech => <p className="tech">{tech}</p>)}
                    <a href={link}>Check It Out</a>
                </div>
            </div>
        </div>
    );
}

export default Project;