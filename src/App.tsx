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
    backgroundColor: '#999',
    paddingTop: '15vh',
    border: '2px solid black'
  }
})

function App() {
  const { classes } = useStyles()

  return (
    <Container className={classes.app}>
      <Router>
        <Header />
        <Container className={classes.content}>
          <Routes>
              <Route path='/' element={<Content />} />
          </Routes>
        </ Container>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
