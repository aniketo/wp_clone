import {Box, makeStyles, Typography} from "@material-ui/core";
import {useContext} from "react";
import {AccountContext} from "../../context/AccountProvider";


// vars
const useStyles = makeStyles({
    imageContainer: {
        display: "flex",
        justifyContent: "center",
    },
    displayPicture: {
        width:200,
        height:200,
        borderRadius:"50%",
        padding:"18px 0"
    },
    nameContainer:{
        background:"#FFFFFF",
        padding:"12px 30px 2px",
        boxShadow:"0 1px 3px rgba(0,0,0,0.08)",
        "& :first-child":{
            fontSize:14,
            color:"#009688",

        },
        "& :last-child":{

            color:"#4a4a4a",
            margin:"14px 0"

        }
    },
    description:{
        padding:"10px 20px 28px 30px",
        "& > *":{

           fontSize:12,
            color:"rgba(0, 0, 0, 0.45)"

        }

    }


})

// function
const Profile = () => {
    const {account} = useContext(AccountContext);
    const classes = useStyles();


    return (
        <>
            <Box className={classes.imageContainer}>
                <img src={account.imageUrl} className={classes.displayPicture} alt="image placeholder"/>
            </Box>
            <Box className={classes.nameContainer}>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </Box>
            <Box className={classes.description}>
                <Typography>This is not your username or pin.This name will be visible to your WhatsApp contacts</Typography>
            </Box>
            <Box className={classes.nameContainer}>
                <Typography>About</Typography>
                <Typography>Hey there ! I am using WhatsApp</Typography>
            </Box>
        </>
    )
}
export default Profile;
