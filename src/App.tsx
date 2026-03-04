import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ContactPage } from './pages/ContactPage';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { AIChatbots } from './pages/services/AIChatbots';
import { PhoneHandling } from './pages/services/PhoneHandling';
import { WorkflowAutomation } from './pages/services/WorkflowAutomation';
import { CustomAIAgents } from './pages/services/CustomAIAgents';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900 flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/services/chatbots" element={<AIChatbots />} />
            <Route path="/services/phone-handling" element={<PhoneHandling />} />
            <Route path="/services/workflow-automation" element={<WorkflowAutomation />} />
            <Route path="/services/custom-agents" element={<CustomAIAgents />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
