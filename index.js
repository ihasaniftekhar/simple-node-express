const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Hello, I'm learning node. Wow, I'm excited");
});

const users = [
    { id: 0, name: 'SHabana', email: 'Shabana@gmail.com', phone: "017199999999" },
    { id: 1, name: 'Shabroor', email: 'Shabana@gmail.com', phone: "017199999999" },
    { id: 2, name: 'Soniya', email: 'Shabana@gmail.com', phone: "017199999999" },
    { id: 3, name: 'Suchorita', email: 'Shabana@gmail.com', phone: "017199999999" },
    { id: 4, name: 'Srabonti', email: 'Shabana@gmail.com', phone: "017199999999" },
    { id: 5, name: 'SHabana', email: 'Shabana@gmail.com', phone: "017199999999" },
    { id: 6, name: 'SHabana', email: 'Shabana@gmail.com', phone: "017199999999" },
    { id: 7, name: 'SHabana', email: 'Shabana@gmail.com', phone: "017199999999" },
    { id: 8, name: 'SHabana', email: 'Shabana@gmail.com', phone: "017199999999" },
];

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
    console.log(search);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send('inside post');
    res.json(newUser);
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'kola'])
})

app.listen(port, () => {
    console.log("Listening to port", port);
})
