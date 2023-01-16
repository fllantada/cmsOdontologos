const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://usuarioprueba:ImMo9NtNl1cdbWeu@cluster0.iuzwtmv.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  if(err) throw err;
    console.log("Conectado a MongoDB");
  });