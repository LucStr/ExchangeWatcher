console.error('APPP');

import { exchanges } from 'ccxt';

import * as ccxt from 'ccxt';

console.log(exchanges.length, ccxt.exchanges.length);


import * as express from 'express';
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))