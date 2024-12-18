import { useState, useEffect } from 'react'
import * as taskbarBuilder from './components/taskbarBuilder.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const pages = {
    element1: "element1" ,
    element2: "element2" ,
    element3: "element3"
  }

  const [taskbarState, setTaskbarState] = useState(null)
  const [pageContent, setpageContent] = useState(null)

  const setTaskbar = (taskbar, page) => {
    setTaskbarState(taskbar);
    setpageContent(pages[page]);
    console.log("set page to: " + pages[page]);
  }

  let num = 0;
  useEffect(() => {
    setTaskbar(
      taskbarBuilder.taskbar(pages, "element1", setTaskbar),
      pages["element1"]
    );
    console.log("updated taskbar" + num);
    ++num;
  }, [])


  return (
    <>
      <div className='mainWrap'>
        <div className='mainContent'>
          <div className='taskbar'>
            {taskbarState}
          </div>
          <div>
            <h1>{pageContent}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
