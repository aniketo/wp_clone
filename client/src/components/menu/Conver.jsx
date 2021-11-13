// @flow
import * as React from 'react';
import {Box, Typography,makeStyles} from "@material-ui/core";


// component import

const useStyles=makeStyles({
    displayPicture:{
        width:50,
        height:50,
        borderRadius:"50%",
        padding:"0 14px"
    },
    component:{
        display:"flex",
        height:40,
        padding:"13px 0",
        cursor:"pointer"
    }
})

export function Conver({user}) {
    const classes=useStyles();

    return (
        <Box className={classes.component}>
            <Box>
                <img src={user.imageUrl} className={classes.displayPicture} alt="display picture"/>
            </Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Box>
    );
};