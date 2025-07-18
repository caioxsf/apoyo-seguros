import bcrypt from 'bcryptjs'


export async function hash(password) {
    return await bcrypt.hash(password, 10)
}

export async function compare(password, hash) {
    return await bcrypt.compare(password, hash)
}
