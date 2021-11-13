import {Box, Menu, MenuItem, makeStyles} from "@material-ui/core";
import {MoreVert} from "@material-ui/icons";
import {React, useState, useContext} from "react";
import {GoogleLogout} from "react-google-login";
import {clientId} from "../../constants/data";

import {AccountContext} from "../../context/AccountProvider";
import Drawer from "../drawar/InfoDrawar";


const useStyles = makeStyles({
    menuItem: {

        fontSize: 14,
        padding: "15px, 60px 5px 24px",
        color: "#4a4a4a",

    },
    logout: {
        border: "none !important",
        boxShadow: "none !important",
        "& > *": {
            padding: "0px !important"
        }
    }
})

const HeaderMenu = () => {
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClose = () => setOpen(false);

    const {setAccount} = useContext(AccountContext);


    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const onLogoutSuccess = (params) => {
        alert("you have been logged out succesfully");
        console.clear();
        setAccount("");
    }

    const toggleDrawer = () => {
        setOpenDrawer(true);

    };

    const classes = useStyles();


    return (
        <>
            <MoreVert onClick={handleClick}/>
            <Menu
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                transformOrigin={{vertical: "top", horizontal: "right"}}
            >
                <MenuItem className={classes.menuItem} onClick={() => {
                    handleClose();
                    toggleDrawer()
                }}>Profile</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"
                        className={classes.logout}
                        onLogoutSuccess={onLogoutSuccess}
                    />
                </MenuItem>
            </Menu>
            <Drawer open={openDrawer} setOpen={setOpenDrawer}/>

        </>
    );
};

export default HeaderMenu;
