# Imagen extremadamente ligera
FROM node:20-alpine

# Crear directorio
WORKDIR /app

# Copiar solo package.json para aprovechar el caché
COPY package*.json ./

# Instalar dependencias (solo producción)
RUN npm install --omit=dev

# Copiar el resto del proyecto
COPY . .

# Variables por defecto (Render las sobrescribe)
ENV PORT=4000
EXPOSE 4000

# Comando final
CMD ["node", "index.js"]
