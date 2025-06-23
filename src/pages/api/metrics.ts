// [1] Este archivo se utiliza para exponer métricas de "Prometheus" en "http://localhost:3000/api/metrics"
// [2] Se asegura de que las métricas no se dupliquen en caso de recarga, y define un endpoint que devuelve las métricas en formato Prometheus.
// src/pages/api/metrics.ts

import { Registry } from 'prom-client';

const client = require('prom-client');

const register: Registry = client.register;

// Evita duplicar métricas en hot-reload
if (register.getSingleMetric('button_clicks') === undefined) {
  const buttonClicks = new client.Counter({
    name: 'button_clicks',
    help: 'Número de veces que se ha hecho clic en el botón',
  });

  register.registerMetric(buttonClicks);
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
}
