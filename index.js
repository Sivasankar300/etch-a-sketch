//First step is to make 16x16 divs through for loop
    const container = document.querySelector('#container');
    for(i=0; i<255; i++){
       const divs = document.createElement('div');
       divs.classList.add('divs');  
        container.appendChild(divs)
    }



