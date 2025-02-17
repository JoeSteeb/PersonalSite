import "./taskbar.css"
export const taskbar = (text, style, onclick) => {
    return <button className={"button " + style} onClick={onclick}><h3>{text}</h3></button>
}
  