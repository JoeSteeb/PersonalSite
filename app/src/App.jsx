import { useState, useEffect } from "react";
import * as taskbarBuilder from "./components/taskbarBuilder.jsx";
import { PageGeneric } from "./components/Pages/pageGeneric.jsx";
import { Projects } from "./components/Pages/projects.jsx";
import { Resume } from "./components/Pages/resume.jsx";
import { About } from "./components/Pages/about.jsx";
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
      Page: <About />,
      Icon: <FontAwesomeIcon icon={faAddressCard} />,
    },
    Resume: {
      Page: <Resume />,
      Icon: <FontAwesomeIcon icon={faFile} />,
    },
    Projects: {
      Page: <Projects />,
      Icon: <FontAwesomeIcon icon={faDiagramProject} />,
    },
  };

  const [taskbarState, setTaskbarState] = useState(null);
  const [pageContent, setpageContent] = useState(null);

  const setTaskbar = (taskbar, page) => {
    setTaskbarState(taskbar);
    setpageContent(page);
  };

  useEffect(() => {
    setTaskbar(taskbarBuilder.taskbar(pages, "About", setTaskbar), <About />);
  }, []);

  return (
    <>
      <div className="bg-[#ffffff] flex flex-row h-screen justify-center items-center gap-0 px-4">
        <div className="mainWrap">
          <div className=" bg-no-repeat h-full w-200 bg-right-bottom overflow-hidden bg-[url('/images/icons/background/Background_Left.svg')]" />
          <div className="mainContent">
            <div className="taskbar">
              <Stylebox
                content={
                  <div className="taskbar-content">
                    <img
                      className="picture-frame mt-5"
                      src={"/images/headshot.JPG"}
                    />
                    <h2 className="!mt-5 border-b-2 border-[#eda86e]">
                      Joseph Steeb
                    </h2>
                    <h3 className="pt-1">Software Developer</h3>
                    <div className="mt-5">{taskbarState}</div>
                  </div>
                }
              />
            </div>
            {pageContent}
          </div>
          <div className="h-full w-200 bg-no-repeat bg-left-bottom bg-[url('/images/icons/background/Background_Right.svg')] overflow-hidden" />
        </div>
      </div>
    </>
  );
}

export default App;
