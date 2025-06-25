function errorHandler(err, req, res, next) {
    console.log("error", err)
    res.status(500);
    return res.json({
        error : "errore interno al server",
    })
}
export default errorHandler;