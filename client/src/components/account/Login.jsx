import React from "react";
import { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import  {addUser} from "../../service/api";
import {
  Dialog,
  withStyles,
  Box,
  Typography,
  makeStyles,
  List,
  ListItem,
} from "@material-ui/core";
import { AccountContext } from "../../context/AccountProvider";
import { clientId } from "../../constants/data";

const useStyle = makeStyles({
  component: { display: "flex" },
  leftComponent: {
    padding: "56px 0 56px 56px",
  },
  qrCode: {
    height: 264,
    width: 264,
    padding: "50px",
    margin: "50px",
  },
  title: {
    fontSize: 26,
    marginBottom: 25,
    color: "#525252",
    fontFamily:
      "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
    fontWeight: 300,
  },
  list: {
    "& > *": {
      fontSize: 18,
      padding: 0,
      marginTop: 10,
      lineHeight: "28px",
      color: "#4a4a4a",
    },
  },
});

const style = {
  dialogPaper: {
    height: "95%",
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: "100px",
    borderRadius: 0,
    overflow:"hidden"
  },
};

const Login = ({ classes }) => {
  const classname = useStyle();
  const qrurl = "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg";
  const { account, setAccount } = useContext(AccountContext);

  const onLoginSuccess =async (res) => {
    console.log("login Success");
    setAccount(res.profileObj);
   await addUser(res.profileObj)
  };
  const onLoginFailure = () => {
    console.log("login Failure");
  };

  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Typography className={classname.title}>
            To use whatsapp on your computer:
          </Typography>
          <List className={classname.list}>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>
              2. Tap Menu or Settings and Select Linked Devices
            </ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </List>
        </Box>
        <Box  style={{position:"relative"}}>
          <img src={qrurl} alt="qr" className={classname.qrCode} />
          <Box style={{position:"absolute", top :"45%",left:"45%"}}>
            <GoogleLogin
              clientId={clientId}
              buttonText=""
              isSignedIn={true}
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
            />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(Login);
