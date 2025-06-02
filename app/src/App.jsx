import { useState, useEffect, useRef } from "react";
import { renderTaskbar } from "./components/taskbarBuilder.jsx";
import { PageGeneric } from "./components/Pages/pageGeneric.jsx";
import { Projects } from "./components/Pages/projects.jsx";
import { Resume } from "./components/Pages/resume.jsx";
import { About } from "./components/Pages/about.jsx";
import { Stylebox } from "./components/stylebox.jsx";
import { useLayout } from "./LayoutContext.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import {
  faBox,
  faDiagramProject,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import "./components/Pages/page.css";

function App() {
  const [pageOrder, setPageOrder] = useState(["About", "Projects", "Resume"]);
  const [taskbarState, setTaskbarState] = useState(null);
  const [pageContent, setpageContent] = useState(null);
  const [taskbarCollapsed, setTaskbarCollapsed] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const refs = Object.fromEntries(pageOrder.map((str) => [str, useRef(null)]));
  const scrollRef = useRef(null);
  const { sharedLayout, setSharedLayout } = useLayout();

  const pages = {
    About: {
      Page: (
        <div className="w-full" ref={refs.About}>
          <About />
        </div>
      ),
      Icon: <FontAwesomeIcon icon={faAddressCard} />,
    },
    Projects: {
      Page: (
        <div className="w-full" ref={refs.Projects}>
          <Projects />
        </div>
      ),
      Icon: <FontAwesomeIcon icon={faDiagramProject} />,
    },
    Resume: {
      Page: (
        <div className="w-full" ref={refs.Resume}>
          <Resume />
        </div>
      ),
      Icon: <FontAwesomeIcon icon={faFile} />,
    },
  };

  const setTaskbar = (taskbar, pageKey) => {
    console.log("layout: ", sharedLayout);
    setTaskbarState(taskbar);
    if (sharedLayout === "desktop") {
      setpageContent(pages[pageKey].Page);
    } else {
      refs[pageKey].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      setTimeout(() => {
        window.scrollBy(0, -500);
      }, 300);
    }
  };

  function checkLayout() {
    const { innerWidth: width, innerHeight: height } = window;
    setSharedLayout(width > height ? "desktop" : "mobile");
  }

  // Window resize event listener for mobile/desktop layout.
  useEffect(() => {
    console.log("Layout From useEffect: ", sharedLayout);
    setTaskbar(renderTaskbar(pages, "About", setTaskbar), "About");
    setpageContent(pages.About.Page);
    checkLayout();
    const handleResize = () => checkLayout();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sharedLayout]);

  // Scroll event listener to hide taskbar on mobile.
  useEffect(() => {
    const scrollBox = scrollRef.current;
    if (!scrollBox) return;
    scrollBox.addEventListener("scroll", () => {
      if (scrollBox.scrollTop > scrollPosition) {
        setTaskbarCollapsed(true);
      }
      setScrollPosition(scrollBox.scrollTop);
    });
    return () => {
      if (scrollBox) {
        scrollBox.removeEventListener("scroll", () => {
          console.log("scrolling...");
        });
      }
    };
  }, []);

  const mobileTaskbar = (
    <div className="rounded-md w-full mt-5 mb-0 h-40 bg-[#879c7d] p-1">
      <Stylebox
        content={
          <div className="flex flex-col h-full w-full items-center justify-center">
            <div className="w-full flex flex-row justify-center items-center gap-3 m-2">
              <img
                className="border border-[#eda86e] rounded-md min-w-20 h-20 bg-[#72867d] overflow-hidden"
                src="/images/headshot.JPG"
              />
              <div className="flex flex-col justify-center items-center">
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
  );

  const mobileTaskbarCollapsed = (
    <div className="rounded-md w-full mt-5 mb-0 h-20 bg-[#879c7d] p-1">
      <Stylebox
        content={
          <div className="flex flex-col h-full w-full items-center justify-center">
            <div className="w-full flex flex-row justify-center items-center gap-3 m-2">
              <div className="flex flex-col justify-center items-center">
                <h2 className="!mt-1 border-b-2 border-[#eda86e]">
                  Joseph Steeb
                </h2>
                <h3 className="pt-1">Software Developer</h3>
              </div>
              <button
                className="button-mobile !m-0 !w-auto"
                onClick={() => {
                  setTaskbarCollapsed(!taskbarCollapsed);
                  console.log("Taskbar collapsed: ", taskbarCollapsed);
                }}
              >
                Expand
              </button>
            </div>
          </div>
        }
      />
    </div>
  );

  if (sharedLayout === "desktop") {
    return (
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
                      src="/images/headshot.JPG"
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
    );
  } else {
    return (
      <div className="bg-[#ffffff] flex flex-col h-screen w-screen justify-center items-center gap-0 px-4 overflow-hidden">
        <div className="mainWrap overflow-x-hidden">
          <div className="bg-no-repeat h-full w-200 bg-right-bottom overflow-hidden bg-[url('/images/icons/background/Background_Left.svg')]" />
          <div className="flex flex-col">
            <div className="z-100 w-full pl-5 pr-5 drop-shadow-md">
              {taskbarCollapsed ? mobileTaskbarCollapsed : mobileTaskbar}
            </div>
            <div
              className="z-0 -translate-y-5 flex items-center max-w-screen flex-col overflow-x-hidden "
              ref={scrollRef}
            >
              {pageOrder.map((key) => (
                <div className="w-full" key={key}>
                  {pages[key].Page}
                </div>
              ))}
            </div>
          </div>
          <div className="h-full w-200 bg-no-repeat bg-left-bottom bg-[url('/images/icons/background/Background_Right.svg')] overflow-hidden" />
        </div>
      </div>
    );
  }
}

export default App;
