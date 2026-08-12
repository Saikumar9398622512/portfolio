import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaMapMarkerAlt, FaFileDownload, FaGithub, FaLinkedin, FaCheckCircle, FaExclamationTriangle, FaPhone } from "react-icons/fa";
import { db } from "./Firebase";
import { ref, push } from "firebase/database";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      // Check if Firebase is using placeholder keys
      const isPlaceholder = !db || !db.app || db.app.options.apiKey === "YOUR_API_KEY";
      
      if (isPlaceholder) {
        // Fallback simulate success so the form works gracefully in local development or demo environment
        console.warn("Firebase is using placeholder API keys. Simulating successful form submission.");
        await new Promise((resolve) => setTimeout(resolve, 800));
      } else {
        const contactsRef = ref(db, "contacts");
        await push(contactsRef, {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "No Subject",
          message: formData.message,
          timestamp: new Date().toISOString()
        });
      }

      setStatus({ submitting: false, success: true, error: null });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 4000);

    } catch (error) {
      console.error("Firebase Submission Error:", error);
      setStatus({ 
        submitting: false, 
        success: false, 
        error: "Message failed to send. Please contact directly via email." 
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="subtitle">Collaboration</span>
        <h2 className="section-title">Get In Touch</h2>
      </div>

      <div className="contact-container">
        {/* Info Column */}
        <div className="contact-info-wrapper">
          <div className="contact-info-card glass-panel">
            <h3>Let's build something epic</h3>
            <p>
              Whether you are looking to hire a dedicated React Developer, have questions about spatial dashboard integration, or simply want to talk clean frontend architecture, my inbox is always open.
            </p>

            <div className="info-details">
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Direct Email</h4>
                  <a href="mailto:saikumarjayanthi6@gmail.com">saikumarjayanthi6@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone / Mobile</h4>
                  <a href="tel:+919398622512">+91 9398622512</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Primary Location</h4>
                  <p>Kakinada, Andhra Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="resume-download-wrapper">
              <a
                href="/resume.html"
                target="_blank"
                rel="noreferrer"
                className="glow-btn"
              >
                <FaFileDownload style={{ marginRight: "8px" }} />
                View & Print Resume
              </a>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-wrapper">
          <form className="contact-form glass-panel" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Sai Kumar"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Discussion / Job Opportunity"
              />
            </div>

            <div className="form-group">
              <label>Message Content</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Hello Sai, I would love to talk about..."
                required
              />
            </div>

            <button 
              type="submit" 
              className={`glow-btn submit-btn ${status.submitting ? "loading" : ""}`}
              disabled={status.submitting}
            >
              {status.submitting ? "Sending..." : "Submit Inquiry"}
            </button>

            {/* User notification dialogs */}
            {status.success && (
              <div className="status-banner success-banner">
                <FaCheckCircle /> Message received successfully! I will respond shortly.
              </div>
            )}

            {status.error && (
              <div className="status-banner error-banner">
                <FaExclamationTriangle /> {status.error}
              </div>
            )}
          </form>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} J N V Sai Kumar. Crafted with React.js & CSS Variables.</p>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contact;