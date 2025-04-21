export const PDFViewer = ({ path }) => (
  <div style={{ height: "100%", width: "100%" }}>
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
