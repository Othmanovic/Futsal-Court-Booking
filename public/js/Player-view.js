
function render(){
    const wrapper = document.getElementById('player-list');
  
    let player;
    let html ='';
  
    for (let i=0; i<playerss.length; i++){
       player = playerss[i];
  
       html += `
       <div class="player">
       <h1>${player.Name}</h1>
       <div class="detail">
           <p >${player.MatNo}</p>
           <p >${player.Add}</p>
       </div>
   </div>
      `;
  
  }
  
  wrapper.innerHTML = html;
  }