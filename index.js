const express = require('express');
const bodyParser = require('body-parser');
const dbQuery = require('./database');
const session = require('express-session');

const home = require('./view/home');
const player = require('./view/player');
const playersList = require('./view/playersList');
const map = require('./view/map');
const myBookings = require('./view/myBookings');
const createBooking = require('./view/createBooking');
const profile = require('./view/profile');
const profileForm = require('./view/profileForm');
const registeration = require('./view/registeration');
const manageBookings = require('./view/manageBookings');
const login = require('./view/login');


const app = express();
const port = 4099;
const sessionName = 'app_' + port;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))
app.use(
    session({
        name: sessionName,
        resave: false,
        secret: 'hello world',
        saveUninitialized: false,
        cookie: {
            sameSite: true,
            httpOnly: false
        }
    })
 );

app.get('/', rootDisplay);
app.get('/map', mapDisplay);
app.get('/players', playerDisplay);
app.get('/addPlayers', addDisplay);
app.get('/myBookings', myBookingDisplay);
app.post('/myBookings', myBookingHandler);
app.get('/createBooking', createBookingHandler);
// app.get('/editBooking', editBookingDisplay);
app.post('/editBooking', editBookingHandler);
app.get('/deleteBooking', deleteBookingHandler);
app.get('/profile', profileDisplay);
app.get('/editProfile', editProfileDisplay);
app.get('/register', registerDisplay);
app.get('/manageBookings', manageDisplay);
app.get('/updateStatus', statusHandler);
app.post('/profile', profileHandler);
app.get('/deleteProfile', deleteProfileHandler);

app.get('/logout', logoutHandler );
app.get('/login', loginDisplay );
app.post('/login', loginHandler);
app.post('/register',registerHandler);

app.listen(port, listenHandler);

function rootDisplay(req, res) {
    res.send(home(req.session.user));
}

function mapDisplay(req, res) {
    res.send(map(req.session.user)); 
}
function addDisplay(req, res) {
    res.send(player());
}

function playerDisplay(req, res) {
    playersList(req.session.user, res);
}

function myBookingDisplay(req, res) {
    if(req.session.user){
        myBookings(req.session.user, res);
    }else{
        res.redirect('/login');
    }
}

function myBookingHandler(req, res) {
    const sql = 'INSERT INTO bookings(court, bookingDate, bookingTime, playerID, status) VALUES (?,?,?,?, "Waiting Approval")';
    const params = [req.body.court, req.body.date, req.body.time, req.session.user.userID];

    dbQuery(sql, params, function (err, results, fields){
        if (err) throw err;

        res.redirect('/myBookings');
    });
}

function createBookingHandler(req, res){
    createBooking(req, res);
}

function editBookingHandler(req, res){
    const sql = 'UPDATE `bookings` SET `bookingDate`=?,`bookingTime`=?,`court`=? WHERE bookingID = ?';
    const params = [req.body.date, req.body.time, req.body.court, req.body.id];

    dbQuery(sql, params, function(err, results, fields){
        if (err) throw err;

        res.redirect('/myBookings');
    });
}

function deleteBookingHandler(req, res){
    const sql = 'DELETE FROM `bookings` WHERE bookingID = ?';
    const params = [req.query.id];

    dbQuery(sql, params, function(err, results, fields){
        if (err) throw err;

        res.redirect('/myBookings');
    });
}

function manageDisplay(req, res) {
    manageBookings(req.session.user, res);
}
function profileDisplay(req, res) {
    res.send(profile(req.session.user));
}
function editProfileDisplay(req, res) {
    res.send(profileForm(req.session.user));
}

function registerDisplay(req, res) {
    res.send(registeration());
}
function loginDisplay(req, res) {
    res.send(login());
}
function profileHandler(req, res){
    const sql = 'UPDATE `players` SET `playerName`=?,`dob`=? WHERE playerID = ?';
    const params = [req.body.name, req.body.dob, req.session.user.userID];

    dbQuery(sql, params, function(err, results, fields){
        if (err) throw err;
        req.session.user.name = req.body.name;
        req.session.user.dob = req.body.dob;

        res.redirect('/profile');
    });
}

function deleteProfileHandler(req, res){
    const sql = 'DELETE FROM `players` WHERE playerID = ?';
    const params = [req.session.user.userID];

    dbQuery(sql, params, function(err, results, fields){
        if (err) throw err;

        const sql2 = 'DELETE FROM `users` WHERE userID = ?';

        dbQuery(sql2, params, function(err, results, fields){
            if (err) throw err;

            req.session.destroy();

            res.redirect('/');
        });
    });
}

function logoutHandler(req, res) {
    req.session.destroy();
    res.redirect('/login');
}

function loginHandler(req, res) {

    const sql = 'select * from users where email=? and password=password(?)';
    const params = [req.body.email, req.body.secret];

    dbQuery(sql, params, function (err, results, fields) {

        if (err) throw err;

        if (results.length) {
            
            const user = results[0];
            delete user.password;  // don't take the password.
            req.session.user = user;  // store into session only if the user is authenticated
            
            const params2 = [user.userID];

            if(req.session.user.type === 'Player'){
                const sql2 = 'select * from players where playerID = ?';

                dbQuery(sql2, params2, function(err, results, fields){
                    if (err) throw err;

                    results[0].dob = results[0].dob.toISOString();

                    let dateParts = results[0].dob.split("-");
                    results[0].dob = new String(dateParts[0]+'-'+ (dateParts[1]) +'-'+dateParts[2].substr(0,2));

                    const player = results[0];
                    
                    req.session.user.name = player.playerName;
                    req.session.user.dob = player.dob;
                    return res.redirect('/profile');
                });
            }else if(req.session.user.type === 'Staff'){
                const sql2 = 'select * from staff where staffID = ?';

                dbQuery(sql2, params2, function(err, results, fields){
                    if (err) throw err;
                    const staff = results[0];
                    
                    req.session.user.name = staff.staffName;
                    req.session.user.phone = staff.phone;
                    
                    return res.redirect('/manageBookings');
                });
            }else{
                res.redirect('/login');
            }
            
            
        }
    }); // dbQuery

}

function registerHandler(req,res){

    const playerName=req.body.firstname +' '+req.body.lastname; 
    const sql = 'INSERT INTO users(email, password, type) VALUES (?,password(?), "Player")';
    const params = [req.body.email, req.body.password];
    const sqlPlayers = 'INSERT INTO players(playerID, PlayerName, dob) VALUES (?,?,?)';
    

    dbQuery(sql, params, function (err, results, fields){
        if (err) throw err;

        const paramsPlayers = [results.insertId, playerName, req.body.dob];
        dbQuery(sqlPlayers, paramsPlayers, function (err, results, fields){
            
            res.redirect('/login');
        });

    });
}

function statusHandler(req, res){
    
    const sql = 'UPDATE `bookings` SET `status`= ? WHERE bookingID = ?';
    const params = [req.query.status, req.query.id];

    dbQuery(sql, params, function (err, results, fields){
        if (err) throw err;

        res.redirect('/manageBookings');
    });
}

function listenHandler() {
    console.log(`Server is running on port ${port} `);
}
