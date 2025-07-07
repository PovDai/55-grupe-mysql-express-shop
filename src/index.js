import express from 'express'
import { PageError } from './pages/Error.js'
import { publicApiRouter } from './routes/publicApiRouter.js'
import { PORT } from './env.js'
import { publicRouter } from './routes/publicRouter.js'

const app = express()


app.use(express.static('public'));
app.use(express.json());


app.use('/', publicRouter);
app.use('/', publicApiRouter);

app.get('*error', (req, res) => res.send(new PageError().render()))



app.listen(PORT, () => {
    console.log(`WEB URL: http://localhost:${PORT}`);
});

