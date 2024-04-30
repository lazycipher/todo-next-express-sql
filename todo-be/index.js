const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

app.use(cors())

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

sequelize.sync().then(() => {
    console.log('Database connected');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

app.use('/api', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
