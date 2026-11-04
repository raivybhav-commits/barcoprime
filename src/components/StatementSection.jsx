import React from 'react';

export default function StatementSection() {
  return (
    <section className="statement-editorial-section">
      <img
        src="/assets/brochure_page_3.png"
        alt="Baraco Prime Environmental Transport Operations"
        className="statement-bg-photo"
      />
      <div className="statement-photo-overlay"></div>

      <div className="container statement-content-wrapper">
        <div className="statement-quote-mark">“</div>
        <blockquote className="statement-quote-text">
          Transforming waste into a cleaner tomorrow through responsible environmental transportation.
        </blockquote>

        <div className="statement-brand-signoff">
          <span className="signoff-company">BARACO PRIME</span>
          <span className="signoff-sub">ENVIRONMENTAL & TRANSPORTATION L.L.C - S.P.C</span>
        </div>
      </div>
    </section>
  );
}
