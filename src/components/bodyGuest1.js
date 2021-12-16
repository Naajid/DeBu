import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../img/main.jpeg';


const themeGuestbar = createTheme({
  palette: {
    primary: {
      //main: '#14213D',
      main: '#ffffff', // shadeofblack
      light: '#ffffff', //white
      dark: '#000000'//dark
    },
    secondary: {
      main: '#caf0f8', // White Blue
      light: '#8f00ff' //electric Violet

    }
  },
  typography: {
    fontFamily: [
      'Helvetica',
    ],
    h6: {
      "fontWeight": 600,
    },
  },
});

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  }
};

const styledtext = {
  position: 'relative',
  color: "#ffffff",
  textAlign: 'center',
  top: "40%",
  left: "50%",
  transform: 'translate(-50%, -50%)'
}

const useStyles = makeStyles({
  root: {
    margin: "auto",
    borderRadius: 16,
    position: "relative"
  },
  rootMenu: {
    marginTop: 12,
    color: '#ffffff',
  },
  rootlogo: {
    margin: "3px",
    padding: "3px",
  }
});

export const BodyGuest1 = () => {
  const classes = useStyles();
  return (
    <>
      <Paper style={styles.paperContainer}>

        <Typography style={styledtext}>
          {/* We do something, we do nothing, xyz invest with us okay? */}
        </Typography>
        <Button className={classes.root} style={{
          background: themeGuestbar.palette.secondary.light, color: themeGuestbar.palette.primary.light, textAlign: 'center', top: "40%",
          left: "50%",   transform: 'translate(-50%, -50%)'

        }}
          variant="contained"
          elevation={100} >Start Now!</Button>
      </Paper>
    </>
  )
}
