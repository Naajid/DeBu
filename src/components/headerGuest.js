import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import { Paper } from '@material-ui/core';
import Logo from '../img/logo.png';
import { isMobile } from 'react-device-detect'
import BusinessIcon from '@material-ui/icons/Business';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

const themeGuestbar = createTheme({
    palette: {
        primary: {
            //main: '#14213D',
            main: '#181a1b', // shadeofblack
            light: '#ffffff', //white
            dark: '#ffffff'//dark
        },
        secondary: {
            main: '#caf0f8', // White Blue
            light: '#8f00ff' //elec violet
            // '#ff5656e0' //airbnb shade

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


const useStyles = makeStyles({
    root: {
        margin: 5,
        borderRadius: 16
    },
    rootMenu: {
        marginTop: 12,
    },
    rootlogo: {
        margin: "3px",
        padding: "3px",
    }
});

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5",
        background: "#000000",
        color: "#ffffff",
        borderRadius: 10,
    }
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        "&:focus": {
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white
            }
        }
    }
}))(MenuItem);

export const useStyles2 = makeStyles((theme) => ({
    link: {
        margin: 15,
        color: themeGuestbar.palette.primary.dark,
        "&:hover": {
            color: themeGuestbar.palette.secondary.light,
            textDecoration: themeGuestbar.palette.secondary.light
        }
    }
}));



export const HeaderGuest = () => {
    const classes = useStyles();
    const classes2 = useStyles2();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const preventDefault = (event) => event.preventDefault();
    return (
        <ThemeProvider theme={themeGuestbar}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ position: 'fixed' }}>
                    <Toolbar>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Paper variant='elevation'>


                                    <Typography variant="h6" className={classes.rootlogo} component="div" sx={{ flexGrow: 1 }}>
                                        <img src={Logo} alt="BlockVest Inc. logo" height={32} />
                                        BlockVest
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item style={{ visibility: (isMobile) ? "hidden" : "visible" }}>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    <Link href="#" onClick={preventDefault} className={classes2.link}>
                                        BlockVest for Investors
                                    </Link>
                                    <Link href="#" onClick={preventDefault} className={classes2.link}>
                                        BlockVest for Business
                                    </Link>
                                </Typography>
                            </Grid>

                            <Grid item>
                                <div>
                                    <Button className={classes.root} style={{ background: themeGuestbar.palette.secondary.light, color: themeGuestbar.palette.primary.light }} startIcon={<AccountCircleIcon />} endIcon={<LockOpenIcon />}
                                        variant="contained"
                                        onClick={handleClick}></Button>
                                    <div>
                                        <StyledMenu
                                            className={classes.rootMenu}
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}>
                                            <StyledMenuItem >
                                                <ListItemIcon>
                                                    <BusinessIcon color='secondary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Sign Up" />
                                            </StyledMenuItem>
                                            <StyledMenuItem>
                                                <ListItemIcon>
                                                    <VpnKeyIcon color='secondary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Login" />
                                            </StyledMenuItem>
                                            <StyledMenuItem>
                                                <ListItemIcon>
                                                    <PermContactCalendarIcon color='secondary'/>
                                                </ListItemIcon>
                                                <ListItemText primary="Contact Us" />
                                            </StyledMenuItem>
                                        </StyledMenu>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}
