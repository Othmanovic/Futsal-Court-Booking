const layout = require('./layout');
const dbQuery = require('../database');

module.exports = function (user, res) {

    const sql = 'select bookingID, court, bookingDate, bookingTime, status, playerName from bookings NATURAL JOIN players';

    dbQuery(sql, function (err, results, fields) {

        if (err) throw err;

        res.send(createHTML(results, user));
        
    });
}

function createHTML(results, user){
    const css = '<link rel="stylesheet" href="css/manageBooking.css">';
    let html = `<br><br>
    <h2>Existing Requests</h2>`;

    if(results.length){
        for(let i = 0; i < results.length; i++){
            const booking = results[i];
    
            html+=`
            <button class="collapsible">
                <span><b>#B${booking.bookingID}</b></span>
                <span>${booking.playerName}</span>
                <span>${booking.court}</span>
                <span><b>${booking.status}</b></span>
            </button>
            <div class="content">
                <div class="stuff">
                    <p>${booking.bookingDate}</p>
                    <p>${booking.bookingTime}</p>
                </div>
                <div class="stuff">
                    <form action="/updateStatus" method="get">
                        <input type="hidden" name="id" value="${booking.bookingID}" />    
                        <input type="hidden" name="status" value="Accepted" />    
                        <button class="btn">Accept</button>
                    </form>
                    <form action="/updateStatus" method="get">
                        <input type="hidden" name="id" value="${booking.bookingID}" />    
                        <input type="hidden" name="status" value="Denied" />
                        <button class="btn btn-delete">Deny</button>
                    </form>
                </div>
            </div>
            `;        
        }
    }else{
        html = `
        <h2>There are no existing requests at the moment</h2>
        `;
    }

    const content = `
        <!--My booking-->
        <div id="MyBooking">
            ${html}
        </div>
        <!-- -->
    `;

    return layout({title:'Manage Bookings',content, css, user});
}