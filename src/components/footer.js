import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';

const useStyles = makeStyles(
    {
        root:
        {
            backgroundColor: "#000000",
            color: "#ffffff",
            marginTop: "95vh",
            width: "100vw"
        }
    }
)


export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color='#000000'>
                <Container maxWidth="md">
                    <Toolbar>
                        <Typography variant="body1">
                            &copy; 2019 Gistia
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>

    );
};