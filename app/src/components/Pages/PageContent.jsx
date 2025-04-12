import "./page.css";
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
