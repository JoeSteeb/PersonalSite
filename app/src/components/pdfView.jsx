import { useLayout } from "@/LayoutContext.jsx";

export const PDFViewer = ({ path }) => {
  const { sharedLayout } = useLayout();
  const height = sharedLayout === "mobile" ? "100vh" : "100%";
  return (
    <div style={{ height: height, width: "100%" }}>
      <iframe
        src={path}
        width="100%"
        height="100%"
        style={{ border: "none", display: "block" }}
      >
        <p>
          Alternative text - include a link <a href={path}>to the PDF!</a>
        </p>
      </iframe>
    </div>
  );
};
