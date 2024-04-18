import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PricesSection from './components/PricesSection';
import AppointmentSection from './components/AppointmentSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutSection />
        <ServicesSection />
        <PricesSection />
        <AppointmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
