import { useState, useEffect } from "react";
import * as taskbarBuilder from "./components/taskbarBuilder.jsx";
import { PageGeneric } from "./components/Pages/pageGeneric.jsx";
import { Projects } from "./components/Pages/projects.jsx";
import { Resume } from "./components/Pages/resume.jsx";
import { Stylebox } from "./components/stylebox.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import "./components/Pages/page.css";

function App() {
  const pages = {
    About: {
      Page: (
        <PageGeneric
          title={
            <Stylebox content={<h1 className="title-wrapper">About</h1>} />
          }
          content={"Test"}
        />
      ),
      Icon: <FontAwesomeIcon icon={faAddressCard} />,
    },
    Projects: {
      Page: <Projects />,
      Icon: <FontAwesomeIcon icon={faDiagramProject} />,
    },
    Resume: {
      Page: <Resume />,
      Icon: <FontAwesomeIcon icon={faFile} />,
    },
  };

  const [taskbarState, setTaskbarState] = useState(null);
  const [pageContent, setpageContent] = useState(null);

  const setTaskbar = (taskbar, page) => {
    setTaskbarState(taskbar);
    setpageContent(page);
  };

  useEffect(() => {
    setTaskbar(
      taskbarBuilder.taskbar(pages, "About", setTaskbar),
      <PageGeneric
        title={<Stylebox content={<h1 className="title-wrapper">About</h1>} />}
        content={"Test"}
      />
    );
  }, []);

  return (
    <>
      <div className="absolute right-0 top-0 h-[100%] w-[100%] bg-white"/>
      <div className="absolute right-0 top-0 h-[100%] w-[50%] bg-no-repeat bg-right bg-[url('public/images/icons/background/Background_Right.svg')]"/>
      <div className="absolute left-0 top-0 h-[100%] w-[50%] bg-no-repeat bg-[url('public/images/icons/background/Background_Left.svg')]"/>
      <div className="mainWrap" >
        <div className="background-right"/>
        <div className="mainContent">
          <div className="taskbar">
            <Stylebox
              content={
                <div className="taskbar-content">
                  <img className="picture-frame mt-5" src={"/images/headshot.JPG"} />
                  <h2 className="!mt-5 border-b-2 border-[#eda86e]">Joseph Steeb</h2>
                  <h3 className="pt-1">Software Developer</h3>
                  <div className="mt-5">
                    {taskbarState}
                  </div>
                </div>
              }
            />
          </div>
          {pageContent}
        </div>
      </div>
    </>
  );
}

export default App;
