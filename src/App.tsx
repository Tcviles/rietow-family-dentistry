import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { tss } from 'tss-react'
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services';
import Footer from './components/Footer';
import ContactPage from './components/ ContactPage';
import TopFooter from './components/TopFooter';
import Insurance from './components/Insurance';
import MeetTheTeam from './components/MeetTheTeam';
import HomePage from './pages/Home';

const useStyles = tss.create({
  app: {
    maxWidth: '100vw !important',
    justifyContent: 'center'
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: '17vh'
  }
})

function App() {
  const { classes } = useStyles()

  return (
    <Grid className={classes.app}>
      <Router>
        <Navbar />
        <Grid container className={classes.content}>
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
        </ Grid>
      </Router>
    </Grid>
  );
}

export default App;
