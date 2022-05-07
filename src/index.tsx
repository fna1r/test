import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model,
    
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          name: 'Clara',
          category: 'Cabelo',
          //createdAt: new Date('2023-08-05 09:00:00')
        },
        {
          id: 2,
          name: 'Marcelo',
          category: 'Barba',
          //dataa: new Date('2023-08-15 17:00:00')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return  this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
