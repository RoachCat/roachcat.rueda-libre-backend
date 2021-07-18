const options = {
    definition:{
        openapi: "3.0.0",
        info:{
            title: "Rueda Libre",
            version: "1.0.0",
            description: "Rueda Libre API documentation"
        },
        servers: [
            {
                url: "http://localhost:3000"
            },
            {
                url: "https://rueda-libre-backend.herokuapp.com"
            }
        ],
    },
    apis: ["./components/products/network.js"]
    
}

module.exports = options