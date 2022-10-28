FROM nginx:latest
COPY ./158258.zip /usr/share/nginx/html/web.zip
RUN apt update && apt-get install unzip \ 
    && rm -rf /usr/share/nginx/html/index.html \
    && unzip -o ./usr/share/nginx/html/web.zip -d /usr/share/nginx/html/ \
    && rm -rf /usr/share/nginx/html/web.zip
