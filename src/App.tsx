// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import TeamPage from './pages/Team';
import InsurancePage from './pages/Insurance';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/discount" element={<InsurancePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
