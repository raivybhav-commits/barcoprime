import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.22 0-1.6.76-1.6 1.54V12h2.75l-.44 3h-2.31v6.8c4.56-.93 8-4.96 8-9.8z"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: 'Waste Skip Hire',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMsg('Please fill in all required fields (Name, Email, Phone).');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-light-tint">
      <div className="container">
        <div className="contact-corporate-grid">
          {/* Left Column: Details */}
          <div className="contact-info-block">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-num">11</span>
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="section-headline">
                CONTACT <br />
                <span className="text-highlight-green">US</span>
              </h2>
              <p className="section-desc mt-3">
                Have a question regarding waste skip hire, transportation schedules, or environmental compliance? Reach out to our logistics team directly.
              </p>
            </div>

            <div className="info-item-row">
              <span className="info-item-label">DIRECT PHONE NUMBERS</span>
              <div className="info-item-value">
                <a href="tel:+971553732200">+971 55 373 2200</a>
              </div>
              <div className="info-item-value">
                <a href="tel:+971554642200">+971 55 464 2200</a>
              </div>
            </div>

            <div className="info-item-row">
              <span className="info-item-label">EMAIL INQUIRIES</span>
              <div className="info-item-value">
                <a href="mailto:enquiries@baraco.ae">enquiries@baraco.ae</a>
              </div>
            </div>

            <div className="info-item-row">
              <span className="info-item-label">OFFICIAL WEBSITE</span>
              <div className="info-item-value">
                <a href="https://www.baraco.ae" target="_blank" rel="noreferrer">
                  www.baraco.ae
                </a>
              </div>
            </div>

            <div className="info-item-row">
              <span className="info-item-label">SOCIAL CHANNELS</span>
              <div className="social-links mt-1">
                <a
                  href="https://facebook.com/baracoprime"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  <FacebookIcon size={18} />
                  <span>baracoprime</span>
                </a>
                <a
                  href="https://linkedin.com/company/baracoprime"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  <LinkedinIcon size={18} />
                  <span>baracoprime</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Corporate Form */}
          <div className="contact-form-editorial">
            <h3 className="form-title-text">Send Us an Enquiry</h3>
            <p className="form-sub-text">
              Fill out the details below and our environmental logistics coordinator will get back to you promptly.
            </p>

            {submitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={48} className="success-icon" />
                <h4>Enquiry Received</h4>
                <p className="mt-2 text-muted">
                  Thank you, <strong>{formData.fullName}</strong>. Your enquiry regarding <strong>{formData.serviceRequired}</strong> has been logged. Our team will contact you at <strong>{formData.phone}</strong>.
                </p>
                <button
                  className="btn btn-outline-dark mt-6"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      companyName: '',
                      email: '',
                      phone: '',
                      serviceRequired: 'Waste Skip Hire',
                      message: ''
                    });
                  }}
                >
                  SEND ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="editorial-form-grid">
                {errorMsg && (
                  <div className="form-error-alert">
                    <AlertCircle size={18} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="form-row-2">
                  <div className="form-field-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ahmed Al-Maktoum"
                      required
                    />
                  </div>
                  <div className="form-field-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Apex Construction LLC"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div className="form-field-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 000 0000"
                      required
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label htmlFor="serviceRequired">Service Required *</label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                  >
                    <option value="Waste Skip Hire">Waste Skip Hire</option>
                    <option value="Collection & Transport">Collection & Transport</option>
                    <option value="Responsible Disposal">Responsible Disposal</option>
                    <option value="Customized Solutions">Customized Solutions</option>
                  </select>
                </div>

                <div className="form-field-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your site location, skip size requirement, or transport schedule..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full mt-2">
                  SUBMIT ENQUIRY <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
