const rigaElm = document.querySelector(".riga");


function photoGen () {
    let result = "";
        axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then((resp) => {
            resp.data.forEach((photo) => {
                result += `
                    <div class="column">    
                        <div class="card">
                            <div class="card-body">
                                <img id="img-pin" src="./img/pin.svg" alt="">
                                <img id="img-card" src="${photo.url}" class="card-img-top" alt="...">
                                <p class="card-text">${photo.title}</p>
                            </div>
                        </div>
                    </div>
                `
            });
        rigaElm.innerHTML = result;
})   
}

photoGen ();