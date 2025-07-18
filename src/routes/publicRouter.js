import express from 'express';
import { PageHome } from '../pages/public/Home.js';
import { PageSomething } from '../pages/public/Something.js';
import { PageShop } from '../pages/public/Shop.js';
import { PageRegister } from '../pages/public/Register.js';
import { PageLogin } from '../pages/public/Login.js';
import { PageList } from '../pages/public/List.js';

export const publicRouter = express.Router();

publicRouter.get('/',(req,res)=>res.send(new PageHome(req).render()))
publicRouter.get('/something', (req, res) => res.send(new PageSomething(req).render()))
publicRouter.get('/shop', (req, res) => res.send(new PageShop(req).render()))
publicRouter.get('/register', (req, res) => res.send(new PageRegister(req).render()))
publicRouter.get('/login', (req, res) => res.send(new PageLogin(req).render()))
publicRouter.get('/list', (req, res) => res.send(new PageList(req).render()))























