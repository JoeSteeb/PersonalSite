import * as buttons from "./buttonBuilder"

export const taskbar = (pages, selected, setter, style) => {
  return Object.keys(pages).map(e => {
    if (e == selected)
      return buttons.taskbar(e, style.color, () => setter(taskbar(pages, e, setter, style)))
    else
      return buttons.taskbar(e, pages[e].color, () => setter(taskbar(pages, e, setter, style)))
  })
}
