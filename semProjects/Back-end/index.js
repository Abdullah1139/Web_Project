import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
const app= express();
const url="mongodb+srv://Abdullah:abd123@cluster0.2lu0zix.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected"));
app.listen(1139);

app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended:true}))