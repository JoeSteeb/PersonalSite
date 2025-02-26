import { useState, useEffect } from "react";
import "./page.css";
import { PageGeneric } from "./pageGeneric";
import projects from "./projectjson";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
    const [flipper, setFlipper] = useState(false);
    const [content, setContent] = useState(null);
    const [title, setTitle] = useState("Projects");

    const projectElements = projects.map((project) => (
        <div key={project.id} className="project" onClick={() => {
            setFlipper(true);
            setTitle(project.title);
            setContent(project.page);
        }}>
            <img className="picture-frame" src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
        </div>
    ));

    useEffect(() => {
        setContent(projectElements);
    }, []);

    return (
        <PageGeneric 
            title={
                <div className="titlebar">
                    {flipper && (
                        <button className="back-button" onClick={() => {
                            setFlipper(false);
                            setContent(projectElements);
                            setTitle("Projects");
                        }}>
                            <FontAwesomeIcon icon={faPersonThroughWindow} />
                            {"  Back"}
                        </button>
                    )}
                    <div className="title-wrapper">
                        <h1>{title}</h1>
                    </div>
                </div>
            } 
            content={<div className="project-view">{content}</div>} 
        />
    );
};
