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





app.get('/api/users', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        console.error('Erreur MySQL :', error);
        res.status(500).send('Erreur interne du serveur');
    }
});






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

// suppriession rapport


app.delete('/api/delete/:num', async (req, res) => {
    const id = req.params.num;
    const query = 'DELETE FROM rapport WHERE id = ?';
    const query2 = 'DELETE FROM control WHERE id_rapport = ?';
    console.log(req.params.num)

    try {

        const [result] = await pool.query(query, [id])
        console.log(result)
        const [result2] = await pool.query(query2, [id])

        res.status(200).send({
            message: `Rapport supprimé avec succès avec succès.`,
            deletedReport: result,
        });


    } catch (error) {
        return res.status(500).json({ error: err.message });
    }




});






// Endpoint pour insérer plusieurs lignes
app.post('/api/insererElements', async (req, res) => {
    try {
        // Les données à insérer sont attendues dans le body de la requête
        const data = req.body.data1;

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







// Chargement rapport

app.get('/api/rapport/:currentReport', async (req, res) => {

    const id = req.params.currentReport;
    const query = 'SELECT Nom AS élements, Conforme, detail, photo, intervention  FROM control INNER JOIN elements ON control.id_elements=elements.id WHERE control.id_rapport=?'

    try {
        const [rows] = await pool.query(query, [id]);
        res.json({ message: 'Données du rapport chargés!', rows });
    } catch (error) {
        console.error('Erreur MySQL :', error);
        res.status(500).send('Erreur interne du serveur');
    }
});

