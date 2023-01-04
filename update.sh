#update usuarios
docker exec -it contenedor_mongo_docker mongoimport --db pedro --collection datos --file /data/usuarios.json --jsonArray --upsert --upsertFields email