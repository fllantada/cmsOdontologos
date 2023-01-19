import { MongoClient } from "mongodb";


async function start() {
  const db = await connectMongo();

}

start();

export async function connectMongo() {
  const url = "mongodb://localhost:27017";
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });

    const db = client.db("DBprueba");
    console.log("Conectado a MongoDB")
    return db;
  } catch (error) {
    console.error(error);
  }
}