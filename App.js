var compression = require('compression');
var cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session)

const port = process.env.PORT || 4000;
const db = require('./config/constants').mongoURI;
const secret = require('./config/constants').sessionSecret;

// Express app configuration
//creating instance of express app
const app = express();

// initializing the mongoDB session collection
const store = new MongoDBStore({
	uri: db,
	collection: 'sessions' })

// using compression module and cors module
app.use(compression());
app.use(cors());
app.use(session({ 
	'secret' : secret,
	resave: false,
	saveUninitialized: true,
	user: {},
	store: store, 
	cookie : {
		maxAge: 30000 }}
	));

// Database configuration
//setting mongoose promise to global promise
mongoose.Promise = global.Promise;

//connecting to the database
mongoose
	.connect(db, { 
		useNewUrlParser: true, 
		useFindAndModify: false, 
		useUnifiedTopology: true })
	.then(() => console.log("connected to the database"))
	.catch((err) => console.log(err))

app.use(function(req, res, next){
	var sessionData = req.session
	sessionData.user = ''
	next()	})
	
// Server configuration	
// serving static files
app.use('/static', express.static('public'))

// initiating body parser for POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router configuration
// importing the router
var router = require('./Routes/index')

// initiating router
app.use('/api', router)

//Listening to request	
app.listen(port, () => {
	console.log('This express app is listening to port number' + port)})