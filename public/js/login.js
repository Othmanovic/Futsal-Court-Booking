// Mock Data

const player1 = {
    username: 'Othman',
    password: '12345'
};

const player2 = {
    username: 'Omar',
    password: '12345'
};

/*
login function
is to take the values from the user and verify it by comparing it
with the mock data
*/


function Login(){
    const user ={
        username: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
  

  
    
    if(verify(user,player1)){
        window.location= `../home/home.html`;
    }
  
   
  
   else if(verify(user,player2)){
        window.location= `../home/home.html`;
    }
    else {
        alert('Invalide user name or password');

    }
  }
  
  
  
  function verify(user,duser){
    if (user.username === duser.username && user.password === duser.password) return true;
  
    return false;
  }