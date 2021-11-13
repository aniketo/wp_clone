import User from "../model/User.js";


export const addUser =async (req, res) => {
    //console.log(req.body);

    console.log("DATA",req.body)

    try {
        const newUser=new User(req.body);
        await newUser.save(function(err){
            if(err){
                console.log(err);
                return;
            }

        });
        res.status(200).json("user saved successfully")

    }catch (e) {
        res.status(500).json(e);
    }
}

