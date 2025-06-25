
import { myPosts } from "../data.js";
import connection from "../db.js";
// INDEX CON SQL
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
// SHOW CON SQL
const show = (req, res) => {
    const postId = req.params.id;
  const sql = "SELECT * FROM posts WHERE id = ?";
  connection.query(sql, [postId], (err, results) => {
    if(err){
      console.log("error")
    }else{
      if(results.length == 0){
        res.status(404).json({
          error : "post non trovato",
        })
        }else{
          res.status(200).json({
            data : results[0],
          })
    }
  }
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
     const sql = "DELETE FROM posts WHERE id = ?"
     connection.query(sql, [postId], (err, results) => {
      if(err){
        console.log("errore")
      }else{
        console.log("results")
        res.sendStatus(204)
      }
     })
}

    const postController = {
        index,
        show,
        destroy, 
        store, 
        update,
    }
    export default postController;