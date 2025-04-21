import { Taskbar } from "./buttonBuilder";

export const renderTaskbar = (pages, selected, setter, style) => {
  return Object.keys(pages).map((key) => (
    <Taskbar
      key={key}
      text={key}
      style={key === selected ? "button-clicked" : "button"}
      onClick={() => setter(renderTaskbar(pages, key, setter, style), key)}
      icon={pages[key].Icon}
    />
  ));
};
