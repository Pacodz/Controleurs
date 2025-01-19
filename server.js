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

// Start server
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});

// Liste des élements à controler
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



// Liste des user
app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM users'; // Remplacez par votre table

    db.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête:', err);
            res.status(500).json({ error: 'Erreur du serveur' });
            return;
        }
        res.status(200).json(results);
    });
});



// Route POST pour insérer des données
app.post('/api/ajouter', (req, res) => {
    const { nom, age, email } = req.body; // Supposons que vous envoyez ces données depuis React

    const query = 'INSERT INTO utilisateurs (nom, age, email) VALUES (?, ?, ?)';
    db.query(query, [nom, age, email], (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Erreur lors de l\'insertion des données' });
        } else {
            res.status(200).send({ message: 'Données insérées avec succès', data: result });
        }
    });
});


// Creation nouveau rapport
app.post('/api/nouveaurapport', (req, res) => {
    const { date, id_user } = req.body; // Supposons que vous envoyez ces données depuis React

    let idReport 

    const query = 'INSERT INTO rapport (date, id_user) VALUES (?, ?)';
    db.query(query, [date, id_user], (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Erreur lors de la création du rapport' });
        } else {
            res.status(200).send({ message: 'Rapport créé avec succès', data: result });
        }

        idReport=result.insertId
    });




    // const query2 = 'INSERT INTO control (conforme, detail, id_element, intervention, id_rapport) VALUES (?, ?, ?, ?, ?)';
    // db.query(query2, [conforme, detail, id_element, intervention, id_rapport], (err, result) => {
    //     if (err) {
    //         res.status(500).send({ message: 'Erreur lors de l\'insertion de la ligne création du rapport' });
    //     } else {
    //         res.status(200).send({ message: 'Rapport créé avec succès', data: result });
    //     }
    // });


});


// Route pour l'insertion multiple
app.post('/api/insererElements', async (req, res) => {
    const { data1 } = req.body; // Les données envoyées depuis le frontend
   
    if (!Array.isArray(data1) || data1.length === 0) {
        return res.status(400).json({ message: 'Aucune donnée fournie' });
    }

    try {
        // Générer les placeholders pour les données
        const placeholders = data1.map(() => '(?, ?, ?, ?, ?)').join(', ');
        const values = data1.flat(); // Aplatir les valeurs
        console.log(values)
        // Exemple de requête
        const query = `INSERT INTO control (conforme, detail, id_elements, intervention, id_rapport) VALUES ${placeholders}`;
        // Exécuter la requête
        db.query(query, values);
        
        res.status(200).json({ message: 'Données insérées avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'insertion des données' });
    }
});



