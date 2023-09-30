import { Router } from "express";
import { getArticles, postArticles, putArticles, deleteArticles, getArticle } from "../controllers/articles.controller.js";


const router = Router()

router.get('/articles', getArticles)

router.get('/articles/:id', getArticle)

router.post('/articles', postArticles)

router.patch('/articles/:id', putArticles)

router.delete('/articles/:id', deleteArticles)

export default router