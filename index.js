const express=require('express');                               //Using the Express Library
const port=8000;                                                //Port Number On which Server will Run


const app=express();                                           //Creating the Express Object

app.set('view engine','ejs');                                 //Setting Up the view Engine
app.set('views','./views');                                   //Setting up The Views Folder

const data_base=require('./config/mongoose_configuration');   //Importing the Database Connectivity

app.use('/',require('./routes/Hotel_Routes'));                //This landing Route for The user

app.use(express.urlencoded());                                //For the POST type of request


app.listen(port,function(err){                           
                                                                // Check the Server state it is running or NOt

    if(err)
    {
        console.log("OOPS  ! SERVER NOT STARTED");
    }

    console.log('SERVER IS STARTING UP SUCCESSFULLY')

});