import express from 'express'

export const publicRouter = express.Router();

publicRouter.get('/', (req, res) => res.send(new PageHome().render()))
publicRouter.get('/something', (req, res) => res.send(new PageSomething().render()))
publicRouter.get('/shop', (req, res) => res.send(new PageShop().render()))
publicRouter.get('/register', (req, res) => res.send(new PageRegister().render()))
publicRouter.get('/login', (req, res) => res.send(new PageLogin().render()))
publicRouter.get('/list', (req, res) => res.send(new PageList().render()))
publicRouter.get('/error', (req, res) => res.send(new PageError().render()))






















