FROM nginx
RUN mkdir -p /web/logs
COPY dist /web/
