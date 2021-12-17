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
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


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
        borderRadius: 16,
        background: themeGuestbar.palette.secondary.light,
        color: themeGuestbar.palette.primary.light
    },
    rootMenu: {
        marginTop: 12,
    },
    rootlogo: {
        margin: "3px",
        padding: "3px",
    },
    dropdown: {
        '&:hover': {
            backgroundColor: '#ffffff',
            color: '#000000',
        }
    }

});

const StyledMenu = withStyles({
    paper: {
        border: "0.1px solid #ffffff",
        background: "#000000",
        color: "#ffffff",
        borderRadius: 10,
        elevation: 5
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  



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
    const [open, setOpen] = React.useState(false);

    const handleOpenPop = () => {
        setOpen(true);
    };

    const handleClosePop = () => {
        setOpen(false);
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
                                    <Button className={classes.root} startIcon={<AccountCircleIcon />} endIcon={<LockOpenIcon />}
                                        variant="contained"
                                        onClick={handleClick}></Button>
                                    <div>
                                        <StyledMenu
                                            className={classes.rootMenu}
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}>
                                            <MenuItem onClick={handleOpenPop} className={classes.dropdown}>
                                                <ListItemIcon>
                                                    <BusinessIcon className={classes.dropdown} color='secondary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Sign Up" />
                                            </MenuItem>
                                            <Dialog
                                                    fullScreen
                                                    open={open}
                                                    onClose={handleClose}
                                                    TransitionComponent={Transition}
                                                >
                                                    <AppBar sx={{ position: 'relative' }}>
                                                        <Toolbar>
                                                            <IconButton
                                                                edge="start"
                                                                color="inherit"
                                                                onClick={handleClosePop}
                                                                aria-label="close"
                                                            >
                                                                <CloseIcon />
                                                            </IconButton>
                                                            <Typography style={{ flexGrow: 1, textAlign: "center"}} variant="h6">
                                                                Login
                                                            </Typography>
                                                        </Toolbar>
                                                    </AppBar>
                                                        <Divider />
                                                </Dialog>
                                            <MenuItem className={classes.dropdown}>
                                                <ListItemIcon>
                                                    <VpnKeyIcon className={classes.dropdown} color='secondary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Login" />
                                            </MenuItem>
                                            <MenuItem className={classes.dropdown}>
                                                <ListItemIcon>
                                                    <PermContactCalendarIcon className={classes.dropdown} color='secondary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Contact Us" />
                                            </MenuItem>
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
