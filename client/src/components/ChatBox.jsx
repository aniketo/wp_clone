import { Dialog ,Box,makeStyles} from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import Menu from './menu/Menu'
import React from 'react'

const style = {
    dialogPaper: {
      height: "95%",
      width:"91%",
      maxWidth: "100%",
      maxHeight: "100%",
   
      borderRadius: 0,
      overflow:"hidden"
    },
  };

  const useStyles=makeStyles({

    component:{
        display:"flex",

    },
    leftComponent:{
        minWidth:380,
          
    },
    rightComponent:{
        borderLeft:"1px solid rgba(0,0,0,0.14)",
          
    }

    
  });


const ChatBox = ({classes}) => {
    const classname=useStyles();

    return (
        <Dialog
        open={true}
        classes={{ paper: classes.dialogPaper }}
        BackdropProps={{ style: { backgroundColor: "unset" } }}
        >
           <Box className={classname.component}>
               <Box className={classname.leftComponent}>
                   <Menu/>
               </Box>
               <Box className={classname.rightComponent}>
                
               </Box>
           </Box>
        </Dialog>
    )
}

export default withStyles(style) (ChatBox);