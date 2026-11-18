FROM node:alpine AS build

WORKDIR /app

COPY package*.json ./

# Install Angular CLI
RUN npm install -g @angular/cli

# Clean install dependencies
RUN npm ci

COPY . .

RUN ng build

RUN ls -la /app/dist/frontend-service/browser/

FROM nginx:alpine AS runner

COPY --from=build /app/dist/frontend-service/browser /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]