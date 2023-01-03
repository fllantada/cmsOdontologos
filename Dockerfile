FROM mongo:latest
COPY start.sh .
RUN mkdir -p /data
RUN chown -R mongodb:mongodb /data
VOLUME /data
CMD ["bash", "start.sh"]
