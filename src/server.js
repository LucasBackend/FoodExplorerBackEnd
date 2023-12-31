require("dotenv/config")
require("express-async-errors");
const cors = require('cors')


const express = require('express');
const uploadConfig = require("./config/upload")

const app = express();
const router = require('./routes')
const AppError = require('./utils/App.Error')

app.use(cors())
app.use(express.json())
app.use(router)

app.use("/files",express.static(uploadConfig.UPLOADS_FOLDER));


app.use((error,request,response,next)=>{

  if(error instanceof AppError){
    response.status(error.statusCode).json({
      status:"error",
      message:error.message
    })
  }else{
    response.status(500).json({
      status:500,
      message:error.message
    })
  }


})

const PORT = process.env.PORT || 3333


app.listen(PORT,()=>{
  console.log(`Servidor ouvindo na porta ${PORT}`)
})