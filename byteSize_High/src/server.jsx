const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 5000;

// Database setup
const pool = new Pool({
    connectionString: 'Ypostgres://iidgtwjt:r4RL5YkNWIUMYzigBHX3RFetMXPOKdZ4@chunee.db.elephantsql.com/iidgtwjt',
    ssl: {
        rejectUnauthorized: false
    }
});

app.get('/students', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM students');
        const students = result.rows;
        client.release();
        res.json(students);
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
