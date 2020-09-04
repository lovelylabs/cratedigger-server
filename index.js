console.log('Hello, World!')

const express = require('express')

const app = express()

app.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
})
