
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path'
import userRoutes from './routes/user.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use('/', userRoutes);

const CONNECTION_URL = "mongodb+srv://raman:raman@raman.jiouq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";;
const PORT = process.env.PORT|| 5000;

mongoose.connect(  process.env.MONGODB_URI || CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.set('useFindAndModify', false);

if(process.env.NODE_ENV === 'production')
{ 
  app.use(express.static('../my-app/build'));
 app.get('*' , (req , res)=>{
   res.sendFile(path.join(__dirname + '../myapp/build/index.html'))
 })
}

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
