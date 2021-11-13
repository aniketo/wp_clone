import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import Login from "./account/Login";
import { AccountContext } from "../context/AccountProvider";
import { useContext } from "react";
import ChatBox  from "./ChatBox";

const useStyles = makeStyles({
  loginHeader: {
    height: 200,
    background: "#00bfa5",
    boxShadow: "none",
  },
  component: {
    background: "#dcdcdc",
    height: "100vh",
  },
});

const Messenger = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);

  return (
    <Box className={classes.component}>
      <AppBar className={classes.loginHeader}>
        <Toolbar></Toolbar>
      </AppBar>

      {account ? <ChatBox/> : <Login />}
    </Box>
  );
};

export default Messenger;
