import User from "../model/User.js";


export const addUser = async (req, res) => {
    //console.log(req.body);

    //console.log("DATA",req.body)
    let exist = await User.findOne({googleId: req.body.googleId});

    if (exist) {
        res.status(200).json("user already exist");
        return;

    }

    try {
        const newUser = new User(req.body);
        await newUser.save(function (err) {
            if (err) {
                console.log(err);
                return;
            }

        });
        res.status(200).json("user saved successfully")

    } catch (e) {
        res.status(500).json(e);
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users)
    } catch (e) {
        res.status(500).json(e);
    }
}