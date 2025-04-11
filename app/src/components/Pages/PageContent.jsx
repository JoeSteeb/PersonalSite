import "./page.css";
export const ProjectDescription = () => {
  return (
    <div className="p-5 text-left">
      <p>
        <a
          href="https://github.com/JoeSteeb/Capstone2023"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-[Plex] text-[#4a4a4a] border-b-2 border-[#fbd499] hover:text-[#000]  text-[15pt] hover:border-[#cbc385] transition-colors duration-100"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-4 h-4"
          />
          View project on GitHub
        </a>
      </p>

      <h2 className="pt-5">Project Overview</h2>
      <p>
        The Center for Environmental Research, Education, and Outreach (CEREO)
        at Washington State University required a tool to visualize it's
        affiliate network. This network includes faculty, departments, research
        interests, projects, and publications. Our team built an interactive
        force-directed graph using D3.js, and react, to enable intuitive
        exploration of these relationships.
      </p>

      <div className="pt-5 flex justify-center">
        <img
          className="picture-frame"
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

      <div className="pt-5 flex justify-center">
        <img
          className="picture-frame"
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
