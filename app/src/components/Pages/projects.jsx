import { useState, useEffect } from "react";
import "./page.css";
import { PageGeneric } from "./pageGeneric";
import projectjson from "./projects.json";

export const Projects = () => {
    const [flipper, setFlipper] = useState(false);
    const [content, setContent] = useState(null);
    const [title, setTitle] = useState("Projects");

    const projects = projectjson.map((project, index) => (
        <div key={index} className="project" onClick={() => {
            setFlipper(true);
            setTitle(project.title);
            setContent(<div>Fullscreen</div>);
        }}>
            {/* <img src={project.image} alt={project.title} /> */}
            <h2>{project.title}</h2>
        </div>
    ));

    useEffect(() => {
        setContent(projects);
    }, []);

    return (
        <PageGeneric 
            title={
            <div className="titlebar">
            {flipper? <button className="back-button" onClick={()=>{
                setFlipper(false);
                setContent(projects);
                setTitle("Projects");
            }}>{"\<- Back"}</button> : null}
            <div className="title-wrapper"><h1>{title}</h1></div></div>} 
            content={
                <div className="project-view">
                    {content}
                </div>
            } 
        />
    );
};
