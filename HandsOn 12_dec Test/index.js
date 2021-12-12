
let memeImg = document.getElementById('meme-img');
let generateMeme = document.getElementById('genereate-meme');
memeImg.src = "https://i.redd.it/a4lmlplaxy481.jpg"


generateMeme.addEventListener('click', function(){    
    generateMeme.innerText = 'Generating Meme';
    generateMeme.innerHTML += '<i></i>'    
    generateMeme.disabled = true;
    generateMeme.className = 'btn btn-outline-danger w-50 my-2 bg-danger text-white '


    let spinner = this.children[0];    
    spinner.className = "fa fa-spinner fa-spin mx-3";    

    fetch('https://meme-api.herokuapp.com/gimme')
    .then(Response => Response.json()).then(data =>{
        console.log(data)
        memeImg.src = data.url
        generateMeme.innerHTML = 'Generate Meme'
        generateMeme.disabled = false;
        generateMeme.className = 'btn btn-outline-danger w-50 my-2'
    });

})
