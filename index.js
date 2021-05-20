const express = require('express')
const app = express()
const morgan = require('morgan');
const {mongoose} =require('./database');
const cors = require('cors'); 
//settings  
app.set('port',3000);
//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:"http://localhost:4200"}));
//routes
app.use('/api/persona',require('./routes/persona.routes'));
app.use('/api/provincia',require('./routes/provincia.routes'));
app.use('/api/ciudad',require('./routes/ciudad.routes'));
app.use('/api/vacuna',require('./routes/vacuna.routes'));
app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${app.get('port')}`)
})