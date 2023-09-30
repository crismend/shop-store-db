import Express from "express";
import articlesRoutes from "./routes/articles.routes.js";
import indexRouter from "./routes/index.routes.js";


const app = Express()

app.use(Express.json())

app.use(indexRouter)
app.use('/api', articlesRoutes)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
  res.status(404).json({
    message: 'endpoint not found'
  })
})

export default app