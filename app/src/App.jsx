import { useState, useEffect } from "react";
import * as taskbarBuilder from "./components/taskbarBuilder.jsx";
import { PageGeneric } from "./components/Pages/pageGeneric.jsx";
import { Projects } from "./components/Pages/projects.jsx";
import { Stylebox } from "./components/stylebox.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  const pages = {
    About: {
      Page: (
        <PageGeneric
          title={<Stylebox content={<h1>About</h1>} />}
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
      Page: (
        <PageGeneric
          title={<Stylebox content={<h1>Resume</h1>} />}
          content={"Test"}
        />
      ),
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
        title={<Stylebox content={<h1>About</h1>} />}
        content={"Test"}
      />
    );
  }, []);

  return (
    <>
      <div className="mainWrap">
        <div className="mainContent">
          <div className="taskbar">
            <Stylebox
              content={
                <>
                  <img className="picture-frame" src={"/images/headshot.JPG"} />
                  <h2>Joseph Steeb</h2>
                  <h3>Software Developer</h3>
                  {taskbarState}
                </>
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
