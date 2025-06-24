import "./page.css";
import { Carousel } from "../carousel";

export const VisualizationTool = () => {
  return (
    <div className="p-5 text-left">
      <div className="flex justify-center pt-2">
        <a
          href="https://github.com/JoeSteeb/Capstone2023"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#4a4a4a] border-b-2 border-[#fbd499] hover:text-[#000] hover:border-[#cbc385] transition-colors duration-100"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-4 h-4"
          />
          View project on GitHub
        </a>
      </div>

      <h2 className="pt-5">Project Overview</h2>
      <p>
        The Center for Environmental Research, Education, and Outreach (CEREO)
        at Washington State University required a tool to visualize it's
        affiliate network. This network includes faculty, departments, research
        interests, projects, and publications. Our team built an interactive
        force-directed graph using D3.js, and react, to enable intuitive
        exploration of these relationships.
      </p>

      <div className="pt-5 flex">
        <img
          className="picture-frame-no-center"
          src={"/images/CEREO/Thumbnail.png"}
          alt={"Screenshot of CEREO tool in use"}
        />
      </div>

      <h2 className="pt-7">Data Pipeline and Architecture</h2>
      <p className="pt-2">
        Data is exported from WordPress in CSV format and processed through an
        ETL pipeline. The data is cleaned, deduplicated, and structured, then
        uploaded to a MySQL database hosted in Azure. A Flask backend exposes a
        REST API that queries this data and transforms it into a normalized JSON
        structure suitable for graph rendering.
      </p>

      <h2 className="pt-7">Frontend and Visualization</h2>
      <p className="pt-2">
        The React frontend binds API data to SVG elements using D3.js. Each node
        is typed (e.g., affiliate, department, publication) and styled with
        distinct colors and shapes. Interactive features include zooming,
        panning, filtering, and a focused detail drawer for affiliate profiles.
        The layout uses D3's force simulation tuned with repulsion, collision,
        and link constraints to reduce visual clutter and ensure readable
        spacing. The UI complies with ADA Level AA accessibility guidelines.
      </p>

      <h2 className="pt-7">Deployment</h2>
      <p className="pt-2">
        The project is packaged as a Docker container, with the frontend React
        app embedded in the Flask backend. It is deployed to Azure via GitHub
        Actions. On push to the main branch, a deployment script builds the
        container, pushes it to Docker Hub, and restarts the Azure App Service
        using rsync to sync updated files.
      </p>

      <div className="pt-5 flex">
        <img
          className="picture-frame-no-center"
          src={"/images/CEREO/Deploy.png"}
          alt={"Deployment pipeline diagram"}
        />
      </div>

      <h2 className="pt-7">Performance and Testing</h2>
      <p className="pt-2">
        Node positions are cached to reduce computation on load. D3’s data join
        pattern is used to minimize DOM updates. Stress testing with large
        synthetic datasets confirmed responsiveness and &lt;2s interaction
        latency. Testing included backend unit tests, Jest tests for key UI
        actions, and formal user acceptance testing. Code quality is enforced
        with ESLint and Prettier.
      </p>
    </div>
  );
};

export const GraphingApp = () => {
  return (
    <div className="p-5 text-left">
      <div className="flex justify-center pt-2">
        <a
          href="https://github.com/JoeSteeb/GTK_Graphing_App"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#4a4a4a] border-b-2 border-[#fbd499] hover:text-[#000] hover:border-[#cbc385] transition-colors duration-100"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-4 h-4"
          />
          View project on GitHub
        </a>
      </div>

      <h2 className="pt-5">Project Overview</h2>
      <p>
        This desktop graphing utility was built in modern C++ using GTK4 and
        Cairo for rendering. Designed for plotting mathematical equations
        interactively, it enables users to enter multiple expressions, visualize
        them in real time, and dynamically manage each input via a dedicated UI.
        The tool provides a streamlined environment for debugging, analyzing, or
        demonstrating mathematical behavior across a coordinate plane.
      </p>

      <div className="pt-5 flex">
        <img
          className="picture-frame-no-center"
          src={"/images/GraphingApp/Graph.png"}
          alt={"Deployment pipeline diagram"}
        />
      </div>

      <h2 className="pt-7">UI and Interaction</h2>
      <p className="pt-2">
        The interface consists of a scrollable equation list and a zoomable,
        grid-aligned canvas. Each equation is independently graphed, and users
        can add or remove them with immediate visual feedback. The graph
        supports multiple concurrent expressions, dynamically color-coded and
        rendered on an axis-aligned system with hash marks. Entry boxes are GTK
        widgets stored in a vector for efficient traversal and evaluation.
      </p>

      <h2 className="pt-7">Rendering Architecture</h2>
      <p className="pt-2">
        The graph is drawn using Cairo on a GTK `GtkDrawingArea`. Coordinate
        transforms are calculated in real-time based on window dimensions and a
        zoom constant. The graph includes axes, tick marks, and user-defined
        expressions, each rendered via a C++ loop using evaluated float values
        across a discrete `x` range. Axis drawing, grid logic, and function
        interpolation are modular and optimized for clarity and performance.
      </p>

      <h2 className="pt-7">Math Parsing and Evaluation</h2>
      <p className="pt-2">
        Expressions are parsed and evaluated using the GNU libmatheval library.
        Each equation is compiled on submission and stored in a lightweight
        wrapper class. The evaluation method maps floating-point `x` inputs to
        `y` results, scaled and positioned relative to the canvas’s transform
        state. This allows for accurate, scalable rendering of arbitrary
        continuous functions.
      </p>

      <h2 className="pt-7">Technical Highlights</h2>
      <ul className="list-disc list-inside pt-2 space-y-1">
        <li>GTK4 C++ UI framework with live equation input handling</li>
        <li>Dynamic graph rendering using Cairo drawing primitives</li>
        <li>
          Multi-function support with per-input graph lifecycle management
        </li>
        <li>Zoom/scaling implemented via a consistent transform matrix</li>
        <li>Manual memory management and unique_ptr use for dynamic arrays</li>
        <li>Expression parsing and evaluation via libmatheval backend</li>
      </ul>

      <h2 className="pt-7">Use Case and Relevance</h2>
      <p className="pt-2">
        This tool was built to demonstrate proficiency in native desktop
        development, GTK UI construction, and mathematical rendering pipelines.
        It’s an ideal project for showcasing strong fundamentals in C++,
        low-level drawing, manual state handling, and direct integration with
        open-source libraries — all of which are useful in high-performance
        applications, visualization tools, and embedded UI systems.
      </p>
    </div>
  );
};

export const GraphTheoryApp = () => {
  return (
    <div className="p-5 text-left">
      <div className="flex justify-center pt-2">
        <a
          href="https://github.com/JoeSteeb/Graph-Theory"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#4a4a4a] border-b-2 border-[#fbd499] hover:text-[#000] hover:border-[#cbc385] transition-colors duration-100"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-4 h-4"
          />
          View project on GitHub
        </a>
      </div>

      <h2 className="pt-5">Project Overview</h2>
      <p>
        The Graph Theorist’s Sketchpad is an interactive Python application
        designed for prototyping graph structures. Built with Pygame, it
        provides an intuitive environment where users can place vertices, create
        edges, edit labels, and explore graph properties dynamically. The tool
        emphasizes usability and real-time feedback for graph construction and
        editing workflows.
      </p>

      <div className="pt-5 flex">
        <img
          className="picture-frame-no-center"
          src={"/images/GraphTheoryApp/HeadLine.png"}
          alt={"Main overview of Graph Theorist's Sketchpad"}
        />
      </div>

      <h2 className="pt-7">Interface and User Interaction</h2>
      <p className="pt-2">
        The interface features a collapsible bottom-left menu composed of
        dynamically arranged buttons. Users can select actions like "Place
        Vertex," "Add Edge," "Edit Label," "Delete Vertex," toggle "Directed"
        edges, or "Show Degree." Each button modifies the application state,
        allowing context-aware interaction when clicking inside the workbench
        area. Nodes can be dragged, labeled, and connected with single clicks,
        supporting both undirected and directed graph models.
      </p>

      <h2 className="pt-7">Graph Types: Directed and Non-Directed Edges</h2>
      <div className="pt-5 flex">
        <img
          className="picture-frame-no-center"
          src={"/images/GraphTheoryApp/NonDirected.png"}
          alt={"Example of non-directed graph edges"}
        />
      </div>

      <div className="pt-5 flex">
        <img
          className="picture-frame-no-center"
          src={"/images/GraphTheoryApp/Directed.png"}
          alt={"Example of directed graph edges"}
        />
      </div>

      <h2 className="pt-7">Architecture and Core Logic</h2>
      <p className="pt-2">
        The application is built following a top-down design philosophy. Each
        drawable object (e.g., menus, buttons, nodes) implements a `draw()`
        method that propagates rendering calls hierarchically. The `Menu` class
        manages UI state and click detection, while the `Work_Bench` class
        handles core control logic, node management, and input interpretation.
      </p>

      <p className="pt-2">
        Node placement, deletion, and movement are processed using a combination
        of the `Mouse` and `Work_Bench` classes, with click detection handled
        independently of UI elements. Keyboard input for label editing is
        managed through the `Keyboard` class, allowing direct string mutation
        and backspace functionality during text editing.
      </p>

      <h2 className="pt-7">Graph Drawing and Visualization</h2>
      <p className="pt-2">
        Each node is drawn as an ellipse and edges are rendered as lines or
        directed arrows depending on mode selection. Edge rendering
        intelligently handles special cases like self-loops (edges to self) and
        double connections. The graph automatically displays vertex and edge
        counts in the top-left corner, updating in real time as nodes and edges
        are modified.
      </p>

      <h2 className="pt-7">Technical Highlights</h2>
      <ul className="list-disc list-inside pt-2 space-y-1">
        <li>
          Dynamic button creation and layout adjustment based on window size
        </li>
        <li>Real-time node movement and interactive edge placement</li>
        <li>
          Support for directed and undirected graphs with visual indicators
        </li>
        <li>
          Manual string editing for vertex labels with keyboard event handling
        </li>
        <li>Degree calculation and label swapping at runtime</li>
        <li>Efficient click detection with radius-based selection logic</li>
      </ul>

      <h2 className="pt-7">Use Case and Relevance</h2>
      <p className="pt-2">
        This project demonstrates capabilities in GUI programming, interactive
        graphics, input handling, and modular Python architecture. It is
        particularly relevant for roles involving rapid prototyping, UI/UX
        design for technical applications, game development, and educational
        software engineering.
      </p>
    </div>
  );
};

export const DBApp = () => {
  return (
    <div className="p-5 text-left">
      <div className="flex justify-center pt-2">
        <a
          href="https://github.com/JoeSteeb/Database-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#4a4a4a] border-b-2 border-[#fbd499] hover:text-[#000] hover:border-[#cbc385] transition-colors duration-100"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-4 h-4"
          />
          View project on GitHub
        </a>
      </div>

      <h2 className="pt-5">Project Overview</h2>
      <p>
        This application utilizes the yelp open-dataset to demonstrate various
        software engineering principles, including database management, web
        design / development, restful APIs and API compositioning.
      </p>

      <div className="pt-5 flex">
        <img
          className="picture-frame-no-center"
          src={"/images/DBApp/Map.png"}
          alt={"Map utility image showing business locations"}
        />
      </div>

      <h2 className="pt-7">Interface and User Interaction</h2>
      <p className="pt-2">
        The UI framework chosen for this application is a React single-page
        application built with TypeScript. Users of the application will first
        be greeted by a list of businesses, which can be filtered by name, city,
        and state, etc. and can be ordered by rating, review count, distance,
        and other metrics.
      </p>
      <div className="pt-5 flex">
        <Carousel>
          <img
            className="picture-frame w-full h-full"
            src={"/images/DBApp/FilterBy.png"}
            alt={"Example of Filter utility"}
          />
          <img
            className="picture-frame w-full h-full"
            src={"/images/DBApp/OrderBy.png"}
            alt={"Example of Filter utility"}
          />

          {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <div
              key={n}
              className="p-4 bg-gray-200 rounded shadow-lg h-full p w-full"
            >
              <h1 className="text-xl font-bold">{n}</h1>
            </div>
          ))} */}
        </Carousel>
      </div>

      <p className="pt-5">
        One of the key features of React is the ability to seamlessly implement
        dynamic html elements. This is demonstrated in the above screenshots,
        showcasing dropdown menus.
      </p>

      <h2 className="pt-7">Architecture and Core Logic</h2>
      <p className="pt-2"></p>

      <p className="pt-2"></p>

      <h2 className="pt-7">Graph Drawing and Visualization</h2>
      <p className="pt-2"></p>

      <h2 className="pt-7">Technical Highlights</h2>
      <ul className="list-disc list-inside pt-2 space-y-1"></ul>

      <h2 className="pt-7">Use Case and Relevance</h2>
      <p className="pt-2">
        This project demonstrates capabilities in GUI programming, interactive
        graphics, input handling, and modular Python architecture. It is
        particularly relevant for roles involving rapid prototyping, UI/UX
        design for technical applications, game development, and educational
        software engineering.
      </p>
    </div>
  );
};
