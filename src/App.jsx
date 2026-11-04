import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroAbout from './components/IntroAbout';
import Stats from './components/Stats';
import AboutSection from './components/AboutSection';
import CoreValues from './components/CoreValues';
import ServicesSection from './components/ServicesSection';
import OperationsSection from './components/OperationsSection';
import StatementSection from './components/StatementSection';
import CommitmentSection from './components/CommitmentSection';
import IndustriesSection from './components/IndustriesSection';
import WhyUsSection from './components/WhyUsSection';
import CtaSection from './components/CtaSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="app-root">
      <Navbar onOpenModal={handleOpenModal} />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <IntroAbout />
        <Stats />
        <AboutSection />
        <CoreValues />
        <ServicesSection onOpenModal={handleOpenModal} />
        <OperationsSection />
        <StatementSection />
        <CommitmentSection />
        <IndustriesSection onOpenModal={handleOpenModal} />
        <WhyUsSection />
        <CtaSection onOpenModal={handleOpenModal} />
        <ContactSection />
      </main>
      <Footer />
      <ServiceModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
