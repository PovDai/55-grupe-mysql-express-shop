import express from "express"
import { PageDashboard } from "../pages/admin/Dashboard.js"
import { PageCategories } from "../pages/admin/categories/Categories.js";
import { PageNewCategories } from "../pages/admin/categories/NewCategories.js";
import { PagePublishedCategories } from "../pages/admin/categories/PublishedCategories.js";
import { PageDraftCategories } from "../pages/admin/categories/DraftCategories.js";

export const adminPageRouter = express.Router();

adminPageRouter.get('/', (req, res) => res.send(new PageDashboard(req).render()));
adminPageRouter.get('/categories', (req, res) => res.send(new PageCategories(req).render()));
adminPageRouter.get('/categories/new', (req, res) => res.send(new PageNewCategories(req).render()));
adminPageRouter.get('/categories/published', (req, res) => res.send(new PagePublishedCategories(req).render()));
adminPageRouter.get('/categories/draft', (req, res) => res.send(new PageDraftCategories(req).render()));