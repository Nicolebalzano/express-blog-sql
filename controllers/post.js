
import { myPosts } from "../data.js";
import connection from "../db.js";
// INDEX
const index = (req, res) => {
   console.log("index dei post")
   const sql = "SELECT * FROM posts";
   connection.query(sql, (err, results) => {
    if(err){
      console.log("errore");
    } else {
 res.json({
        data : results
    })
    }
   })
}
const show = (req, res) => {
    const postId = req.params.id;
  const post = myPosts.find(curPost => curPost.id === parseInt(postId))
  if(post === undefined){
    res.status(404);
    return res.json({
        error : "Post non trovato"
    })
  }
    res.json({
        data : post,
    })
}
const store =(req, res) => {
    const newPost = req.body; 
   const lastId = myPosts[myPosts.length - 1].id;
   newPost.id = lastId + 1;
   myPosts.push(newPost);
   res.status(201);
    res.json({
      data : newPost,
    })
}
const update = (req, res) => {
 const postId = req.params.id;
 const updatedPost = req.body;
 const post = myPosts.find((curPost) => curPost.id === parseInt(postId));
  if (!post) {
    return res.status(404).json({ error: "Post non trovato" });
  }
post.titolo = updatedPost.titolo;
post.contenuto = updatedPost.contenuto;
post.immagine = updatedPost.immagine;
post.tags = updatedPost.tags;
 res.json({
    data :post,
 })
}
const destroy =(req, res) => {
     const postId = req.params.id;
  const index = myPosts.findIndex(curPost => curPost.id === parseInt(postId))
   if(index === -1) {
    res.status(404);
  return  res.json({
        error: "Post non trovato"
    })
   }
   myPosts.splice(index, 1)
    res.sendStatus(204) 
}

    const postController = {
        index,
        show,
        destroy, 
        store, 
        update,
    }
    export default postController;