const express = require('express');
const odbc = require('odbc');
const app = express();
const PORT = 3000;

// change for odbc connection
const accessConnectionString = 'DSN=Microsoft Access Database;DBQ=path_to_your_database.mdb;';

async function queryDatabase(query) {
    const connection = await odbc.connect(accessConnectionString);
    const result = await connection.query(query);
    await connection.close();
    return result;
}

//sample code for database to webapp
app.get('/api/data', async (req, res) => {
    try {
        const data = await queryDatabase('SELECT * FROM your_table');
        res.json(data);
    } catch (error) {
        res.status(500).send('Database query error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


function newUser(username, password) {
    
    if (username.length <= 6) {
        
        if (database.includes(username)) {
            console.log("Username already taken");
            return false;
        } else {
            console.log("Username is valid");
        }
    } else {
        console.log("Invalid username");
        return false;
    }

    if (password.length <= 8) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8}$/;
        if (passwordRegex.test(password)) {
            console.log("Password is valid");
            return true;
        } else {
            console.log("Invalid password");
            return false;
        }
    } else {
        console.log("Invalid password length");
        return false;
    }
}


// microsoft access design ui for business owner dashboard and metrics
// online orders using vercel hosting
// webapp(cashier access and owner) > api (webhook or query database) > ms access(database (owner access)) 
// online inventory 
