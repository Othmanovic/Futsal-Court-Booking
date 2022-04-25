function dropdown(){                                //function for the dropdown list of the top-right bottom
    let dropdownList = document.getElementById('dropdown');
    
    if(dropdownList.style.display === 'none') dropdownList.style.display = 'block';
    else dropdownList.style.display = 'none';
}

//a general function to change the display of different pages(divs) 
function onePageSite(x, y){
    let p1 = document.getElementById(x);
    let p2 = document.getElementById(y);
    
    if(p1.style.display === 'block'){
        p2.style.display = 'block';
        p1.style.display = 'none';
    }else{
        p2.style.display = 'none';
        p1.style.display = 'block';
    }
}