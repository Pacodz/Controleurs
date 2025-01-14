const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Remplacez par votre mot de passe MySQL
    database: 'controler_egsa', // Remplacez par le nom de votre base de données
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

// API route to get data
app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM elements'; // Remplacez par votre table

    db.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête:', err);
            res.status(500).json({ error: 'Erreur du serveur' });
            return;
        }
        res.status(200).json(results);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
