const rigaElm = document.querySelector(".riga");
const overElm = document.getElementById("overlay");
const closeElm = document.getElementById("close");
const contOverlayElm = document.getElementById("cont-overlay");

function remove () {
    overElm.classList.remove("flex");
    overElm.classList.add("hidden");
    contOverlayElm.innerHTML = "";
};

function photoGen () {
    let result = "";
        axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then((resp) => {
            resp.data.forEach((photo) => {
                result += `
                    <div class="column">    
                        <div class="card" data-url="${photo.url}">
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
        
        const cardElm = document.querySelectorAll(".card");
        cardElm.forEach((card, index) => {
            card.addEventListener("click", function () {
                overElm.classList.remove("hidden");
                overElm.classList.add("flex");
                const url = card.dataset.url
                contOverlayElm.innerHTML = `
                <button type="button" id="close"><i class="fa-regular fa-circle-xmark"></i></button>
                <img src="${url}" alt=""></img>
                `
            })
        })

        closeElm.addEventListener("click", remove)
        overElm.addEventListener("click", remove)
})   
}

photoGen ();



