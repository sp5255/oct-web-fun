let myDiv = document.getElementById('mainDiv');
let body = document.getElementsByTagName('body')
body = body[0]

body.addEventListener('keydown', function(e){    
    console.log(e.keyCode)
    if(e.keyCode === 37){        
        myDiv.style. marginLeft = '0%'       
    }

    if(e.keyCode === 39){
        myDiv.style. marginLeft = '45em'
    
    }
    if(e.keyCode === 38){
        myDiv.style.marginTop = '0%'
       
    }
    if(e.keyCode === 40){
        myDiv.style.marginTop = '20em'
      
    }
})