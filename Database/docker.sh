docker stop contenedor-mongo-docker
docker rm contenedor-mongo-docker
docker run -d --name contenedor-mongo-docker -p 8080:8080 mongo:latest
docker start contenedor-mongo-docker

docker build -t mongo-data .

docker volume create database

docker run -d -p 8080:8080 -v "$(pwd)/Database:/Database" --name contenedor-mongo-docker mongo:latest

