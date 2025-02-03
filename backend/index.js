import express, { json } from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js';

const app = express();
app.use(json())

app.use('/api/user', userRouter)

const dbUrl = "mongodb+srv://sridharshany2001:BvjmcIXPZ1wQlwTr@cluster0.cu4ho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(dbUrl)
.then(()=>{
    console.log('Connected to database');
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
    console.log('Hello from backend');
})