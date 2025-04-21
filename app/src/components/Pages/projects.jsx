import "./page.css";
import { useState, useEffect } from "react";
import { PageGeneric } from "./pageGeneric";
import projects from "./projectjson";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";
import { Stylebox } from "../stylebox";
import { useLayout } from "@/LayoutContext.jsx";

export const Projects = () => {
  const { sharedLayout } = useLayout();

  if (!sharedLayout) {
    return null;
  }

  const desktopTitle = (
    <div className="flex flex-row items-center">
      <div className="w-32 h-7 mr-5 bg-[url(/images/icons/titleCards/Projects-Left.svg)] bg-no-repeat" />
      Projects
      <div className="w-32 h-7 ml-5 bg-[url(/images/icons/titleCards/Projects-Right.svg)] bg-no-repeat" />
    </div>
  );

  const mobileTitle = (
    <div className="flex flex-row items-center">
      <div className="w-24 h-7 mr-1 bg-[url(/images/icons/titleCards/Projects-Left.svg)] bg-no-repeat" />
      Projects
      <div className="w-24 h-7 ml-1 bg-[url(/images/icons/titleCards/Projects-Right.svg)] bg-no-repeat bg-right-bottom" />
    </div>
  );

  const [pageTitle, setPageTitle] = useState(
    sharedLayout === "mobile" ? mobileTitle : desktopTitle
  );
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
      <h3 className="pt-5">{project.title}</h3>
    </div>
  ));

  useEffect(() => {
    setContent(projectElements);
    setPageTitle(sharedLayout === "mobile" ? mobileTitle : desktopTitle);
  }, [sharedLayout]);

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
