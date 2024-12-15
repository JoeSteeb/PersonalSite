import { useState, useEffect } from 'react'
import * as taskbarBuilder from './components/taskbarBuilder.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const pages = {
    element1: { color: "grey", component: "" },
    element2: { color: "grey", component: "" },
    element3: { color: "grey", component: "" }
  }

  const style = {
    color: "blue"
  }

  const [taskbarState, setTaskbarState] = useState(null)

  useEffect(() => {
    setTaskbarState(taskbarBuilder.taskbar(pages, "element1", setTaskbarState, style))
  }, [])


  return (
    <>
      <div className='mainWrap'>
        <div className='taskbar'>
          {taskbarState}
        </div>
        <div className='mainContent'>
          Main Content
        </div>
      </div>
    </>
  )
}

export default App
