export default class UserEntity {
    
    #id
    #name 
    #email
    #password

    constructor(id, name, email, password) {
        this.#id = id
        this.#name = name
        this.#email = email
        this.#password = password
    }

    get id() {return this.#id}
    get name() {return this.#name}
    get email() {return this.#email} 
    get password() {return this.#password}

    set id(value) {this.#id = value}
    set name(value) {this.#name = value}
    set email(value) {this.#email = value}
    set password(value) {this.#password = value}
}