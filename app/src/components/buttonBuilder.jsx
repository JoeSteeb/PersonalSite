import "./taskbar.css"
export const taskbar = (text, style, onclick) => {
    return <button className={"button " + style} onClick={onclick}>{text}</button>
}
  