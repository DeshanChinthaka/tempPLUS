const express = require('express');
const cors = require('cors');
const tempRoutes = require('./routes/tempRoutes');

const app = express();
app.use(cors()); // Allow frontend to access API
app.use(express.json()); // Parse JSON bodies

app.use('/api', tempRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));