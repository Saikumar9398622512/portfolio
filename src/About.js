import React, { useState } from "react";
import "./About.css";
import { FaChevronRight, FaMapMarkedAlt, FaCode, FaGraduationCap, FaBriefcase } from "react-icons/fa";

function About() {
  const [activeTab, setActiveTab] = useState("experience");

  const timelineEvents = [
    {
      year: "Jan 2025 - Dec 2025",
      title: "GIS Engineer",
      company: "Destin Cs Pvt Ltd",
      description: "Collected and processed spatial data using GPS, satellite imagery, and survey inputs. Built and updated GIS databases including vector and raster assets, performed buffering/overlay spatial analyses, and generated report dashboards using ArcGIS/QGIS.",
      icon: <FaMapMarkedAlt />,
      tags: ["ArcGIS", "QGIS", "Database Management", "Spatial Analysis", "Thematic Maps"]
    },
    {
      year: "2025 - Present",
      title: "Front-End Developer (React Specialist)",
      company: "Independent / Professional Projects",
      description: "Leveraged precision logic and database management concepts from GIS engineering to build high-performance React.js single-page applications. Focused on state synchronization, custom hooks, and modular UI patterns.",
      icon: <FaCode />,
      tags: ["React.js", "JavaScript ES6+", "State Lifecycle", "Firebase Integration", "CSS Grid"]
    }
  ];

  const educationEvents = [
    {
      year: "Completed 2024",
      degree: "BSc Computers",
      school: "Aditya Degree College",
      university: "Affiliated to Adikavi Nannaya University",
      grade: "7.5 CGPA",
      details: "Gained core computing, data structure, and programming logic foundations."
    },
    {
      year: "Completed 2021",
      degree: "Intermediate (M.P.C)",
      school: "Narayana Junior College",
      university: "Board of Intermediate Education",
      grade: "5.9 CGPA"
    },
    {
      year: "Completed 2019",
      degree: "S.S.C",
      school: "Sri Vivekananda School",
      university: "Board of Secondary Education",
      grade: "9.5 GPA"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span className="subtitle">My Journey</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-grid">
        {/* Biography Panel */}
        <div className="bio-panel glass-panel">
          <h3>Bridging Geospatial Precision & Interactive UI Design</h3>
          <p>
            I am a Front-End Developer with specialized experience as a GIS Engineer. 
            My history manipulating geographic coordinate indices, spatial layers, and raster data 
            in ArcGIS/QGIS gives me an analytical edge in structured state organization, clean data normalizations, 
            and complex component systems in React.
          </p>
          <p>
            I focus on modular styling, clean event handling, and performant server synchronization. 
            I love taking analytical requirements and turning them into intuitive, visually striking web 
            interfaces that provide outstanding user experiences.
          </p>

          <div className="quick-bullets">
            <div className="bullet">
              <FaChevronRight className="bullet-icon" />
              <span><strong>Clean Code:</strong> Dry, modular components with strict functional programming models</span>
            </div>
            <div className="bullet">
              <FaChevronRight className="bullet-icon" />
              <span><strong>Optimization:</strong> Render cycle monitoring to keep rendering lag under 16ms</span>
            </div>
            <div className="bullet">
              <FaChevronRight className="bullet-icon" />
              <span><strong>Data Integration:</strong> Seamlessly mapping database nodes to dynamic UI templates</span>
            </div>
          </div>
        </div>

        {/* Interactive Experience/Education Tab Panel */}
        <div className="timeline-panel glass-panel">
          <div className="panel-header-tabs">
            <button 
              className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              <FaBriefcase /> Experience
            </button>
            <button 
              className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              <FaGraduationCap /> Education
            </button>
          </div>

          <div className="tab-content-container">
            {activeTab === "experience" ? (
              <div className="timeline-container">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-badge">
                      {event.icon}
                    </div>
                    <div className="timeline-content">
                      <span className="timeline-date">{event.year}</span>
                      <h4>{event.title}</h4>
                      <span className="timeline-company">{event.company}</span>
                      <p>{event.description}</p>
                      <div className="timeline-tags">
                        {event.tags.map((tag, tIndex) => (
                          <span key={tIndex} className="timeline-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="education-container">
                {educationEvents.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="education-bullet"></div>
                    <div className="education-content">
                      <span className="education-year">{edu.year}</span>
                      <h4>{edu.degree}</h4>
                      <span className="education-school">{edu.school}</span>
                      <span className="education-university">{edu.university}</span>
                      <span className="education-grade">Grade: <strong>{edu.grade}</strong></span>
                      {edu.details && <p className="education-details">{edu.details}</p>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;