import "./page.css";
import { PageGeneric } from "./pageGeneric";
import { Stylebox } from "../stylebox";

export const About = () => {
  return (
    <PageGeneric
      title={<Stylebox content={<div className="title-wrapper">About</div>} />}
      content={
        <div className="p-5 text-left overflow-y-scroll">
          <p>
            Hello, I'm Joe Steeb — a software engineer and IT professional with
            an interest in data systems, automation, and scalable
            infrastructure. I bring a blend of hands-on IT experience and modern
            software development skills to every project I undertake.
          </p>

          <h2 className="pt-5 ">Professional Journey</h2>
          <p className="pt-2">
            My professional path began at Washington State University, where I
            earned a Bachelor of Science in Software Engineering. Alongside my
            studies, I worked as an IT Technician for the Carson College of
            Business, handling support tickets, software deployments, and
            hardware repairs. This role grounded me in practical IT systems
            management and introduced me to enterprise workflows.
          </p>

          <p className="pt-2">
            From there, I took on a dual-role at the Institute for Shock
            Physics, where I supported researchers both technically and
            programmatically. I redesigned a ballistic calculation interface
            using Python and Qt, enabling greater usability for lab teams. I
            also developed automation tools to improve cybersecurity response
            times across over 100 endpoints, gaining experience in endpoint
            management, scripting, and server administration.
          </p>

          <p className="pt-2">
            Currently, I serve as a Data Migration Specialist at Levitek. My
            work revolves around ETL processes, data transformation, and
            client-specific migration tools. I develop SQL scripts to extract
            and transform data, and write robust C# applications using LINQ and
            regular expressions to automate and customize workflows. I also
            ensure compliance with Controlled Unclassified Information (CUI)
            handling protocols.
          </p>

          <section>
            <h2 className="pt-5">Highlighted Projects</h2>
            <p className="pt-2">
              I take pride in building solutions that are both technically sound
              and user-focused. Some of my favorite projects include:
            </p>
            <ul>
              <li>
                An interactive network visualization tool built with React,
                D3.js, and Flask for WSU’s Center for Environmental Research,
                deployed using Docker and Azure.
              </li>
              <li>
                A C++ desktop application using GTK for graph plotting based on
                user input.
              </li>
              <li>
                A secure React-based login system with password hashing and
                multi-factor authentication.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="pt-5">Core Competencies</h2>
            <p>
              My skill set spans software engineering, IT systems, and data
              pipelines. I'm proficient in technologies like SQL, C#, Python,
              C++, JavaScript, React, Docker, and both Windows and Linux
              environments. I'm comfortable working with tools like SSMS, Jira,
              Active Directory, and containerization platforms like Azure.
            </p>
          </section>

          <section>
            <h2 className="pt-5">Get in Touch</h2>
            <p>
              If you're interested in collaborating, have a project in mind, or
              just want to connect, feel free to reach out:
            </p>
            <ul>
              <li>
                Email: <a href="mailto:josteeb@gmail.com">josteeb@gmail.com</a>
              </li>
              <li>Phone: +1 (425) 343-7345</li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/joe-steeb-3594451b0"
                  target="_blank"
                >
                  linkedin.com/in/joe-steeb
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a href="https://github.com/JoeSteeb" target="_blank">
                  github.com/JoeSteeb
                </a>
              </li>
            </ul>
          </section>
        </div>
      }
    />
  );
};
