import { useState, useEffect } from 'react'
import * as taskbarBuilder from './components/taskbarBuilder.jsx'
import './App.css'
//import headshot from './assets/images/headshot.JPG'

function App() {
  const [count, setCount] = useState(0)

  const pages = {
    home: "Hello" ,
    element2: "somos" ,
    element3: "element3"
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
      taskbarBuilder.taskbar(pages, "home", setTaskbar),
      "home"
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
