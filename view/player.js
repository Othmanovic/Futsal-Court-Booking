const layout = require('./layout');


module.exports = function () {

    const content = `
    <h1>Please Add Your Team Member</h1>
    <div id="player-list" class="container">
    <hr>
        
    <div id="add-player"></div>
    <h1>Name</h1><input type="text" name="Name" id="Name">
    <h1>Matric No</h1><input type="text" name="MatNo" id="MatNo">
    <button class="btn" onclick="create()">&plus;Add player</button>
        
    </div>
    `;

    return layout({title:'Registeration',content});
}


