const express = require('express');

const app = express();

app.use(express.static('test-sites'));
var current = new Date();
app.get('/', (req, res) => {
    res
        .status(201) // 201 = Created
        .set({
            'X-Custom-Header': "I'm a header value!",
            'Content-Type': 'text/html',

        })
        .send('<h1>Some HTML!</h1>'
        );

});

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});