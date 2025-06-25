import express from "express";
import { myPosts } from "../data.js";
import postController from "../controllers/post.js"
import checkPostExistMiddlware from "../middlewares/checkPostExistMiddlware.js";
const router = express.Router();
// INDEX
router.get("/", postController.index);
// SHOW
router.get("/:id", checkPostExistMiddlware,  postController.show)
// STORE
router.post("/", postController.store)
// UPDATE
router.put("/:id", checkPostExistMiddlware, postController.update)
// // DESTROY
router.delete("/:id", checkPostExistMiddlware, postController.destroy)
export default router;