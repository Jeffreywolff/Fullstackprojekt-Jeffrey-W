// server/server.js
const database = require('./database');
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')
const port = 8000;
const userAPI = require('./routes/user.route');
const userModel = require('./newUser');


app.use(cors());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

// Connect mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected")
  },
  error => {
    console.log("Database could't be connected to: " + error)
  }
)

app.use('/api', userAPI)


app.post('/create-user', async (req, res) => {

    const user = userModel.newUser(
      req.body.username, 
      req.body.email, 
      req.body.password
    );
    await database.store(user);
    res.redirect("/");
  })

  app.get('/login', async(req, res) => {

    const userList = await userModel.findUser();
    userList.forEach(user => {
      if(user.username == req.body.username){
        if(user.password == req.body.password){
          res.redirect("/chat");
        }
        else{
          res.redirect("/chat");
        }
      }
      else{
        console.log("nope");
      }
    });
    
  })


app.get('/', (req, res) => {
    res.send(`Hi! Server is listening on port ${port}`)
});

// listen on the port
app.listen(port);