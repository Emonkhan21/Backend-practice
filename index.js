const express = require('express')
const app = express();
const cors = require("cors");

const Userlist = require('./models/userSchema')
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const userSchema = require('./models/userSchema');
const emailVerification = require('./helpers/emailVerification');
const testMiddleware = require('./middleware/testMiddleware');

const jwt = require('jsonwebtoken');

const port = 3000
app.use(cors())
app.use(express.json())




mongoose.connect('mongodb+srv://emonkhan:emon1690@cluster0.sqsuvh3.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'));



// mongodb+srv://emonkhan:<password>@cluster0.sqsuvh3.mongodb.net/?retryWrites=true&w=majority



app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/users', testMiddleware, async (req, res) => {
    // res.send(users)
    const users = await Userlist.find({})
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log(req.body);


    let { firstname, lastname, email, password } = req.body;

    var token = jwt.sign({ id: email }, 'baig');
    console.log("tokeeeeeeeeeeeeen", token);

    if (!firstname) {
        res.send('firstname de')
    }
    if (!lastname) {
        res.send('lastname de')
    }
    if (!password) {
        res.send('password de')
    }
    if (!email) {
        res.send('email de')
    }

    bcrypt.hash(password,10, function (err, hash) {
        const users = new Userlist({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hash,
            token : token

        })

      

        users.save()
       emailVerification(email)
     });

   

    res.send(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})