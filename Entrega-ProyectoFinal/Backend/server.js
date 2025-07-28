const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const path = require('path');

app.use('/public-api', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'public-api.html'));
});


app.use('/api/products', productRoutes);

app.listen(process.env.PORT, () => {
    console.log(`🚀 Servidor escuchando en puerto ${process.env.PORT}`);
});
