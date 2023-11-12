const express = require('express');

const webpageRouter = require('./webpage-router');

const app = express();

app.use(webpageRouter);


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})