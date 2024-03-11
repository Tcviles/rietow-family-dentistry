import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { tss } from 'tss-react'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const useStyles = tss.create({
  app: {
    padding: '0px !important',
    maxWidth: '100vw !important'
  },
  content: {
    backgroundColor: 'white',
    margin: '20px 0px',
  }
})

function App() {
  const { classes } = useStyles()

  return (
    <Container className={classes.app}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Content />} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
