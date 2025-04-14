# Usa una imagen base de Node
FROM node:20

# Instala pnpm
RUN npm install -g pnpm

# Clona el repositorio de GitHub desde la rama "main"
RUN git clone --branch main https://github.com/Leuis-dev/MateoTutor-RLH.git /MTutor

# Establece el directorio de trabajo en el proyecto clonado
WORKDIR /MTutor

# Instala las dependencias del proyecto en la carpeta "node_modules", usando pnpm
RUN pnpm install

# Expone el puerto 3000 para acceder al servidor de desarrollo (LocalHost)
EXPOSE 3000

# Comando para iniciar el servidor de desarrollo
CMD ["npm", "run", "dev"]
