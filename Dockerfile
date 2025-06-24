FROM nginx:alpine

# Copy static files
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

# Add nginx config for better caching
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    location / { \
        try_files $uri $uri/ =404; \
        add_header Cache-Control "no-cache, must-revalidate"; \
    } \
    location ~* \.(css|js)$ { \
        add_header Cache-Control "public, max-age=31536000"; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80