import React, { useState, useEffect } from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaDatabase, FaFire, FaTerminal, FaCodeBranch, FaWrench } from "react-icons/fa";

// Custom Hook to demonstrate React competency
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Custom Hook Playground states
  const [userName, setUserName] = useLocalStorage("portfolio_name", "Developer Candidate");
  const [renderCount, setRenderCount] = useState(1);
  const [rawStorage, setRawStorage] = useState("");

  // Track render counts for Hook Playground
  useEffect(() => {
    setRenderCount((prev) => prev + 1);
  }, [userName]);

  // Read raw storage value
  useEffect(() => {
    const val = window.localStorage.getItem("portfolio_name") || "empty";
    setRawStorage(val);
  }, [userName]);

  const skillCategories = {
    core: {
      title: "Core UI & Styling",
      skills: [
        { name: "React.js (v18/19)", icon: <FaReact style={{ color: "#61dafb" }} />, desc: "Component architecture, Custom Hooks, Context, Suspense, Portals." },
        { name: "JavaScript ES6+", icon: <FaJs style={{ color: "#f7df1e" }} />, desc: "Closures, Asynchronous loops, API consumption, Event loop mapping." },
        { name: "HTML5 & Semantic SEO", icon: <FaHtml5 style={{ color: "#e34f26" }} />, desc: "Accessibility structure, meta schemas, document object structures." },
        { name: "CSS3 / Modern Layouts", icon: <FaCss3Alt style={{ color: "#1572b6" }} />, desc: "CSS Variables, Flexbox, CSS Grid, complex transitions, keyframes." },
        { name: "Bootstrap / MUI", icon: <FaBootstrap style={{ color: "#7952b3" }} />, desc: "Responsive wrapper systems, flex grid grids, pre-styled overrides." }
      ]
    },
    backend: {
      title: "State & Data Layer",
      skills: [
        { name: "Firebase integration", icon: <FaFire style={{ color: "#ffca28" }} />, desc: "Realtime Databases, push/fetch operations, client validation checks." },
        { name: "RESTful API Integration", icon: <FaDatabase style={{ color: "#47a248" }} />, desc: "Axios clients, request interceptors, data normalization." }
      ]
    },
    tools: {
      title: "Engineering & Tools",
      skills: [
        { name: "Git & Version Control", icon: <FaCodeBranch style={{ color: "#f05032" }} />, desc: "Branching protocols, pull requests, merge conflict resolution." },
        { name: "Chrome DevTools", icon: <FaWrench style={{ color: "#1a73e8" }} />, desc: "Profiler audits, re-render tracing, networking inspection." },
        { name: "Command Line / npm", icon: <FaTerminal style={{ color: "#4caf50" }} />, desc: "Dependency workflows, script automation, environment configurations." }
      ]
    }
  };

  const getAllSkills = () => {
    return [...skillCategories.core.skills, ...skillCategories.backend.skills, ...skillCategories.tools.skills];
  };

  const getFilteredSkills = () => {
    if (activeCategory === "all") return getAllSkills();
    return skillCategories[activeCategory].skills;
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="subtitle">My Capabilities</span>
        <h2 className="section-title">Technical Expertise</h2>
      </div>

      {/* Categories Toggle Nav */}
      <div className="skills-nav">
        <button className={activeCategory === "all" ? "active" : ""} onClick={() => setActiveCategory("all")}>All</button>
        <button className={activeCategory === "core" ? "active" : ""} onClick={() => setActiveCategory("core")}>Core UI</button>
        <button className={activeCategory === "backend" ? "active" : ""} onClick={() => setActiveCategory("backend")}>Data Layer</button>
        <button className={activeCategory === "tools" ? "active" : ""} onClick={() => setActiveCategory("tools")}>Tools</button>
      </div>

      <div className="skills-layout-grid">
        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {getFilteredSkills().map((skill, index) => (
            <div key={index} className="skill-card glass-panel">
              <div className="skill-icon-wrapper">
                {skill.icon}
              </div>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <p>{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Live React Hooks Playground */}
        <div className="playground-card glass-panel">
          <div className="playground-header">
            <span className="badge">Interactive Lab</span>
            <h3>React Hook Laboratory</h3>
            <p>Demonstrating React state reactivity. Toggle inputs below to watch how state and browser LocalStorage update instantly in response to react loops.</p>
          </div>

          <div className="playground-demo-box">
            <div className="form-group">
              <label>Update Custom Hook Value (`userName`):</label>
              <input 
                type="text" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
                placeholder="Enter some text..."
              />
            </div>

            <div className="playground-telemetry">
              <div className="telemetry-item">
                <span className="telemetry-lbl">React Component Renders</span>
                <span className="telemetry-val counter-pulse">{renderCount}</span>
              </div>
              <div className="telemetry-item">
                <span className="telemetry-lbl">State Variable (`userName`)</span>
                <span className="telemetry-val string-val">"{userName}"</span>
              </div>
              <div className="telemetry-item">
                <span className="telemetry-lbl">LocalStorage Buffer Stream</span>
                <span className="telemetry-val raw-storage">{rawStorage}</span>
              </div>
            </div>

            <div className="playground-code-snippet">
              <span className="snippet-title">Custom Hook Invoked:</span>
              <code>
                const [userName, setUserName] = useLocalStorage("portfolio_name", "Developer Candidate");
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;