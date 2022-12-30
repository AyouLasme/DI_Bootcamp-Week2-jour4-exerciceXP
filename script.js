// Exercice 1
// Part 1

// Créez une fonction appelée infoAboutMe()qui ne prend aucun paramètre.
// La fonction devrait console.log une phrase vous concernant (c'est-à-dire votre nom, votre âge, vos loisirs, etc.).
// Appelez la fonction.

function infoAboutMe() {
    console.log("Mon nom est LASME Ayou Emeline, j'aime la cuisine et la decration");
}
infoAboutMe();

// PArt 2

// Créez une fonction appelée infoAboutPerson(personName, personAge, personFavoriteColor)qui prend 3 paramètres.
// La fonction doit console.log une phrase sur la personne (c'est-à-dire "Vous vous appelez ..., vous avez .. ans, votre couleur préférée est ...")
function infoAboutPerson(nom, age, sexe) {
    console.log("Mon nom est " +personName+ " J'ai " +age+ "ans et je suis de sexe" +sexe);
}
// Appelez la fonction deux fois avec les arguments suivants :
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// Exercice 2

// Créez une fonction nommée calculateTip()qui ne prend aucun paramètre.
// À l'intérieur de la fonction, utilisez promptpour demander à John le montant de la facture.
function calculateTip() {
    let amountToPay;
    let amount = Number(prompt("quel est le montant du pourboire? "));

    if(amount > 200) {
        amountToPay = amount + (amount*0.1);
    }
    else if(amount > 50) {
        amountToPay = amount + (amount*0.15);
    }
    else {
        amountToPay = amount + (amount*0.2);
    }

    console.log("Le pourboire final est " +amountToPay);
}
// Appelez la calculateTip()fonction.
calculateTip();

// Exercice 3
function isDivisible(diviseur) {
    let somme = 0;
    for(let i = 0; i<500; i++) {
        if(i % diviseur == 0) {
            console.log(i);
            somme += i;
        }
    }
    console.log(somme);
}

// Exercice 4
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList = ["banana", "orange", "pomme"];

function myBill() {
    let totalPrice = 0;
    for(let i of shoppingList) {
        if(typeof(stock[i]) != 'undefined' && stock[i] > 0) {
            totalPrice+=prices[i];
            stock[i]-=1;
        }
    }
    return totalPrice;
}

myBill();

// Exercice 5
// Créez une fonction nommée changeEnough(itemPrice, amountOfChange)qui reçoit deux arguments 
// Dans la fonction, déterminez si vous pouvez ou non vous permettre l'article.
function changeEnough(itemPrice, amountOfChange) {
    let priceInMyPossession = 0;
    let amountOfChangeNumber = [0.25, 0.1, 0.05, 0.01];
    for(let i = 0; i<amountOfChangeNumber.length; i++) {
        priceInMyPossession+=(amountOfChangeNumber[i]*amountOfChange[i]);
    }

    if(priceInMyPossession >= itemPrice) {
        return true;
    }
    return false;
}

changeEnough(4.25, [25, 20, 5, 0]);

// Exercice 6
// Définissez une fonction appelée hotelCost()
function hotelCost() {
    let numberOfNight;
    do{
        numberOfNight = prompt("How many night do you spent in our hotel? :");
    }while(numberOfNight.length == 0 || isNaN(numberOfNight))

    return Number(numberOfNight) * 140;
}

hotelCost();
// Définissez une fonction appelée planeRideCost().
function planeRideCost() {
    let userDestination;
    do{
        userDestination = prompt("What is your destination : ");
    }
    while(userDestination.length == 0 || !isNaN(userDestination))

    if(userDestination === "Londres"){
        return 183;
    }  
    else if(userDestination === "Paris"){
        return 220;
    }
    return 300;
}
// Définissez une fonction appelée rentalCarCost().
function rentalCarCost() {
    
    let numberOfCarLocationDay;
    do{
        numberOfCarLocationDay = prompt("How many day for location a car :");
    }while(numberOfCarLocationDay.length == 0 || isNaN(numberOfCarLocationDay))

    if(numberOfCarLocationDay > 10) {
        let priceToReduce = numberOfCarLocationDay*40*0.05;
        return numberOfCarLocationDay*40 - priceToReduce;
    }
    return Number(numberOfCarLocationDay)*40;
}
// Définissez une fonction appelée totalVacationCost()
function totalVacationCost() {
    return hotelCost() + planeRideCost() + rentalCarCost();
}
// Appelez la fonctiontotalVacationCost()
totalVacationCost();