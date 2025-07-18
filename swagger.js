import swaggerAutogen from 'swagger-autogen'

const outputJson = "./swagger-output.json"

const doc = {
    info: {
        title: "api-apoyo-seguros"
    },
    host: "localhost:3000"
}

const routes = [
    './routes/userRoute.js'
]

swaggerAutogen({openapi: '3.0.0', autoHeaders: false})(outputJson, routes, doc)
.then( async () => {
    await import('./server.js')
})