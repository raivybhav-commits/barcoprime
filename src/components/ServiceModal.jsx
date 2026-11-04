import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ServiceModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Waste Skip Hire',
    skipSize: '7 Yard Skip',
    location: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      setErrorMsg('Please enter your Name and Phone Number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay-bg">
      <div className="modal-box-card">
        <div className="modal-top-bar">
          <div>
            <h3 className="modal-title-text">Request a Service</h3>
            <p className="text-xs text-muted font-bold tracking-wider mt-1">BARACO PRIME ENVIRONMENTAL & TRANSPORTATION</p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div>
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle2 size={48} className="text-accent mx-auto mb-3" />
              <h4 className="text-xl font-bold uppercase">Request Confirmed</h4>
              <p className="text-muted mt-2 text-sm">
                Thank you <strong>{formData.fullName}</strong>. Our logistics coordinator will call you at <strong>{formData.phone}</strong> regarding your request for <strong>{formData.service}</strong>.
              </p>
              <button
                className="btn btn-primary mt-6 w-full"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
              >
                DONE
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

              <div className="form-field-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                />
              </div>

              <div className="form-row-2">
                <div className="form-field-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 50 123 4567"
                    required
                  />
                </div>
                <div className="form-field-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-field-group">
                  <label>Service Type</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Waste Skip Hire">Waste Skip Hire</option>
                    <option value="Collection & Transport">Collection & Transport</option>
                    <option value="Responsible Disposal">Responsible Disposal</option>
                    <option value="Customized Solutions">Customized Solutions</option>
                  </select>
                </div>

                {formData.service === 'Waste Skip Hire' && (
                  <div className="form-field-group">
                    <label>Preferred Skip Size</label>
                    <select
                      name="skipSize"
                      value={formData.skipSize}
                      onChange={handleChange}
                    >
                      <option value="4 Yard Skip">4 Yard Skip (Small Residential)</option>
                      <option value="7 Yard Skip">7 Yard Skip (Medium Commercial)</option>
                      <option value="12 Yard Skip">12 Yard Skip (Large Debris)</option>
                      <option value="20 Yard Roll-On">20 Yard Roll-On (Industrial)</option>
                      <option value="40 Yard Roll-On">40 Yard Roll-On (Bulk Waste)</option>
                    </select>
                  </div>
                )}
              </div>

              <div className="form-field-group">
                <label>Project / Site Location in UAE</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Dubai Industrial City, Abu Dhabi, Sharjah..."
                />
              </div>

              <div className="form-field-group">
                <label>Additional Notes</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Mention delivery date or waste material type..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full mt-2">
                SUBMIT REQUEST <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
