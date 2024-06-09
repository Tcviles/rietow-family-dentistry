import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { tss } from 'tss-react'
import Header from './components/Header';
import Content from './components/Content';
import Services from './components/Services';
import Footer from './components/Footer';
import SlideoutMenu from './components/SlideoutMenu';
import ContactPage from './components/ ContactPage';
import TopFooter from './components/TopFooter';

const useStyles = tss.create({
  app: {
    maxWidth: '100vw !important',
    justifyContent: 'center'
  },
  content: {
    paddingTop: '16vh'
  }
})

function App() {
  const { classes } = useStyles()
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log('toggledMenu')
  };


  return (
    <Grid container className={classes.app}>
      <Router>
        <Header toggleMenu={toggleMenu} />
        <Grid item xs={12} md={10} className={classes.content}>
        <SlideoutMenu isOpen={menuOpen} onClose={toggleMenu} />
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </ Grid>
        <TopFooter/>
        <Footer />
      </Router>
    </Grid>
  );
}

export default App;
