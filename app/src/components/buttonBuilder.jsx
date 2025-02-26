import "./taskbar.css"
export const taskbar = (text, style, onclick, icon) => {
    return <button className={"button " + style} onClick={onclick}>{icon}{text}</button>
}
  