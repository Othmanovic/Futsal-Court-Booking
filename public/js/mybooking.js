/* This is create function that takes the booking info 
from the user and puts it in My booking page
*/

function create() {
    const courtList = document.getElementById('courtList');
    const date = document.getElementById('date');
    const time = document.getElementById('time');

    const court = getSelected(courtList);




    let obj = `<p>
    <div id="booked">
                <table>
                    <tr>
                        <th>Court</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Mode</th>
                        <th>Options</th>
                    </tr>

                    <tr>
                       <div id="court"> <td>${court}</td>  </div>
                       <div> <td>${date.value}</td>  </div>
                       <div> <td>${time.value}</td>  </div>
                       <div id="mode"> <td>${mode}</td>  </div>
                       <td><button class ="btn" onclick="hide('booked'); show('Bookcourt');">Edit</button> <button class ="btn" onclick="Delete()">Delete</button></td>

                        
                    </tr>


                </table>
            </div>
   `;


    let crud = document.getElementById('MyBooking');

    crud.innerHTML = obj;

    show('MyBooking');
    hide('Bookcourt');

}

/*
getSelected function is for getting the value selected from the 
dropdown lists

 */
function getSelected(s) {
    for (var i = 0; i < s.options.length; i++) {
        if (s.options[i].selected === true) {
            let court = s.options[i].value;

            return court;
        }
    }
}

function display(id, type) {
    document.getElementById(id).style.display = type;
}

function hide(id) {
    display(id, 'none');
}

function show(id) {
    display(id, 'block');
}

function goToBook() {
    hide('MyBooking');
    show('Bookcourt');
}
function Delete(){
    let goback = `<h2 id="top">You do not have any ongoing bookings yet</h2>

    <div id="btn">
        <button onclick="goToBook()">Book a court</button>

    </div>`;

    let crud = document.getElementById('MyBooking');

    crud.innerHTML= goback;
}