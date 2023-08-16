

let input = document.getElementById("input1");
let entrer1 = document.getElementById("entrer1");
let solde = 10000;

let firstCard = document.querySelector(".firstcard");
let secondCard = document.querySelector(".secondcard");
let thirdCard = document.querySelector(".thirdcard");
let fourthCard = document.querySelector(".fourthcard");

entrer1.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "" || isNaN(input.value) || input.value >= 5 || Math.sign(input.value) === -1) {
        alert("veuillez saisir un nombre entre 0 et 4");
    }else if(input.value === "4"){
        firstCard.classList.add("d-none");
        secondCard.classList.add("d-none");
        thirdCard.classList.add("d-none");
        fourthCard.classList.add("d-none");
        input.value = "";
    }
    if (input.value === "0") {
        secondCard.classList.add("d-none");
        thirdCard.classList.add("d-none");
        fourthCard.classList.add("d-none");
        firstCard.classList.remove("d-none");
        firstCard.classList.add("d-block");
        firstCard.innerHTML = `votre solde est de : ${solde} $`;
        input.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        input5.value = "";
    }
    if (input.value === "1") {
        firstCard.classList.add("d-none");
        thirdCard.classList.add("d-none");
        fourthCard.classList.add("d-none");
        secondCard.classList.remove("d-none");
        secondCard.classList.add("d-block");
        input.value = "";
        input3.value = "";
        input4.value = "";
        input5.value = "";
    }
    if (input.value === "2") {
        firstCard.classList.add("d-none");
        secondCard.classList.add("d-none");
        fourthCard.classList.add("d-none");
        thirdCard.classList.remove("d-none");
        thirdCard.classList.add("d-block");
        input.value = "";
        input2.value = "";
        input4.value = "";
        input5.value = "";
    }
    if (input.value === "3") {
        firstCard.classList.add("d-none");
        secondCard.classList.add("d-none");
        thirdCard.classList.add("d-none");
        fourthCard.classList.remove("d-none");
        fourthCard.classList.add("d-block");
        input.value = "";
        input2.value = "";
        input3.value = "";
    }
});
let entrer2 = document.getElementById("entrer2");
let input2 = document.getElementById("input2");
entrer2.addEventListener("click", (e) => {
    e.preventDefault();
    if (input2.value > solde) {
        alert(`votre compte ne dispose que de ${solde} $`);
        input2.value = "";
    }
    if(Math.sign(input2.value) === 1){
        let nbDestinataire;
        do {
            nbDestinataire = prompt("veuillez saisir le numero du destinataire!\n Nb: Le numéro saisi doit comporter 9 chiffres");
        } while (isNaN(nbDestinataire) || Math.sign(nbDestinataire) === -1  || nbDestinataire.length !== 9 || nbDestinataire.startsWith("+"))
        alert(`Vous avez transférer "${input2.value} $" au "${nbDestinataire}" avec succès . \n Votre nouveau solde est de "${solde - input2.value} $"`)
    }
    else{
        input2.value =""; // si la valeur saisi est negative je l'ignore et ne la conserve pas dans l'input
    }
    solde -= input2.value;
    input2.value = "";
})
let leave1 = document.getElementById("leave1");
leave1.addEventListener("click", (e) => {
    e.preventDefault();
    input2.value = "";
    secondCard.classList.add("d-none");
})
let entrer3 = document.getElementById("entrer3");
let input3 = document.getElementById("input3");
entrer3.addEventListener("click", (e) => {
    e.preventDefault();
    if (input3.value === "0") {
        let nbLiquide;
        do {
            nbLiquide = prompt("veuillez saisir le montant en $");
        } while (isNaN(nbLiquide) || Math.sign(nbLiquide) === -1 || nbLiquide % 1 !== 0 || nbLiquide.startsWith("+") || nbLiquide === "");
        alert(`Vous avez deboursé ${nbLiquide} $ pour payer votre facture . \n Votre nouveau solde est de "${solde - nbLiquide} $`);
    }
    if (input3.value === "1") {
        let nbCheque;
        do {
            nbCheque = prompt("veuillez saisir le montant du chèque en $");
        } while (isNaN(nbCheque) || Math.sign(nbCheque) === -1 || nbCheque.startsWith("+") || nbCheque === "");
        alert(`Vous avez deboursé ${nbCheque} $ pour payer votre facture . \n Votre nouveau solde est de "${solde - nbCheque} $`);
    }
    solde -= input3.value;
    input3.value = "";
})
let leave2 = document.getElementById("leave2");
leave2.addEventListener("click", (e) => {
    e.preventDefault();
    thirdCard.classList.add("d-none");
    input3.value = "";
})
let entrer4 = document.getElementById("entrer4");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
entrer4.addEventListener("click", (e) => {
    e.preventDefault();
    if (input5.value > solde) {
        alert(`votre compte ne dispose que de ${solde} $`);
    }
    if (input4.value.length === 9 && !isNaN(input4.value)) {
        alert(`Vous avez acheter ${input5.value} $ de credit pour le ${input4.value} avec succès.\n Votre nouveau solde est de ${solde - input5.value} $`)
    }else{
        input5.value = ""; 
    }
    solde -= input5.value;
    input4.value = "";
    input5.value = "";
});
let leave3 = document.getElementById("leave3");
leave3.addEventListener("click", (e) => {
    e.preventDefault();
    fourthCard.classList.add("d-none");
    input4.value = "";
    input5.value = "";
})