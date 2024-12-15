export const taskbar = (text, color, onclick) => {
    return <button style={{ backgroundColor: color }} onClick={onclick}>{text}</button>
}
  