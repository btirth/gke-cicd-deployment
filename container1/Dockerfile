FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV DATA_DIR=/tirth_PV_dir
EXPOSE 3000
CMD ["node", "index.js"]
