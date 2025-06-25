import { myPosts } from "../data.js";
function checkPostExistMiddlware(req, res, next){
    const postId = req.params.id;
    const postIndex = myPosts.findIndex((curPost) => curPost.id === postId)
    if(postId === -1) {
        res.status(404)
        return res.json({
            error :"post non trovato",
        })
    } else {
        req.postIndex === postIndex;
        next();
    }

}
export default checkPostExistMiddlware;