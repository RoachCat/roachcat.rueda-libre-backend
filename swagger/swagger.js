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
                url: "https://app-bf57af81-5b5b-4e2c-b8c5-ace55df91723.cleverapps.io"
            }
        ],
    },
    apis: ["./components/products/network.js"]
}

module.exports = options