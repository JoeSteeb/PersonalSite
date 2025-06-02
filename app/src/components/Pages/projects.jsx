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
  const [flipper, setFlipper] = useState(false);
  const [SelectedPage, setSelectedPage] = useState(() => null);
  const [title, setTitle] = useState(null);

  if (!sharedLayout) return null;

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

  const sharedTitle = sharedLayout === "mobile" ? mobileTitle : desktopTitle;

  const projectElements = projects.map((project) => (
    <div
      key={project.id}
      className="project"
      onClick={() => {
        setFlipper(true);
        setSelectedPage(() => project.page);
        setTitle(project.title);
      }}
    >
      <img className="picture-frame" src={project.image} alt={project.title} />
      <h3 className="pt-5">{project.title}</h3>
    </div>
  ));

  const goBack = () => {
    setFlipper(false);
    setSelectedPage(() => null);
    setTitle(null);
  };

  return (
    <PageGeneric
      title={
        <Stylebox
          content={
            <div className="titlebar">
              {flipper && (
                <button className="back-button" onClick={goBack}>
                  <FontAwesomeIcon icon={faPersonThroughWindow} />
                  {"  Back"}
                </button>
              )}
              <div className="title-wrapper">{title || sharedTitle}</div>
            </div>
          }
        />
      }
      content={
        <div className="project-view">
          {flipper && SelectedPage ? <SelectedPage /> : projectElements}
        </div>
      }
    />
  );
};
