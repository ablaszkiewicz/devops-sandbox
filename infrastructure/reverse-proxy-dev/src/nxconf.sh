#!/bin/sh
out="/etc/nginx/conf.d/default.conf"
domain="ablaszkiewicz.pl"
frontend_path="http://192.168.1.104:4000"
backend_path="http://192.168.1.104:4001/"

echo -n > "$out"

config=$(cat <<EOF
server {
    listen       80;
    listen  [::]:80;
    server_name  $domain;

    location = / {
        proxy_pass $frontend_path;
        proxy_set_header Host \$host;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection \$connection_upgrade;
        proxy_ssl_name \$host;
        proxy_ssl_server_name on;
        proxy_ssl_verify off;
        proxy_ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;
        proxy_ssl_session_reuse off;
        proxy_set_header X-Forwarded-For \$remote_addr;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_read_timeout 120;
        proxy_send_timeout 120;
        proxy_connect_timeout 120;
    }

    location /api/ {
        proxy_pass $backend_path;
        proxy_set_header Host \$host;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection \$connection_upgrade;
        proxy_ssl_name \$host;
        proxy_ssl_server_name on;
        proxy_ssl_verify off;
        proxy_ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;
        proxy_ssl_session_reuse off;
        proxy_set_header X-Forwarded-For \$remote_addr;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_read_timeout 120;
        proxy_send_timeout 120;
        proxy_connect_timeout 120;
    }
}
EOF
)

echo "$config" >> "$out"