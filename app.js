import express from "express";
import postsRouter from "./routers/posts.js";
import errorHandler from "./middlewares/errorHandler.js";
import routeNotFound from "./middlewares/routeNotFound.js";
const app = express();
const port = 3000; 

app.use(express.static("public"));
app.use(express.json());
app.get("/", (req, res) => {
    console.log("Benvenuti nelle API dei posts")
})
app.use("/posts", postsRouter);

 app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log("Server in ascolto")
})