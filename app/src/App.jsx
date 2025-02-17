import { useState, useEffect } from 'react'
import * as taskbarBuilder from './components/taskbarBuilder.jsx'
import {PageGeneric} from './components/Pages/pageGeneric.jsx'
import { Projects } from './components/Pages/projects.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const pages = {
    About: <PageGeneric title={<h1>About</h1>} content={"Test"}/> ,
    Projects: <Projects/> ,
    Resume: <PageGeneric title={<h1>Resume</h1>} content={"Test"}/>
  }

  const [taskbarState, setTaskbarState] = useState(null)
  const [pageContent, setpageContent] = useState(null)

  const setTaskbar = (taskbar, page) => {
    setTaskbarState(taskbar);
    setpageContent(page);
    console.log("set page to: " + pages[page]);
  }

  let num = 0;
  useEffect(() => {
    setTaskbar(
      taskbarBuilder.taskbar(pages, <h1>About</h1>, setTaskbar),
      <PageGeneric title={<h1>About</h1>} content={"Test"}/>
    );
    console.log("updated taskbar" + num);
    ++num;
  }, [])


  return (
    <>
      <div className='mainWrap'>
        <div className='mainContent'>
          <div className='taskbar'>
            <img className='picture-frame' src={'/images/headshot.JPG'}/>
            <h2>Joseph Steeb</h2>
            <h3>Software Developer</h3>

            {taskbarState}
          </div>
          {pageContent}
          
        </div>
      </div>
    </>
  )
}

export default App
