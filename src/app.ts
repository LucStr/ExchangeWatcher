/*console.error('APPP');

import { exchanges } from 'ccxt';

import * as ccxt from 'ccxt';

console.log(exchanges.length, ccxt.exchanges.length);
*/

import * as express from 'express';
const app = express();

import * as mustacheExpress from 'mustache-express';
declare var __dirname;
let viewFolder = __dirname + '/../views';

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress(viewFolder, '.mustache'));

app.set('view engine', 'mustache');
app.set('views', __dirname + '/../views');
app.set("layout", "layout");


app.get('/', (req, res) => res.render('test', {name: 'Luca'})

//.send('Hello World!')
);



app.listen(3000, () => console.log('Example app listening on port 3000!'));
