"use strict";

let ramulus = document.querySelector("#ramulus");
let phyllium = document.querySelector("#phyllium");
let dataValues = document.querySelectorAll("section[data-filter]");

ramulus.addEventListener("click", (e) =>{
    ramulus.classList.add("disabled");
    phyllium.classList.toggle("disabled");//Tu enlèves la classe ou la rajoute
    for(let dataValue of dataValues){
        let btnRamulus = ramulus.getAttribute("data-filter");
        let filter = dataValue.getAttribute("data-filter").toLowerCase();//Récupère la valeur du data-filter en minuscule
        if(filter.includes(btnRamulus)){//Si la valeur de filter inclu la valeur stockée dans term
            dataValue.classList.remove("user--hide");//Tu enlèves la classe user--hide
            dataValue.classList.remove("disabled");//Tu enlèves la classe 
        }else{//Sinon
            dataValue.classList.add("user--hide");//tu ajoutes la classe user--hide
            dataValue.classList.add("disabled");//tu ajoutes la classe
        }
    }
});

phyllium.addEventListener("click", (e) =>{
    ramulus.classList.remove("disabled");//Tu enlèves la classe ou la rajoute
    phyllium.classList.toggle("disabled");
    for(let dataValue of dataValues){
        let btnPhyllium = phyllium.getAttribute("data-filter");
        let filter = dataValue.getAttribute("data-filter").toLowerCase();//Récupère la valeur du data-filter en minuscule
        if(filter.includes(btnPhyllium)){//Si la valeur de filter inclu la valeur stockée dans term
            dataValue.classList.remove("user--hide");//Tu enlèves la classe user--hide
            dataValue.classList.remove("disabled");//Tu enlèves la classe 
        }else{//Sinon
            dataValue.classList.add("user--hide");//tu ajoutes la classe user--hide
            dataValue.classList.add("disabled");//tu ajoutes la classe
        }
    }
}); 


