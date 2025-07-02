PASOS A SEGUIR PARA IMPLEMENTAR MONITORIZACIÓN EN NUESTRA APP
Mediante el uso de grafana y prometheus


[1] Instalar las librerías necesarias para exponer las métricas en formato prometheus. Se ejecuta en consola:
	npm install prom-client
	o
	pnpm add prom-client (si tenemos instalado pnpm)

[2] Crear el archivo “metrics.ts” el cual sirve de endpoint para nuestra APP, y crear otro archivo “contador.ts” el cual hace uso del archivo “metrics.ts” para regristrar determinadas acciones en nuestra APP.
Ubicación de los archivos:
	src/pages/api/metrics.ts
	src/pages/api/increment.ts


[3] En la pagina que queramos implementar, por ejemplo:
	src/pages/pagina1.tsx:
Se implementa el siguiente código:

  const handleClick = async () => {
    await fetch('/api/increment', { method: 'POST' });
    setCount(count + 1);
  };

[4] Crear el archivo “docker-compose.yml” el cual sirve para levantar los servicios de Grafana y Prometheus usando Docker Compose.

[5] Crear el archivo “prometheus.yml” el cual sirve como configuración específica para "Prometheus".

4. Verifica que tu endpoint /api/metrics expone correctamente la métrica
	http://localhost:3000/api/metrics
	
Deberías ver algo como:
# HELP button_clicks Número de veces que se ha hecho clic en el botón
# TYPE button_clicks counter
button_clicks 3
