function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

function dropdown(){
  let dropdownList = document.getElementById('dropdown');
  
  if(dropdownList.style.display === 'none') dropdownList.style.display = 'block';
  else dropdownList.style.display = 'none';
}


  function gotoPlayers(){
    window.location("http://127.0.0.1:5500/Players.html")
  }

function Player(Name, MatNo, Add){
  return{
    Name,
    MatNo,
    Add
  }
}

const playerss = [
  Player('Omar', 'A17xxxx', 'Melana'),
  Player('Othman', 'B17xxx', 'Melawis'),
];
function create(){
  const Name = document.getElementById('Name').value;
  const MatNo = document.getElementById('MatNo').value;
  const Address = document.getElementById('Address').value;
  
  let obj =`
  <h1>${Name}</h1>
  <div class="detail">
      <p >${MatNo}</p>
      <p >${Address}</p>
  </div>
  <hr>`;

  let crud = document.getElementById('add-player');

  crud.innerHTML += obj;
}





