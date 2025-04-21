import "./taskbar.css";
// import { useLayout } from "@/LayoutContext.jsx";

export const taskbar = (text, style, onclick, icon) => {
  // const { sharedLayout } = useLayout();
  const sharedLayout = "desktop"; // Placeholder for layout context
  if (sharedLayout === "mobile") {
    return (
      <button className={"button-mobile " + style} onClick={onclick}>
        {icon}
        {text}
      </button>
    );
  } else {
    return (
      <button className={"button " + style} onClick={onclick}>
        {icon}
        {text}
      </button>
    );
  }
};
