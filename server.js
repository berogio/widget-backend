const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// Bonusdaten
const bonusData = [{
    id: 1,
    BigWin: 8000,
    DepositBonus: 300,
    AuthBonus: 12,
    summe: 11500,
}, ];
app.use(cors());
// API-Endpunkt für Bonusdaten
app.get('/api/bonusdata', (req, res) => {
    res.json(bonusData);
});

// Starten Sie den Server
app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});