const user = {                      //Player mock data
    playerID: 'A123',
    firstname: 'Omar',
    lastname: 'Eldamiry',
    email: 'omar@gmail.com',
    dob: '19-9-1999'
}
/* Elements of the registeration/profile page*/
let editbtn = document.getElementById('edit');                      
let deletebtn = document.getElementById('delete');
let topLeftButton = document.getElementById('user');
let name = document.getElementById('name');
let age = document.getElementById('age');
let exp = document.getElementById('exp');

// The Create function of the player
function createPlayer(){
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;

    if(fName!='')topLeftButton.innerHTML = fName;
    name.innerHTML = ' ' + fName + ' ' + lName;
    age.innerHTML = ' ' + dob;
    exp.innerHTML = ' ' + email;
}


//The Update function of the player
function edit(){
    name.innerHTML = `<input id="${user.playerID+user.firstname}" value="${user.firstname+' '+user.lastname}">`;
    exp.innerHTML = `<input id="${user.playerID+user.email}" value="${user.email}">`;
    age.innerHTML = `<input id="${user.playerID+user.dob}" value="${user.dob}">`;
    editbtn.innerHTML = 'Confirm';
    deletebtn.innerHTML = 'Cancel';
    deletebtn.setAttribute('onclick', 'abort()');
}

//A function to abort changes
function abort(){
    name.innerHTML = '';
    exp.innerHTML = '';
    age.innerHTML = '';
    editbtn.innerHTML = 'Edit';
    deletebtn.innerHTML = 'Delete';
    deletebtn.setAttribute('onclick', 'onePageSite(\'profile\', \'registr\')');
}