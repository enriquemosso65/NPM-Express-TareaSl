'use strict'                                //utilizar strict
const express = require('express')          //importar express de node modules
const app = express()                      //app llama a express

app.listen(3000, ()=>{                     //app escucha al puerto 3000
  console.log('Mi primer server corriendo en http://localhost:3000')
})
