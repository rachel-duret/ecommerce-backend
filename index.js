const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const morgan = require('morgan');
dotenv.config();

// @ts-ignore
mongoose.connect(process.env.DB_URL)
  .then(()=>{
      console.log('Connect to mongoodb!');
  })
  .catch((err)=>{
      console.log('Connect to mongoodb filed!'+err);
  });

  app.use(express.json());
  app.use(morgan('combined'))
  app.use('/api/auth', authRoute);
  app.use('/api/users', userRoute);

app.listen(8000 || process.env.PORT,()=>{
    console.log("Server is running")
})