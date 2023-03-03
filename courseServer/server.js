
const express = require('express');
const bodyParser = require('body-parser');

const courseRouter = require('./routes/course')


const cors = require('cors')


const app = express();

const morgan = require('morgan');
const env =require('dotenv').config();

app.use(cors())


app.use(morgan('tiny'));

const PORT = process.env.PORT||5000;

app.use(bodyParser.json());



//Port
app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`));


//routes
app.use('/',courseRouter)