  import React from "react";
  import "./Projects.css";
  import { FaGithub, FaExternalLinkAlt, FaMapMarkedAlt, FaTasks, FaPalette, FaCheckCircle } from "react-icons/fa";

  function Projects() {
    // const projects = [
    //   {
    //     title: "GeoSpatial Analytics Portal",
    //     category: "GIS & FRONT-END ARCHITECTURE",
    //     description: "A high-performance mapping platform rendering massive coordinate datasets. Integrates interactive vector map layers, dynamic spatial bounding boxes, and complex client-side query filters. Leverages custom rendering pipelines to handle heavy datasets smoothly without browser lagging.",
    //     tags: ["React.js", "Leaflet Maps", "GeoJSON", "Context API", "Spatial Filters"],
    //     metrics: ["Optimized rendering for 10k+ spatial nodes", "Sub-100ms query filter responses", "Custom map caching system"],
    //     icon: <FaMapMarkedAlt />,
    //     github: "https://github.com",
    //     live: "#"
    //   },
    //   {
    //     title: "Real-Time Kanban Workspace",
    //     category: "COLLABORATIVE WORKFLOW APP",
    //     description: "A real-time workspace featuring drag-and-drop operations, task priority matrices, and interactive category boards. Fully integrated with Firebase Realtime Database for optimistic updates, syncing board modifications across clients in under 50ms.",
    //     tags: ["React.js", "Firebase Realtime DB", "State Hydration", "Optimistic UI", "CSS Transitions"],
    //     metrics: ["<50ms multi-device socket synchronization", "Zero external drag dependency design", "Firebase rules authorization"],
    //     icon: <FaTasks />,
    //     github: "https://github.com",
    //     live: "#"
    //   },
    //   {
    //     title: "Interactive Component Laboratory",
    //     category: "DESIGN SYSTEM & STORYBOOK",
    //     description: "A live playground showcasing customized UI widgets, color picker theme injections, and layout grids. Designed to prove modular styling, robust custom props, and clean, reusable React component guidelines.",
    //     tags: ["React.js", "CSS variables", "State Toggles", "Modular Architecture"],
    //     metrics: ["Fully responsive across all display formats", "Zero layout shift (CLS) rendering", "Dynamic theme state injection"],
    //     icon: <FaPalette />,
    //     github: "https://github.com",
    //     live: "#"
    //   }
    // ];

    // return (
    //   <section id="projects" className="projects-section">
    //     <div className="section-header">
    //       <span className="subtitle">Featured Creations</span>
    //       <h2 className="section-title">Production Projects</h2>
    //     </div>

    //     <div className="projects-container">
    //       {projects.map((project, index) => (
    //         <div key={index} className="project-card glass-panel">
    //           <div className="project-header-row">
    //             <div className="project-type-icon">
    //               {project.icon}
    //             </div>
    //             <span className="project-category-tag">{project.category}</span>
    //           </div>
              
    //           <div className="project-info">
    //             <h3>{project.title}</h3>
    //             <p>{project.description}</p>
                
    //             {/* Core metrics to sound professional */}
    //             <div className="project-metrics-box">
    //               <h4>Key Milestones:</h4>
    //               <ul>
    //                 {project.metrics.map((metric, mIndex) => (
    //                   <li key={mIndex}>
    //                     <FaCheckCircle className="metric-check" />
    //                     <span>{metric}</span>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>

    //             <div className="project-tags">
    //               {project.tags.map((tag, tagIndex) => (
    //                 <span key={tagIndex} className="project-tag">{tag}</span>
    //               ))}
    //             </div>

    //             <div className="project-links">
    //               <a href={project.github} target="_blank" rel="noreferrer" className="outline-btn small-btn">
    //                 <FaGithub /> Code Repo
    //               </a>
    //               <a href={project.live} className="glow-btn small-btn">
    //                 <FaExternalLinkAlt /> Live App
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </section>
    // );
  }

  export default Projects;
