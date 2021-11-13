import React, {useEffect,useState,useContext} from 'react'
import {getUsers} from "../../service/api";
import {Box, makeStyles} from "@material-ui/core";
import {Conver} from "./Conver";
import {AccountContext} from "../../context/AccountProvider";



const useStyles=makeStyles({
    component:{
        height:"81vh",
        overflow:"overlay"
    }
})
const Conversations = ({text}) => {

    const {account}= useContext(AccountContext);
    const classes=useStyles();

    const [users,setUsers]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
           const data= await getUsers();
         const filterdata=  data.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()))
           setUsers(filterdata);

        }
        fetchData();
    },[text])
    return (
        <Box className={classes.component}>
            {
                users.map(user=>(
                    user.googleId!==account.googleId &&
                   <Conver user={user}/>
                ))
            }
        </Box>
    )
}

export default Conversations;