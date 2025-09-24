
## Etapa build
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Etapa nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist/hola-angular /usr/share/nginx/html
#EXPOSE 80
##COPY nginx.config /etc/nginx/conf.d/default.conf
