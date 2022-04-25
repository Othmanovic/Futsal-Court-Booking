const layout = require('./layout');


module.exports = function (user) {
    const css = '<link rel="stylesheet" href="css/profileForm.css">';
    const content = `
        <br><br>
        <h1>Profile</h1>
        <form action="/profile" method="post">
            <input type="text" name="name" value="${user.name}"/>
            <input type="date" name="dob" value="${user.dob}" />
            <button class="btn">Edit</button>
            <a href="/profile"><button class="btn btn-delete">Abort</button></a>
        </form>
    `;

    return layout({ title: 'Profile', content, css, user });
}