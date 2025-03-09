export const PDFViewer = ({ path }) => (
  <iframe src={path} width="100%" height="100%" style={{ border: "none" }}>
    <p>
      Alternative text - include a link <a href={path}>to the PDF!</a>
    </p>
  </iframe>
);
