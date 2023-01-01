FROM nginx
RUN mkdir -p /web/logs
ADD dist/ dist /web/dist/
