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
  const [mainContent, setMaincontent] = useState(null)

  const setTaskbar = (taskbar, page) => {
    setTaskbarState(taskbar);
    setMaincontent(page.component);
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
        <div className='taskbar'>
          {taskbarState}
        </div>
        <div className='mainContent'>
          {mainContent}
        </div>
      </div>
    </>
  )
}

export default App
