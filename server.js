const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const MongoClient = require('mongodb').MongoClient;
// had to URL encode the password bc it contained an '@' - VB
const url = "mongodb+srv://barnev:.mUNYTL8Ga.6q2%40@cluster0.pacdp.mongodb.net/lab5?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static(path.join(__dirname, './the1975/dist/the1975')));

app.get('/api', (req, res) => {
	MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("virginia_quiz2");
        dbo.collection("songs").find().toArray(function(err, result) {
					console.log(result);
					res.json(JSON.stringify(result));
					// res.send(path.join(__dirname, './the1975/src/assets/json/songs.json'));
					db.close();
        });
    });
});

app.listen( port, () => {
  console.log('Listening on *:3000');
});
