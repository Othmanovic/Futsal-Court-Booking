const layout = require('./layout');




module.exports = function () {

    const content = `
    
    <div id="registr" class="container" style="display: block;">
        <h1>Registeration</h1>
        <form action="/register" method="post">
        <input type="text" required name="firstname" id="fName" placeholder="First name">
        <input type="text" required name="lastname" id="lName" placeholder="Last name">
        <input type="email" required name="email" id="email" placeholder="E-mail address">
        <input type="password" required name="password" id="pwd" placeholder="Password">
        <input type="password" required name="confirm-password" id="c_pwd" placeholder="Confirm Password">
        <input type="date" required name="dob" id="dob" placeholder="Date of birth">
        <input type="submit" name="register" id="register" value="Register" onclick="onePageSite('registr', 'profile'); createPlayer();">
        </form> 
        </div>
    `;

    return layout({title:'Registeration',content});
}


