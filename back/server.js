const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());


app.use (express.json());

app.use(express.static(path.join(__dirname, '../front')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server démarré sur http://localhost:${PORT}`));

