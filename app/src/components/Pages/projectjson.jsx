import * as Projects from "./PageContent";

const projects = [
  {
    id: 1,
    title: "Visualization Tool",
    page: Projects.ProjectDescription(),
    image: "/images/CEREO/Thumbnail.png"
  },
  {
    id: 2,
    title: "Graphing Application",
    page: (
      <>
        Created a desktop graphing application in <strong>C++</strong> using <strong>GTK</strong> and <strong>CMake</strong>, allowing users to input functions and visualize their plots.
      </>
    ),
    image: "/images/GraphingApp/Graph.png"
  },
  {
    id: 3,
    title: "Multi-Factor Authentication Demo",
    page: (
      <>
        Built a secure <strong>React</strong> application with <code>SHA-256</code> password hashing and two-factor authentication for improved user security.
      </>
    ),
    image: "/images/mfa-demo.jpg"
  },
  {
    id: 4,
    title: "Example 1",
    page: (
      <>
        A placeholder project showcasing an example application.
      </>
    ),
    image: "/images/example1.jpg"
  },
  {
    id: 5,
    title: "Example 2",
    page: (
      <>
        Another sample project demonstrating a different concept.
      </>
    ),
    image: "/images/example2.jpg"
  }
];

export default projects;
