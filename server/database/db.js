import mongoose from "mongoose";


const Connection = async (db_user, db_pass) => {
    const URL = `mongodb+srv://${db_user}:${db_pass}@chatapp.cpenl.mongodb.net/CHATAPP?retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Db connected Successful");


    } catch (error) {
        console.log("error while connecting to mongodb", error)
    }




}

export default Connection;
