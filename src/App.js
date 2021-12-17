import './App.css';
import React from 'react';
import { HeaderGuest } from './components/headerGuest'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { BodyGuest1 } from './components/bodyGuest1';
import { BodyGuest2 } from './components/bodyGuest2';
import BodyGuest3 from './components/bodyGuest3';
import Footer  from './components/footer';
import { Divider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#14213D',
    },
    background: {
      //default: '#caf0f8'
      default: '#000000'
    }
  }
})

const styledfooter = {
  background: "#000000"
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderGuest />
      <BodyGuest1 />
      <BodyGuest2/>
      <BodyGuest3/>
      <Divider style={{background: "#ffffff", marginTop: "5%"}} />
      <Footer style={styledfooter} />
    </ThemeProvider>
  );
}

export default App;
