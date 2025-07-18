import Database from "../database/database.js"
import UserEntity from "../entities/userEntity.js"

export default class UserRepository {

    #database
    constructor() {
        this.#database = new Database()
    }

    async getUsers() {
        let sql = `SELECT * FROM users`
        let rows = await this.#database.ExecutaComando(sql)
        
        let users = []
        for (let i=0; i < rows.length; i++) {
            let row = rows[i]
            users.push({
                id: row['user_id'],
                name: row['user_name'],
                email: row['user_email'],
            })
        }
        return users
    }

    async createUser(name, email, password) {
        let sql = `INSERT INTO users (user_name, user_email, user_password) VALUES (?,?,?)`
        let values = [name, email, password]
        let result = await this.#database.ExecutaComandoNonQuery(sql,values)
        return result
    }

}