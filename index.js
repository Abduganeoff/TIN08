const express = require('express');
const bodyParser = require('body-parser');
const layout = require('./layout');
const {check, validationResult} = require('express-validator');
const { requireFirstInput, requireSecondInput, requireDevisionSecondInput } = require('./validator');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/add',(req, res) => {
     return res.send(layout({}));
});

app.post('/add', [requireFirstInput, requireSecondInput], (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.send(layout({errors}))
    }

    const { firstInput, secondInput } = req.body;

    const result = parseFloat(firstInput) + parseFloat(secondInput);
    console.log(result);
    res.send(layout({result}));
});

app.get('/subtract', (req, res) => {
    return res.send(layout({}));
});


app.post('/subtract', [requireFirstInput, requireSecondInput], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.send(layout({ errors }))
    }

    const { firstInput, secondInput } = req.body;

    const result = parseFloat(firstInput) - parseFloat(secondInput);
    console.log(result);
    res.send(layout({ result }));
});

app.get('/multiply', (req, res) => {
    return res.send(layout(0));
});


app.post('/multiply', [requireFirstInput, requireSecondInput], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.send(layout({ errors }))
    }

    const { firstInput, secondInput } = req.body;

    const result = parseFloat(firstInput) * parseFloat(secondInput);
    console.log(result);
    res.send(layout({ result }));
});

app.get('/devide', (req, res) => {
    return res.send(layout(0));
});


app.post('/devide', [requireFirstInput, requireSecondInput], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.send(layout({ errors }))
    }

    const { firstInput, secondInput } = req.body;

    const result = parseFloat(firstInput) / parseFloat(secondInput);
    console.log(result);
    res.send(layout({ result }));
});


app.listen(3000, () => {
    console.log('Working...');
})