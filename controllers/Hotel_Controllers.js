const Hotel_db=require('../models/Hotel_db');


// 1) Controller or Action  For  Inserting A New Record In database 
module.exports.create=function(req,res){

    Hotel_db.create({
        name:req.params.name,
        email:req.params.email
        
    },function(err,InsertedData){

            if(err)
            {
                console.log('Error Found In Inserting Data In database');
                return;
            }

            return res.json(200,{data:InsertedData});
    });
}



// 2) Controller or Action For  Updating A  Record In database 
module.exports.update=function(req,res){

    Hotel_db.findByIdAndUpdate(req.params.id,function(err,Record){

            if(err)
            {
                console.log('ERROR FOUND IN Update record');
                return;
            }

            // Remaining Task is here

    });
    


}


// 3) Controller or Action For  Reading A Single Record From database 

module.exports.read=function(req,res){

    Hotel_db.findOne({id:req.params.id},function(err,Record){

        if(err)
        {
            console.log("ERROR FOUND IN READ A SINGLE RECORD");
            return;
        }

         // THE LEFT WORKS IS HERE

    });
    


}


// 3) Controller or Action For  Deleting  A Single Record From database 
module.exports.delete=function(req,res){

    Hotel_db.deleteOne({id:req.params.id},function(err){
        if(err)
        {
            console.log("ERROR FOUND IN DELETING THE RECORD");
            return ;
        }

         // THE LEFT WORKS IS HERE


    });
    

}

// 3) Controller or Action For  Reading A Single Record From database 
module.exports.readall=function(req,res){

    Hotel_db.find({},function(err,Records){

        if(err)
        {
            console.log('ERROR FOUND IN Read ALL RECORS');
            return;
        }

        // THE LEFT WORKS IS HERE

    });
}