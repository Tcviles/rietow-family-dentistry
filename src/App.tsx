// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { routes } from './data/routes';

import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import TeamPage from './pages/Team';
import InsurancePage from './pages/Insurance';
import PatientFormsPage from './pages/PatientForms';
import PayPage from './pages/Pay';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.services} element={<ServicesPage />} />
          <Route path={routes.contact} element={<ContactPage />} />
          <Route path={routes.team} element={<TeamPage />} />
          <Route path={routes.discount} element={<InsurancePage />} />
          <Route path={routes.forms} element={<PatientFormsPage />} />
          <Route path={routes.pay} element={<PayPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
