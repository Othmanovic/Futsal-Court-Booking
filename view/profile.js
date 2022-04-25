const layout = require('./layout');


module.exports = function (user) {
    const content = `
    <div id="profile" class="container">
        <h1>Profile</h1>
        <img src="img/Profile pic_default.jpg" class="img" alt="Profile picture">
        <div id="info">
            <p>Name : <span id="name">${user.name}</span></p>
            <p>E-mail : <span id="exp">${user.email}</span></p>
            <p>Date of Birth : <span id="age">${user.dob}</span></p>
        </div>
        <a href="/editProfile"><button id="edit" class="btn">Edit</button></a>
        <a href="/deleteProfile"><button id="delete" class="btn btn-delete">Delete</button></a>
    </div>
    `;

    return layout({title:'Profile', content, user});
}


