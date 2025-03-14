import "./page.css";
import { PageGeneric } from "./pageGeneric";
import { Stylebox } from "../stylebox";
import { PDFViewer } from "../pdfView";

export const Resume = () => {
  return (
    <PageGeneric
      title={<Stylebox content={<div className="title-wrapper">Resume</div>} />}
      content={<PDFViewer path={"public/Resume.pdf"} />}
    />
  );
};
