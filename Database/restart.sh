# Verifica si la carpeta /data/db existe en el host
if [ ! -d "./data" ]; then
  # Crea la carpeta /data/db en el host
  echo "Creando carpeta /data en el host"
  mkdir data
fi

docker stop contenedor_mongo_docker
docker rm contenedor_mongo_docker
docker rmi imagen_mongo_mockdata
echo "Termine el stop.sh"

#Contenedor: docker run -d --name contenedor-mongo-docker -p 8080:8080 mongo:latest

# Construye la imagen de Docker
docker build -t imagen_mongo_mockdata .
echo "Termine el build.sh"

# Ejecuta un contenedor de Docker con la carpeta /data/db montada como volumen
docker run -d -p 27017:27017 -v "$(pwd)/data:/data" --name contenedor_mongo_docker imagen_mongo_mockdata
echo "Termine el run.sh"

#cargar los datos
docker exec -it contenedor_mongo_docker mongoimport --db pedro --collection datos --file /data/usuarios.json --jsonArray --upsert --upsertFields email