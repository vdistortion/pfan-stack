# Stage 1: Build frontend
FROM node:23.11.1-alpine3.21 as build-stage
WORKDIR /app/
COPY ./package*.json .
RUN npm ci
COPY . .

RUN npm run build -- --output-path=dist/out --output-hashing=all

# Stage 2: Serve it using Ngnix
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist/out/browser/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
