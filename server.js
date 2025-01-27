const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 3002;
const pool = require('./pool');


app.get('/your-route', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM your_table');
        res.json(rows);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send('Internal Server Error');
    }
});


// Middleware
app.use(cors());
app.use(express.json());

// Database connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '', // Remplacez par votre mot de passe MySQL
//     database: 'controler_egsa', // Remplacez par le nom de votre base de données
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Erreur de connexion à la base de données:', err);
//         return;
//     }
//     console.log('Connecté à la base de données MySQL');
// });

// Start server

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});

// Liste des élements à controler

app.get('/api/data', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM elements');
        res.json(rows);
    } catch (error) {
        console.error('Erreur MySQL :', error);
        res.status(500).send('Erreur interne du serveur');
    }
});



// app.get('/api/data', (req, res) => {
//     const query = 'SELECT * FROM elements'; // Remplacez par votre table

//     pool.query(query, (err, results) => {
//         if (err) {
//             console.error('Erreur lors de l\'exécution de la requête:', err);
//             res.status(500).json({ error: 'Erreur du serveur' });
//             return;
//         }
//         res.status(200).json(results);
//     });
// });


app.get('/api/users', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        console.error('Erreur MySQL :', error);
        res.status(500).send('Erreur interne du serveur');
    }
});




// Route POST pour insérer des données
app.post('/api/ajouter', (req, res) => {
    const { nom, age, email } = req.body; // Supposons que vous envoyez ces données depuis React
    const query = 'INSERT INTO utilisateurs (nom, age, email) VALUES (?, ?, ?)';

    pool.query(query, [nom, age, email], (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Erreur lors de l\'insertion des données' });
        } else {
            res.status(200).send({ message: 'Données insérées avec succès', data: result });
        }
    });
});


// // Creation nouveau rapport
// app.post('/api/nouveaurapport', (req, res) => {
//     const { date, id_user, zone } = req.body; // Supposons que vous envoyez ces données depuis React

//     let idReport

//     const query = 'INSERT INTO rapport (date, id_user, zone) VALUES (?, ?, ?)';
//     pool.query(query, [date, id_user, zone], (err, result) => {
//         if (err) {
//             res.status(500).send({ message: 'Erreur lors de la création du rapport' });
//         } else {
//             res.status(200).send({ message: 'Rapport créé avec succès', data: result });
//         }

//         idReport = result.insertId
//     });


//     // const query2 = 'INSERT INTO control (conforme, detail, id_element, intervention, id_rapport) VALUES (?, ?, ?, ?, ?)';
//     // db.query(query2, [conforme, detail, id_element, intervention, id_rapport], (err, result) => {
//     //     if (err) {
//     //         res.status(500).send({ message: 'Erreur lors de l\'insertion de la ligne création du rapport' });
//     //     } else {
//     //         res.status(200).send({ message: 'Rapport créé avec succès', data: result });
//     //     }
//     // });

// });

app.post('/api/nouveaurapport', async (req, res) => {
    let idReport

    try {

        // Les données à insérer sont attendues dans le body de la requête
        const { date, id_user, zone } = req.body;
        const data = [date, id_user, zone]

        if (!data || !Array.isArray(data)) {
            return res.status(400).send('Les données doivent être un tableau.');

        }

        // Requête SQL pour insertion multiple
        const query = 'INSERT INTO rapport (date, id_user, zone) VALUES (?,?,?)';


        // Exécution de l'insertion
        const [result] = await pool.query(query, data);
        idReport = result.insertId

        res.status(200).send({
            message: `Rapport créé avec succès.`,
            insertedRows: result,
        });
    } catch (error) {
        console.error('Erreur lors de l\'insertion multiple :', error);
        res.status(500).send('Erreur interne du serveur');
    }

});




// Route pour l'insertion multiple





// app.post('/api/insererElements', async (req, res) => {
//     const { data1 } = req.body; // Les données envoyées depuis le frontend

//     if (!Array.isArray(data1) || data1.length === 0) {
//         return res.status(400).json({ message: 'Aucune donnée fournie' });
//     }

//     try {
//         console.log(data1)
//         // Générer les placeholders pour les données
//         const placeholders = data1.map(() => '(?, ?, ?, ?, ?)').join(', ');
//         const values = data1.flat(); // Aplatir les valeurs
//         console.log(values)
//         // Exemple de requête
//         const query = `INSERT INTO control (conforme, detail, id_elements, intervention, id_rapport) VALUES ${placeholders}`;
//         // Exécuter la requête
//         pool.query(query, values);

//         res.status(200).json({ message: 'Données insérées avec succès' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Erreur lors de l\'insertion des données' });
//     }
// });

// Endpoint pour insérer plusieurs lignes
app.post('/api/insererElements', async (req, res) => {
    try {
        // Les données à insérer sont attendues dans le body de la requête
        const  data = req.body.data1;

        if (!data || !Array.isArray(data)) {
            return res.status(400).send('Les données doivent être un tableau.');
        }

        // Requête SQL pour insertion multiple
        const sql = 'INSERT INTO control (conforme, detail, id_elements, intervention, id_rapport) values ?';

        // Exécution de l'insertion
        const [result] = await pool.query(sql, [data]);

        res.status(200).send({
            message: `Insertion réussie.`,
            insertedRows: result.affectedRows,
        });
    }
    catch (error) {
        console.error('Erreur lors de l\'insertion multiple :', error);
        res.status(500).send('Erreur interne du serveur');
    }
});


// chargement rapports

app.get('/api/rapports', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT rapport.id AS Num, date, nom, prenom, zone FROM rapport inner JOIN users ON users.id=rapport.id_user;');
        res.json(rows);
    } catch (error) {
        console.error('Erreur MySQL :', error);
        res.status(500).send('Erreur interne du serveur');
    }
});


// app.get('/api/rapports', (req, res) => {
//     const query = 'SELECT rapport.id AS Num, date, nom, prenom, zone FROM rapport inner JOIN users ON users.id=rapport.id_user;' // Remplacez par votre table

//     pool.query(query, (err, results) => {
//         if (err) {
//             console.error('Erreur lors de l\'exécution de la requête:', err);
//             res.status(500).json({ error: 'Erreur du serveur' });
//             return;
//         }
//         res.status(200).json(results);
//     });
// });


// suppriession rapport


app.delete('/api/delete/:num', (req, res) => {
    const id = req.params.num;
    const query = 'DELETE FROM rapport WHERE id = ?';
    const query2 = 'DELETE FROM control WHERE id_rapport = ?';
    console.log(req.params.num)

    pool.query(query, [id], (err, result) => {
        console.log(result)

        if (err) {
            return res.status(500).json({ error: err.message });
        }
    });

    pool.query(query2, [id], (err, result) => {
        console.log(result)

        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Data deleted successfully!', result });
    });



});


// Chargement rapport

app.get('/api/rapport/:currentReport', async (req, res) => {

    const id = req.params.currentReport;
    const query = 'SELECT Nom AS élements, Conforme, detail, photo, intervention  FROM control INNER JOIN elements ON control.id_elements=elements.id WHERE control.id_rapport=?'

    try {
        const [rows] = await pool.query(query, [id]);
        console.log({ message: 'Données du rapport chargés!', rows })
        res.json({ message: 'Données du rapport chargés!', rows });
    } catch (error) {
        console.error('Erreur MySQL :', error);
        res.status(500).send('Erreur interne du serveur');
    }
});

// app.get('/api/rapport/:currentReport', (req, res) => {
//     const id = req.params.currentReport;

//     pool.query(query, [id], (err, result) => {
//         if (err) {
//             return res.status(500).json({ error: err.message });
//         }
//         res.json({ message: 'Données du rapport chargés!', result });
//     });



// });

// app.post('/api/insererElements', async (req, res) => {
//     const { data1 } = req.body; // Les données envoyées depuis le frontend

//     if (!Array.isArray(data1) || data1.length === 0) {
//         return res.status(400).json({ message: 'Aucune donnée fournie' });
//     }

//     try {
//         // Générer les placeholders pour les données
//         const placeholders = data1.map(() => '(?, ?, ?, ?, ?)').join(', ');
//         const values = data1.flat(); // Aplatir les valeurs
//         console.log(values)
//         // Exemple de requête
//         const query = ` INSERT INTO control (conforme, detail, id_elements, intervention, id_rapport) VALUES ${placeholders}`;
//         // Exécuter la requête
//         pool.query(query, values);

//         res.status(200).json({ message: 'Données insérées avec succès' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Erreur lors de l\'insertion des données' });
//     }
// });