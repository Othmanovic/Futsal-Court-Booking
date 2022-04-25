module.exports = function({title, content, user, css=''}) {
    let dropdown;
    let nav;
    if(user){
        if(user.type === 'Player'){
            dropdown = `
            <a href="/profile">   <li>View profile</li> </a>
            <hr>
            <a href="/logout"><li>Log out</li></a>
            `;
            nav =`
            <ul type="none">
                <a href="/"><li>Home</li></a>
                <a href="/map"><li>Map</li></a>
                <a href="/players"><li>Players</li></a>
                <a href="/myBookings"><li>My Bookings</li></a>
            </ul>
            `;
        }else{
            dropdown = `
            <a href="/logout"><li>Log out</li></a>
            `;

            nav = ``;
        }
    }else{
        dropdown = `
        <a href="/login">   <li>Login</li> </a>
        <hr>
        <a href="/register"><li>Register</li></a>
        `;

        nav = `
        <ul type="none">
            <a href="/"><li>Home</li></a>
            <a href="/map"><li>Map</li></a>
        </ul>
        `;

        user = { name: 'User' };
    }
    
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>FCB - ${title}</title>
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/registeration.css">
        <link rel="stylesheet" href="css/profile.css">
        <link rel="stylesheet" href="css/MyBooking.css">
        ${css}
        <link rel="stylesheet" href="css/home.css">
        <link rel="stylesheet" href="css/profile.css">
    </head>

    <body>
        <nav>
            <div class="container">
                <h1>FUTSAL COURT BOOKING</h1>
                <h2>${title}</h2>
                <div class="container">
                    ${nav}
                </div>
            </div>
        </nav>
        <div class="btn-account">
            <button class="btn" onclick="dropdown()">${user.name}</button>
            <ul type="none" id="dropdown" style="display:none;">
                ${dropdown}
                <!--  -->
            </ul>
        </div>
        <section>
        ${content}
        </section>
        <div id="footer">
            <p>Copyright FCB -Futsal Court Booking&copy;- 2019.</p>
        </div>
        <!------------------------------------------------>
        <script src="js/script.js"></script>
        <script src="js/playerMockData.js"></script>
        <script src="js/mybooking.js"></script>
        <script src="js/dropdown.js"></script>
    </body>
    </html>
    `;
}

