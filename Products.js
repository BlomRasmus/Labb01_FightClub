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

const gear = [
    new Product(
        "Boxningshandskar",
        699,
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",        
        "Boxningshandskar 14 oz. Tillverkad i Thailand.",
        "BoxingGloves Image"
    ),
    new Product(
        "Gi",
        1000,
        "https://images.unsplash.com/photo-1677170202297-a9de1d9e72bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",        "Boxningshandskar 14 oz. Tillverkad i Thailand.",
        "Gi image"
    ),
    new Product(
        "HandWraps",
        150,
        "https://images.unsplash.com/photo-1555661530-68c8e98db4e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",        "Boxningshandskar 14 oz. Tillverkad i Thailand.",
        "Hand Wraps Image"
    )
]

let cardGroup = document.getElementById("classesGroup");

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

    cardGroup.appendChild(newCard);

    newCard.appendChild(image);

    newCard.appendChild(cardBody);   
}

let gearCardGroup = document.getElementById("gearGroup");

for (let index = 0; index < classes.length; index++) {
    
    let newCard = document.createElement("div");
    newCard.className = "card border-start-0 border-bottom-gray border-end-gray border-top-0 bg-transparent pt-3 pb-3";
    newCard.style.width = "18rem";
    newCard.style.height = "35rem";
    
    let image = document.createElement("img");
    image.className = "card-img-top";
    image.src = gear[index].imageURL;
    image.style.height = "60%";
    image.style.objectFit = "cover";
    
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.innerHTML = 
                    `<h5 class="card-title">${gear[index].name}</h5>
                    <p class="card-text">Pris: ${gear[index].price } kr</p>
                    <div class="mt-auto">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#judoModal">
                                Show more
                            </button>
                            <button type="button" id="addButton${gear[index].name}" class="btn btn-dark">Add To Cart</button>
                    </div>`

    gearCardGroup.appendChild(newCard);

    newCard.appendChild(image);

    newCard.appendChild(cardBody);   
}



let totalPrice = 0;

let addJudoButton = document.getElementById("addButtonJudo");
let addboxingButton = document.getElementById("addButtonBoxning");
let addMMAButton = document.getElementById("addButtonMMA");

addJudoButton.addEventListener("click", addJudo);
addboxingButton.addEventListener("click", addBoxing);
addMMAButton.addEventListener("click", addMMA);

function addJudo(){
    addClass(0)
    addJudoButton.disabled = true;
    totalPrice += classes[0].price;
}
function addBoxing(){
    addClass(1)
    addboxingButton.disabled = true;
    totalPrice += classes[1].price;
}
function addMMA(){
    addClass(2)
    addMMAButton.disabled = true;
    totalPrice += classes[2].price;
}

let checkout = document.getElementById("shoppingCartItems")

function addClass(index){
    let classItem = document.createElement("li");
    classItem.className = "list-group-item";
    classItem.id=`${classes[index].name}Item`
    classItem.innerHTML = `<div class="d-flex align-items-center">
              <img src=${classes[index].imageURL}
                alt="${classes[index].name} image"
                width="50"
                height="50"
                class="me-3">
              <div>
                <p class="mb-0 fw-bold">${classes[index].name}</p>
                <p class="mb-0 text-muted">${classes[index].price} kr</p>           
              </div>
              <div>
                <button class="btn btn-danger ms-4" onclick="remove${classes[index].name}()" aria-label="remove from cart" id="removeButton${classes[index].name}"><i class="bi bi-trash"></i></button>
              </div>
            </div>`;
        
    checkout.appendChild(classItem);
}

function removeJudo(){
    document.getElementById("JudoItem").remove();
    addJudoButton.disabled = false;
    totalPrice -= classes[0].price;
}
function removeBoxning(){
    document.getElementById("BoxningItem").remove();
    addboxingButton.disabled = false
    totalPrice -= classes[1].price;
}
function removeMMA(){
    document.getElementById("MMAItem").remove();
    addMMAButton.disabled = false;
    totalPrice -= classes[2].price;
}

let addGlovesButton = document.getElementById("addButtonBoxningshandskar");
let addGiButton = document.getElementById("addButtonGi");
let addHandWrapsButton = document.getElementById("addButtonHandWraps");

addGlovesButton.addEventListener("click", addGloves);
addGiButton.addEventListener("click", addGi);
addHandWrapsButton.addEventListener("click", addHandWraps);

function addGloves(){
    addGear(0)
    addGlovesButton.disabled = true;
    totalPrice += gear[0].price;
}
function addGi(){
    addGear(1)
    addGiButton.disabled = true;
    totalPrice += gear[1].price;
}
function addHandWraps(){
    addGear(2)
    addHandWrapsButton.disabled = true;
    totalPrice += gear[2].price;
}

function addGear(index){
    let gearItem = document.createElement("li");
    gearItem.className = "list-group-item";
    gearItem.id=`${gear[index].name}Item`
    gearItem.innerHTML = `<div class="d-flex align-items-center">
              <img src=${gear[index].imageURL}
                alt="${gear[index].name} image"
                width="50"
                height="50"
                class="me-3">
              <div>
                <p class="mb-0 fw-bold">${gear[index].name}</p>
                <p class="mb-0 text-muted">${gear[index].price} kr</p>           
              </div>
              <div>
                <button class="btn btn-danger ms-4" onclick="remove${gear[index].name}()" aria-label="remove from cart" id="removeButton${gear[index].name}"><i class="bi bi-trash"></i></button>
              </div>
            </div>`;
        
    checkout.appendChild(gearItem);
}

function removeBoxningshandskar(){
    document.getElementById("BoxningshandskarItem").remove()
    addGlovesButton.disabled = false;
    totalPrice -= gear[0].price;
}
function removeGi(){
    document.getElementById("GiItem").remove();
    addGiButton.disabled = false;
    totalPrice -= gear[1].price;
}
function removeHandWraps(){
    document.getElementById("HandWrapsItem").remove();
    addHandWrapsButton.disabled = false;
    totalPrice -= gear[2].price;
}


let closeSideNav = document.getElementById("closeSideNav");
closeSideNav.addEventListener("click", closeSideBar);

let shoppingCartButton = document.getElementById("shoppingCartButton");
shoppingCartButton.addEventListener("click", openSideBar);

function openSideBar(){
    document.getElementById("mySideNav").style.width = "300px";
    document.getElementById("mainDiv").style.marginRight = "300px"
    document.getElementById("checkoutDiv").style.width = "225px";
}
function closeSideBar(){
    document.getElementById("mySideNav").style.width = "0px";
    document.getElementById("mainDiv").style.marginRight = "0px";
    document.getElementById("checkoutDiv").style.width = "0px";
}

