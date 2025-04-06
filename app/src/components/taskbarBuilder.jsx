import * as buttons from "./buttonBuilder";

export const taskbar = (pages, selected, setter, style) => {
  return Object.keys(pages).map((e) => {
    if (e == selected)
      return buttons.taskbar(
        e,
        "button-clicked",
        () => setter(taskbar(pages, e, setter, style), pages[e].Page),
        pages[e].Icon
      );
    else
      return buttons.taskbar(
        e,
        "button",
        () => setter(taskbar(pages, e, setter, style), pages[e].Page),
        pages[e].Icon
      );
  });
  //.concat(<div className="button padding"></div>);
};
