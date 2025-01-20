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
    const { date, id_user, zone } = req.body; // Supposons que vous envoyez ces données depuis React

    let idReport

    const query = 'INSERT INTO rapport (date, id_user, zone) VALUES (?, ?, ?)';
    db.query(query, [date, id_user, zone], (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Erreur lors de la création du rapport' });
        } else {
            res.status(200).send({ message: 'Rapport créé avec succès', data: result });
        }

        idReport = result.insertId
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


// chargement rapports


app.get('/api/rapports', (req, res) => {
    const query = 'SELECT rapport.id AS Num, date, nom, prenom, zone FROM rapport inner JOIN users ON users.id=rapport.id_user;' // Remplacez par votre table

    db.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête:', err);
            res.status(500).json({ error: 'Erreur du serveur' });
            return;
        }
        res.status(200).json(results);
    });
});

// suppriession rapport

app.delete('/delete/:num', (req, res) => {
    const id = req.params.num;
    const query = 'DELETE FROM rapport WHERE id = ?';
    const query2 = 'DELETE FROM control WHERE id_rapport = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
    });

    db.query(query2, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Data deleted successfully!', result });
    });



});


// Chargement rapport

app.get('/api/rapport/:currentReport', (req, res) => {
    const id = req.params.currentReport;
    const query = 'SELECT Nom AS élements, Conforme, detail, photo, intervention  FROM control INNER JOIN elements ON control.id_elements=elements.id WHERE control.id_rapport=?'

    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Données du rapport chargés!', result });
    });



});
