#FROM es la imagen base de la que arranco.
FROM mongo:latest
COPY setup.sh .
RUN mkdir -p /data
RUN chown -R mongodb:mongodb /data
VOLUME /data
#Comando que se va a ejecutar cada vez que corra el repositorio.
CMD ["mongodb", "setup.sh"]