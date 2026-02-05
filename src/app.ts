import express from "express"
import cors from "cors"
import { postRouter } from "./modules/post/post.router";

const app = express();

app.use(
  cors({
      origin: process.env.APP_URL || "http://localhost:3000",
      credentials:true
  }),
);

app.use(express.json())

app.use('/posts', postRouter)


app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Prisma Server is Running ... ... ..."
    })
})

export default app;