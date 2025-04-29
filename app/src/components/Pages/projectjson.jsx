import * as Projects from "./PageContent";

const projects = [
  {
    id: 1,
    title: "Visualization Tool",
    page: Projects.VisualizationTool(),
    image: "/images/CEREO/Thumbnail.png",
  },
  {
    id: 2,
    title: "Graphing Application",
    page: Projects.GraphingApp(),
    image: "/images/GraphingApp/Graph.png",
  },
  {
    id: 3,
    title: "Graph Theory Application",
    page: Projects.GraphTheoryApp(),
    image: "/images/GraphTheoryApp/Thumbnail.png",
  },
];

export default projects;
