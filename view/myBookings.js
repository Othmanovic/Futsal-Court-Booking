const layout = require('./layout');
const dbQuery = require('../database');


module.exports = function (user, res) {
    const sql = 'select * from bookings where playerID = ?';
    const params = [user.userID];

    dbQuery(sql, params, function (err, results, fields) {

        if (err) throw err;

        res.send(createHTML(user, results));
        
    });
}

function createHTML(user, results){
    const css = '<link rel="stylesheet" href="css/playerList.css">';
    let html = `<br><br><h2>Bookings</h2>`;

    if(results.length){
        for(let i = 0; i < results.length; i++){
            const booking = results[i];
            let cls = '';

            if(booking.status === 'Waiting Approval'){
                cls = 'yellow';
            }else if(booking.status === 'Denied'){
                cls = 'red';
            }

            html+=`
            <button class="collapsible">
                <span><b>#B${booking.bookingID}</b></span>
                <span>${user.name}</span>
                <span>${booking.court}</span>
                <span class="${cls}"><b>${booking.status}</b></span>
            </button>
            <div class="content">
                <div class="stuff">
                    <p>${booking.bookingDate}</p>
                    <p>${booking.bookingTime}</p>
                </div>
                <div class="stuff">
                    <form action="/createBooking" method="get">
                        <input type="hidden" name="id" value="${booking.bookingID}" />    
                        <button class="btn">Edit</button>
                    </form>
                    <form action="/deleteBooking" method="get">
                        <input type="hidden" name="id" value="${booking.bookingID}" />
                        <button class="btn btn-delete">Delete</button>
                    </form>
                </div>
            </div>
            `;        
        }

        html += `
        <a href="/createBooking"><button class="btn btn-add" onclick="goToBook()"><b>+</b></button></a>
        `;
    }else{
        html = `
        <h2 id="top">You do not have any ongoing bookings yet</h2>

        <div id="btn">
        <a href="/createBooking"><button onclick="goToBook()">Book a court</button></a>

        </div>
        `;
    }


    const content = `
        <!--My booking-->
        <div id="MyBooking">
            ${html}
        </div>
    `;

    return layout({title:'My Bookings',content, user, css});
}