import express from 'express'
import { PageHome } from '../pages/Home.js'
import { PageSomething } from '../pages/Something.js'
import {PageShop} from '../pages/Shop.js'
import { PageRegister } from '../pages/Register.js'
import { PageLogin } from '../pages/public/Login.js'
import {PageList} from '../pages/List.js'

export const publicRouter = express.Router();

publicRouter.get('/', (req, res) => res.send(new PageHome(req).render()))
publicRouter.get('/something', (req, res) => res.send(new PageSomething(req).render()))
publicRouter.get('/shop', (req, res) => res.send(new PageShop(req).render()))
publicRouter.get('/register', (req, res) => res.send(new PageRegister(req).render()))
publicRouter.get('/login', (req, res) => res.send(new PageLogin(req).render()))
publicRouter.get('/list', (req, res) => res.send(new PageList(req).render()))























