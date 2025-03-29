import React from 'react';
import { Grid } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import TopFooter from './components/TopFooter';
import Insurance from './components/Insurance';
import MeetTheTeam from './components/MeetTheTeam';
import HomePage from './pages/Home';

function App() {
  return (
    <Grid
      sx={{
        maxWidth: '100vw',
        justifyContent: 'center',
      }}
    >
      <Router>
        <Navbar />
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            paddingTop: '17vh',
          }}
        >
          <Grid item xs={12} md={10}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/team' element={<MeetTheTeam />} />
              <Route path='/discount' element={<Insurance />} />
            </Routes>
          </Grid>
          <Grid item xs={12}>
            <TopFooter />
            <Footer />
          </Grid>
        </Grid>
      </Router>
    </Grid>
  );
}

export default App;
