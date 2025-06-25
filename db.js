import mysql from "mysql2"

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ROOTROOT",
    database: "blog.db"
})
connection.connect((err)=> {
if(err) throw err;
console.log("connected to MySql")
})
export default connection