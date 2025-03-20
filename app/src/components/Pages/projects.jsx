import "./page.css";
import { useState, useEffect } from "react";
import { PageGeneric } from "./pageGeneric";
import projects from "./projectjson";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";
import { Stylebox } from "../stylebox";

export const Projects = () => {

  const pageTitle = <div className="flex flex-row items-center">
    <div className="w-30 h-7 mr-5 bg-[url(/images/icons/titleCards/Projects-Left.svg)] bg-no-repeat"/>
    Projects
    <div className="w-30 h-7 ml-5 bg-[url(/images/icons/titleCards/Projects-Right.svg)] bg-no-repeat"/>
  </div>;

  const [flipper, setFlipper] = useState(false);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(pageTitle);

  const projectElements = projects.map((project) => (
    <div
      key={project.id}
      className="project"
      onClick={() => {
        setFlipper(true);
        setTitle(project.title);
        setContent(project.page);
      }}
    >
      <img className="picture-frame" src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
    </div>
  ));

  useEffect(() => {
    setContent(projectElement);
  }, []);

  return (
    <PageGeneric
      title={
        <Stylebox
          content={
            <div className="titlebar">
              {flipper && (
                <button
                  className="back-button"
                  onClick={() => {
                    setFlipper(false);
                    setContent(projectElements);
                    setTitle(pageTitle);
                  }}
                >
                  <FontAwesomeIcon icon={faPersonThroughWindow} />
                  {"  Back"}
                </button>
              )}
              <div className="title-wrapper">{title}</div>
            </div>
          }
        />
      }
      content={<div className="project-view">{content}</div>}
    />
  );
};
