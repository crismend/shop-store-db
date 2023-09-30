import Express from "express";
import cors from "cors";
import articlesRoutes from "./routes/articles.routes.js";
import indexRouter from "./routes/index.routes.js";


const app = Express()

app.use(Express.json())
app.use(cors())

app.use(indexRouter)
app.use('/api', articlesRoutes)



app.use((req, res, next) => {
  res.status(404).json({
    message: 'endpoint not found'
  })
})

export default app