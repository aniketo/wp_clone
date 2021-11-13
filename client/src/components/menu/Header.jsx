import { Box, makeStyles } from "@material-ui/core";
import { React, useContext,useState } from "react";
import { AccountContext } from "../../context/AccountProvider";

import ChatIcon from "@material-ui/icons/Chat";
import HeaderMenu from "./HeaderMenu";
import  Drawer from "../../components/drawar/InfoDrawar";

const useStyle = makeStyles({
  header: {
    height: 35,
    background: "#ededed",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: 37,
    height: 37,
    borderRadius: "50%",
  },
  icons: {
    marginLeft: "auto",
    "& > *": {
      marginLeft: 2,
      padding: 8,
      color: "#919191",
    },
    "& :first-child": {
      fontSize: 22,
      marginRight: 8,
      marginTop: 3,
    },
  },
});

const Header = () => {
  const { account } = useContext(AccountContext);
  const classes = useStyle();

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
      setOpen(true);

  };

  return (
    <>
      <Box className={classes.header}>
        <img
          src={account.imageUrl}
          onClick={() => toggleDrawer()}
          className={classes.avatar}
          alt="Display pic"
        />
        <Box className={classes.icons}>
          <ChatIcon />
          <HeaderMenu />
        </Box>
      </Box>
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
