const express=require('express');
const mongoose=require('mongoose');
const app=express();
// app.use(bodyParser.urlencoded({ extended: true }));
const uri =
    "mongodb+srv://admin:c9403000981@firstcluster.4rc4s.mongodb.net/paynote?retryWrites=true&w=majority";

    try {
        // Connect to the MongoDB cluster
         mongoose.connect(
          uri,
          { useNewUrlParser: true, useUnifiedTopology: true },
          () => console.log(" Mongoose is connected")
        );
    
      } catch (e) {
        console.log("could not connect");
      }



app.listen(3000,()=>console.log("Server is on "));


app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})

app.get("/topay",function(req,res){
  res.sendFile(__dirname+"/topay.html");
})

app.get("/toreceive",function(req,res){
  res.sendFile(__dirname+"/toreceive.html");
})






