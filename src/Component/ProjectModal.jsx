import React from "react";
import "./ProjectModal.css";
import { IoClose } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import go_live from "../assets/Go_Live.png"

const ProjectModal = ({ project, onClose }) => {

    return (
        <div className="project-modal" data-aos="zoom-in">
            <div className="project-modal-content">
                <div className="close-button" onClick={onClose}><IoClose className="close-icon"/></div>
                <h2>{project.title}</h2>
                <p>{project.fullDescription}</p>
                {project.Technologies_Used && (
                    <div className="technologies">
                        <ul>
                            {project.Technologies_Used.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="project-links">
                    {project.live_link ? (
                        <a href={project.live_link} target="_blank" rel="noopener noreferrer">
                            <img src={go_live} className="go_live" alt="Go Live" />
                        </a>
                    ) : (
                        <span></span>
                    )}
                    {project.github_link && (
                        <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                            <FiGithub className="go_live" />
                        </a>
                    )}
                </div>
                {project.images && project.images.length > 0 && (
                    <div className="image-gallery">
                        {project.images.map((image, index) => {
                            return (
                                <img key={index} src={image} className=".project-modal-content-img" alt={`Project Image ${index + 1}`} />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;