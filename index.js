const express = require("express"); // import express library
const app = express();

// import the postgres library
const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "MIMIC",
    max: 20,
    port: 5432,
});

//get home /
//routing point
app.get("/", async (req, res) => {
    try {
        const admissionsData = await pool.query("SELECT * FROM admissions");
        res.send(admissionsData);
    } catch (err) {
        console.log(err);
    }
});

const PORT = 5000;

//listen
app.listen(PORT, () => {
    console.log("server is listening to 5000");
});
