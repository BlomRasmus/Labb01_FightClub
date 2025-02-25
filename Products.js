class Product{
    constructor(name, price, imageURL, additionalText, alternativeText){
        this.name = name;
        this.price = price;
        this.imageURL = imageURL;
        this.additionalText = additionalText;
        this.alternativeText = alternativeText
    }
}

const classes = [
    new Product(
        "Judo", 
        2750, 
        "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Judo är en modern japansk kampsport skapad av Jigoro Kano ur olika jujutsustilar, sumobrottning samt västerländsk brottning vid 1800-talets slut. Målet i judo är att besegra sin motståndare genom att kasta och/eller utföra en fasthållning, ett halslås eller ett armlås. I judo förekommer det inte sparkar och slag, till skillnad från andra budogrenar som karate och jujutsu, förutom i förutbestämda former i en kata. En utövare av judo kallas judoka.",
        "Judo Image"    
    ),
    new Product(
        "Boxning",
        2500,
        "https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Boxning är en kampsport där två personer tävlar i styrka, snabbhet, reflexer (tajming och känsla), uthållighet och vilja genom att slå varandra med särskilda vadderade handskar inuti en kvadratisk upphöjd ring. Sporten övervakas av en domare i ronder som varar tre minuter. Resultatet avgörs när den ene tävlanden bedöms vara oförmögen att fortsätta, diskvalificeras, ger upp eller utnämns till vinnare av en panel av domare efter matchen.",
        "Boxning Image"
    ),
    new Product(
        "MMA",
        3000,
        "https://images.unsplash.com/photo-1615117973420-cce962a65005?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Mixed martial arts eller i dagligt tal ofta MMA är en sport med sparkar, slag, kast och markkamp med inriktning på fullkontakt. Till skillnad från många traditionella kampsporter, definieras inte MMA av hur utövaren skall genomföra en viss teknik, utan förklaras enklare av vad utövaren inte får göra.",
        "MMA Image"    
    )

]

let cardGroup = document.getElementById("testGroup");

for (let index = 0; index < classes.length; index++) {
    
    let newCard = document.createElement("div");
    newCard.className = "card border-start-0 border-bottom-gray border-end-gray border-top-0 bg-transparent pt-3 pb-3";
    newCard.style.width = "18rem";
    newCard.style.height = "35rem";
    
    let image = document.createElement("img");
    image.className = "card-img-top";
    image.src = classes[index].imageURL;
    image.style.height = "60%";
    image.style.objectFit = "cover";
    
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.innerHTML = 
                    `<h5 class="card-title">${classes[index].name}</h5>
                    <p class="card-text">Pris: ${classes[index].price } kr/termin</p>
                    <div class="mt-auto">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#judoModal">
                                Show more
                            </button>
                            <button type="button" id="addButton${classes[index].name}" class="btn btn-dark">Add To Cart</button>
                    </div>`
    
    // let cardTitle = document.createElement("h5");
    // cardTitle.className = "card-title";
    // cardTitle.innerText = classes[index].name;
    
    // let cardText = document.createElement("p");
    // cardText.className = "card-text";
    // cardText.innerText = classes[index].price + "kr/termin";
    
    // let modalButton = document.createElement("button");
    // modalButton.className = "btn btn-primary";
    // modalButton.innerText = "Show More"
    // modalButton.setAttribute("data-toggle", "modal")
    
    
    // let addButton = document.createElement("button");
    // addButton.className = "btn btn-dark";
    // addButton.innerText = "Add To Cart";
    // addButton.setAttribute("data-toggle", "modal");
    // addButton.id = `addButton${products[index].name}`;
    
    
    cardGroup.appendChild(newCard);

    newCard.appendChild(image);
    // cardBody.appendChild(cardTitle);
    // cardBody.appendChild(cardText);
    // cardBody.appendChild(modalButton);
    // cardBody.appendChild(addButton);

    newCard.appendChild(cardBody);
    
}

let judoButton = document.getElementById("addButtonJudo");

judoButton.addEventListener("click", () => (
    console.log("Test")
))


