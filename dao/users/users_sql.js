
module.exports = {
    addUser:"INSERT INTO users (headerImg, username, password, addres, sex, mobile, email) VALUES (?, ?, ?, ?, ?, ?, ?);",
    deleteUser: "DELETE FROM users WHERE id = ?;",
    queryUser: "SELECT * FROM users WHERE id = ?;",
}
