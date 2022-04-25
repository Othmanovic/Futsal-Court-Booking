const layout = require('./layout');
const dbQuery = require('../database');


module.exports = function(user,res) {

    const sql = 'select * from players where ?';
    const params = [1];

    dbQuery(sql, params, function (err, results, fields) {

        if (err) throw err;

        res.send(createHTML(results, user));

    }); // dbQuery
}

function createHTML(results, user){
    const css = '<link rel="stylesheet" href="css/playerList.css">';
    
    let p = `
        <br><br>
        <h2>Players List</h2>
        `;

    for(let i = 0; i < results.length; i++){
        const player = results[i];

        p += `
        <button class="collapsible">
            <span><b>#P${player.playerID}</b></span>
            <span>${player.playerName}</span>
        </button>
        <div class="content">
            <div class="stuff">
                <p>${player.dob}</p>
            </div>
        </div>
        `;
    }
    
    const content = p;

    return layout({title:'Players', content, css,user});
}
