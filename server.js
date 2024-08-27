const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const schoolRoutes = require('./schoolRoutes');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/schools', schoolRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
