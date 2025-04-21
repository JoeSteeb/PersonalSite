import { useState, useEffect } from "react";
import * as taskbarBuilder from "./components/taskbarBuilder.jsx";
import { PageGeneric } from "./components/Pages/pageGeneric.jsx";
import { Projects } from "./components/Pages/projects.jsx";
import { Resume } from "./components/Pages/resume.jsx";
import { About } from "./components/Pages/about.jsx";
import { Stylebox } from "./components/stylebox.jsx";
import { useLayout } from "./LayoutContext.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faDiagramProject, faFile } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import "./components/Pages/page.css";

function App() {
  const pages = {
    About: {
      Page: <About />,
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
  const [pageOrder, setPageOrder] = useState(["About", "Projects", "Resume"]);

  const { sharedLayout, setSharedLayout } = useLayout("desktop");

  const setTaskbar = (taskbar, page) => {
    setTaskbarState(taskbar);
    setpageContent(page);
  };

  function checkLayout() {
    const { innerWidth: width, innerHeight: height } = window;
    setSharedLayout(width > height ? "desktop" : "mobile");
  }

  useEffect(() => {
    setTaskbar(taskbarBuilder.taskbar(pages, "About", setTaskbar), <About />);
    checkLayout();
    const handleResize = () => {
      checkLayout();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (sharedLayout === "desktop") {
    return (
      <>
        <div className="bg-[#ffffff] flex flex-row h-screen justify-center items-center gap-0 px-4">
          <div className="mainWrap">
            <div className=" bg-no-repeat h-full w-200 bg-right-bottom overflow-hidden bg-[url('/images/icons/background/Background_Left.svg')]" />
            <div className="mainContent">
              <div className="taskbar">
                <Stylebox
                  content={
                    <div className="pt-10 align-middle">
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
  } else {
    return (
      <>
        <div className="bg-[#ffffff] flex flex-col h-screen w-screen justify-center items-center gap-0 px-4 overflow-hidden">
          <div className="mainWrap overflow-x-hidden">
            <div className="bg-no-repeat h-full w-200 bg-right-bottom overflow-hidden bg-[url('/images/icons/background/Background_Left.svg')]" />
            <div
              className={`pt-0 pb-8 flex items-center max-w-screen flex-col overflow-x-hidden`}
            >
              <div className="w-full pl-5 pr-5">
                <div className="rounded-md w-full mt-5 mb-5 h-50 bg-[#879c7d] p-1">
                  <Stylebox
                    content={
                      <div className="flex flex-col pl-30 pr-30 w-full items-center justify-center">
                        <div className="w-full flex flex-row justify-between">
                          <img
                            className="border border-[#eda86e] rounded-md w-20 h-20 bg-[#72867d] overflow-hidden"
                            src={"/images/headshot.JPG"}
                          />
                          <div className="flex flex-col justify-center items-center ">
                            <h2 className="!mt-1 border-b-2 border-[#eda86e]">
                              Joseph Steeb
                            </h2>
                            <h3 className="pt-1">Software Developer</h3>
                          </div>
                        </div>
                        <div className="flex flex-row w-70">{taskbarState}</div>
                      </div>
                    }
                  />
                </div>
              </div>
              {pageOrder.map((key) => (
                <div className="w-full pb-5" key={key}>
                  {" "}
                  {pages[key].Page}{" "}
                </div>
              ))}
            </div>
            <div className="h-full w-200 bg-no-repeat bg-left-bottom bg-[url('/images/icons/background/Background_Right.svg')] overflow-hidden" />
          </div>
        </div>
      </>
    );
  }
}

export default App;
