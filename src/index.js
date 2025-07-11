import express from 'express'
import { PageError } from './pages/public/Error.js'
import { publicApiRouter } from './routes/publicApiRouter.js'
import { PORT } from './env.js'
import { publicRouter } from './routes/publicRouter.js'
import { cookieParser } from './middleware/cookieParser.js'
import { isAdmin } from './middleware/isAdmin.js'
import { adminPageRouter } from './routes/adminPageRouter.js'
import { adminApiRouter } from './routes/adminApiRouter.js'

const app = express()

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser);
app.use(userData);


app.use('/', publicRouter);
app.use('/api', publicApiRouter);
app.use('/admin', isAdmin, adminPageRouter);
app.use('/api/admin', isAdmin, adminApiRouter);


app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).send('Server error');
});

app.get('*error', (req, res) => res.send(new PageError().render()))



app.listen(PORT, () => {
    console.log(`WEB URL: http://localhost:${PORT}`);
});








