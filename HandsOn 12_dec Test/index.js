let memeImg = document.getElementById("meme-img");
let generateMeme = document.getElementById("genereate-meme");

memeImg.src = "https://i.redd.it/a4lmlplaxy481.jpg"; // default image

generateMeme.addEventListener("click", function () {
    // adding loader to the button
    generateMeme.innerText = "Generating Meme";
    generateMeme.innerHTML += "<i></i>";
    generateMeme.disabled = true;
    generateMeme.className =
        "btn btn-outline-danger w-50 my-2 bg-danger text-white ";

    let spinner = this.children[0];
    spinner.className = "fa fa-spinner fa-spin mx-3";

    // making request to the api

    fetch("https://meme-api.herokuapp.com/gimme")
        .then((Response) => {
            if (Response.ok) return Response.json();
            else throw new Error("something went wrong");
        })
        .then((data) => {
            console.log(data);
            memeImg.src = data.url;

            // style button as default

            generateMeme.innerHTML = "Generate Meme";
            generateMeme.disabled = false;
            generateMeme.className = "btn btn-outline-danger w-50 my-2";
        })
        .catch((error) => {
            alert("something went wrong ! please try again");
            console.log(eroot);

            // style button as default

            generateMeme.innerHTML = "Generate Meme";
            generateMeme.disabled = false;
            generateMeme.className = "btn btn-outline-danger w-50 my-2";
        });
});
