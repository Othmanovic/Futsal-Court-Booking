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
function openTeam(evt, Team){
     var i,tabcontent,tablinks;
     
     tabcontent=document.getElementsByClassName("tabcontent");
     for(i=0;i<tabcontent.length;i++){
         tabcontent[i].style.display="none";
     }

     tablinks=document.getElementsByClassName("tablinks");
     for(i=0;i<tablinks.length;i++){
         tablinks[i].className=tablinks[i].className.replace("active","");
     }

     document.getElementById(Team).style.display="block";
     evt.currentTarger.className += "active";
  }

  function gotoPlayers(){
    window.location("http://127.0.0.1:5500/Players.html")
  }

function add(){
  const Tmem = document.getElementById('Tmem').value;
  const Tmat = document.getElementById('Tmat').value;
  
  let obj=`<p>
  <label for="Team Member">${Tmem}<b>Team Member</b></label><br>
                <input type="text" placeholder="Team Member" name="member" required>${Tmem}<br>
                <label for="Team Matric">${Tmat}<b>Member Matric No</b></label><br>
                <input type="text" placeholder="Team Matric" name="matric" required><br><br>
  </p>`
}