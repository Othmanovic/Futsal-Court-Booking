const layout = require('./layout');
const dbQuery = require('../database');


module.exports = function (req, res) {
    
    if(req.query.id){
        const sql = 'select * from bookings where bookingID = ?';
        const params = [req.query.id];

        dbQuery(sql, params, function (err, results, fields) {

            if (err) throw err;
            
            results[0].bookingDate = results[0].bookingDate.toISOString();

            let dateParts = results[0].bookingDate.split("-");
            results[0].bookingDate = new String(dateParts[0]+'-'+ dateParts[1]+'-'+dateParts[2].substr(0,2));

            res.send(createHTML(req, results));
        });
    }else{
        res.send(createHTML(req));
    }
}

function createHTML(req, results=null){
    const booking = (results)? results[0]:results;
    const user = req.session.user;
    const content = `
        <div id="Bookcourt">
        <br><br>
        <form action="/${(results)?'editBooking':'myBookings'}" method="post">
            <p>Book Your Court</p>
            <div id="court">Court
                <select id="courtList" name="court" class="btn">
                    <option value="KDOJ">KDOJ</option>
                    <option value="KTC">KTC</option>
                    <option value="K10">K10</option>
                    <option value="KTDI">KTDI</option>
                    <option value="KTHO">KTHO</option>
                </select>
            </div>
            <br>
            <br>
            Date: <input type="date" id="date" name="date" ${(booking)? 'value = "' + booking.bookingDate + '"': ''}>
            Time: <input type="time" id="time" name="time" ${(booking)? 'value = "' + booking.bookingTime + '"': ''}>
            <input type="hidden" name="id" ${(booking)? 'value = "' + booking.bookingID + '"': ''}>
            <div id="submit">
                <button>${(results)? 'Edit Booking':'Submit booking'}</button>
            </div>
            </form>
        </div>
    `;

    return layout({title:'My Bookings',content, user});
}