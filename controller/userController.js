import UserRepository from "../repositories/userRepository.js"
import { hash, compare} from "../utils/bcrypt.js"

export default class UserController {

    #repoUsers
    constructor() {
        this.#repoUsers = new UserRepository()
    }

    async getUsers(req,res) {
        let users = await this.#repoUsers.getUsers()
        if (users == null)
            return res.status(404).json({message: "No users found."})
        return res.status(201).json(users)
    }


    async createUser(req,res) {
        let {name, email, password} = req.body

        if (!name || !email || !password)
            return res.status(400).json({message: "The request body is not suitable!"})

        // Implementar a verificação de email.
        let passwordHash = await hash(password)
        if (!await this.#repoUsers.createUser(name, email, passwordHash))
            return res.status(404).json({message: "Error to create user!"})

        return res.status(201).json({message: "User created successfully!"})
    }
}