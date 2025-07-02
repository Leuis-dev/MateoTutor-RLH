-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Alternativa 1:

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

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Alternativa 2:

PASOS A SEGUIR PARA IMPLEMENTAR MONITORIZACIÓN EN NUESTRA APP
Mediante el uso de grafana y prometheus


[1] Instalar las librerías necesarias para exponer las métricas en formato prometheus. Se ejecuta en consola:
	npm install prom-client
	o
	pnpm add prom-client (si tenemos instalado pnpm)

[2] En el directorio "temporal-frontend/src\app/api/" Crear la carpeta “increment” con el archivo "route.js" (sirve de endpoint para nuestra APP), y crear otra carpeta "monitoreo" con el archivo “route.js” el cual hace uso del archivo “route.js” dentro de de la carpeta "monitoreo" para regristrar determinadas acciones en nuestra APP.
Ubicación de los archivos:
	temporal-frontend/src\app/api/increment/route.js
	temporal-frontend/src\app/api/monitoreo/route.js

[3] En la pagina que queramos implementar, por ejemplo:
	temporal-frontend/src\app/publications/page.jsx

Se implementa el siguiente código:

// PARA GRAFANA Y PROMETHEUS ###############################
  try {
    await fetch('/api/increment', { method: 'POST' });
  } catch (error) {
        console.error('Error al reportar carga de pagina a Prometheus:', error);
  }
// FIN DE GRAFANA Y PROMETHEUS #############################

[4] Crear el archivo “docker-compose.yml” el cual sirve para levantar los servicios de Grafana y Prometheus usando Docker Compose.

[5] Crear el archivo “prometheus.yml” el cual sirve como configuración específica para "Prometheus".

[6] Levantar grafana y prometheus; estando en la carpeta "Monitoreo", ejecutar:
	docker compose up -d

[7] Abrir la pagina de Grafana:
	a) Connections -> Data Sources:

	Name: "Temporal"
	Prometheus server url: http://prometheus:9090

	b) Dashboards -> New Dashboard -> Add visualization -> Data source = "Temporal" -> Metrics Browser = refresh_page


[8] Verifica que tu endpoint "/api/metrics" expone correctamente la métrica
	http://localhost:3002/api/metrics
	
Deberías ver algo como:
# HELP button_clicks Número de veces que se ha hecho clic en el botón
# TYPE button_clicks counter
button_clicks 3
