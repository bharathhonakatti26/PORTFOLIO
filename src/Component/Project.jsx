import React from 'react';
import './Project.css';

const Project = (props) => {
    return (
        <div className="project-container">
            <div className="project-image">
                <img
                    src={props.image}
                    alt=""
                    className="project-thumbnail"
                />
            </div>
            <div className="project-details">
                <h2 className="project-title">{props.title}</h2>
                <p className="project-description">{props.description}</p>
            </div>
        </div>
    );
};

export default Project;
