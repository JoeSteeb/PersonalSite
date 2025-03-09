import { PageGeneric } from "./pageGeneric";
import { Stylebox } from "../stylebox";
import { PDFViewer } from "../pdfView";

export const Resume = () => {
  return (
    <PageGeneric
      title={<Stylebox content={<h1>Resume</h1>} />}
      content={<PDFViewer path={"public/Resume.pdf"} />}
    />
  );
};
