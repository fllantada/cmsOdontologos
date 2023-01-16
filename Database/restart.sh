if [ ! -d "./data" ]; then
  mkdir data
fi

docker stop db_dentistas_container
docker rm db_dentistas_container
docker rmi db_dentistas_image

docker build db_dentistas_image .

docker run -d -p 27017:27017 -v "$(pwd)/data:/data" --name db_dentistas_container db_dentistas_image
echo "Carga exitosa"