require('dotenv').config();
module.exports={
    port: process.env.PORT,
    ip:process.env.IP,
    mongo:{
        uri:process.env.MONGO_URI,
         
    },
};
