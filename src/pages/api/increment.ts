// [1] Este archivo define un endpoint de API que incrementa un contador de Prometheus
// [2] cuando se hace clic en un botón. El contador se inicializa si no existe y se expone a través de un endpoint que devuelve las métricas en formato Prometheus.
// src/pages/api/increment.ts

import { Registry } from 'prom-client';

const client = require('prom-client');

const register: Registry = client.register;

let counter = register.getSingleMetric('button_clicks');
if (!counter) {
  counter = new client.Counter({
    name: 'button_clicks',
    help: 'Número de veces que se ha hecho clic en el botón',
  });

  register.registerMetric(counter);
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    counter.inc(); // Incrementa el contador
    res.status(200).json({ status: 'ok' });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}