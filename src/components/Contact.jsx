import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status) setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus(
      "Thanks for reaching out! Your email app can be opened using the email link below."
    );

    const mailtoLink = `mailto:zohafatema02@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">GET IN TOUCH</span>

          <h2 className="section-title">
            Let's Work <span className="accent">Together</span>
          </h2>

          <p className="section-description">
            Have a project in mind or want to discuss an opportunity?
            I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Let's Connect</h3>

            <p className="contact-intro">
              I'm open to discussing new projects, creative ideas,
              and opportunities. Feel free to get in touch.
            </p>

            <a
              href="mailto:zohafatema02@gmail.com"
              className="contact-detail"
            >
              <span className="contact-icon">
                <Mail size={21} />
              </span>

              <span className="contact-detail-text">
                <strong>Email</strong>
                <span>zohafatema02@gmail.com</span>
              </span>
            </a>

            <div className="contact-detail">
              <span className="contact-icon">
                <MapPin size={21} />
              </span>

              <span className="contact-detail-text">
                <strong>Location</strong>
                <span>India</span>
              </span>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/Zohafatema"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                title="GitHub"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/zoha-fatema-ansari-50589833a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                title="LinkedIn"
              >
                <FaLinkedinIn size={22} />
              </a>
            </div>

            <div className="contact-note">
              <span className="accent">●</span>
              Available for new opportunities
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Your Email</label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Your Message</label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn contact-submit">
              Send Message
              <Send size={17} />
            </button>

            {status && (
              <p className="form-status" role="status">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;