
import Affichage from "./Affichage.js"
import ComptageQ from "./ComptageQ.js";
let affichage = new Affichage();
let comptageQ = new ComptageQ();

let nbQuestion = 0;
comptageQ.comptage(nbQuestion)

let suivant = document.querySelector(".suivant")
let button = document.querySelector(".start")
let boutonReponse = document.querySelectorAll(".rep"); //écoute bouton rep1
console.log(boutonReponse)
//*********************************************************** */
//apparition des blocs question et réponse
//*********************************************************** */

function apparition() {
    let contentQuestion = document.querySelector(".contentQuestion");
    let contentReponse = document.querySelector(".contentReponse");
    let bas = document.querySelector(".bas");
    let bas2 = document.querySelector(".bas2");
    button.addEventListener("click", () => {
        contentQuestion.style.display = "block";
        contentReponse.style.display = "block";
        bas.style.display = "none";
        bas2.style.display = "flex";
    });
}
apparition();
//*********************************************************** */
//Jouer apparietion question plus comptage
//*********************************************************** */

boutonReponse.addEventListener("click", () => {
    let contentReponse = document.querySelector(".contentReponse");
    contentReponse.innerHTML = "";   // je vide mon écriture présédente
    nbQuestion++;
    comptageQ.comptage(nbQuestion);


})



//*********************************************************** */
//Timer
//*********************************************************** */

// création de fin de décompte
let decompte = function (i) {
    document.getElementById("decompte").innerHTML = i + " s"
}

let temps = 0

// i représente le nombre a décompté
let decremente = function () {
    for (let i = 60; i > -1; i--) {
        setTimeout((function (s) {
            return function () {
                //fonction d'affichage du décompte
                decompte(s)
            }
        })(i), temps) //arret de la boucle a 0
        // set timeout toujour en miliseconde donc 1000 pour 1s
        temps += 1000
    }
}
//appelle de la fonction

function start() {
    decremente()
    // if (temps === 0) {            /*si temps à 0*/
    //     if (vieRestante > 1) {      /*si   restante sup a 1*/
    //         vieRestante--       /*on enlève 1 a vie restante*/
    //         actionVie()          /*donc j'enlève 1 a action vie*/
    //         questionActuel++    /*augmente la valeur de la question actuel*/
    //         if (questionActuel < afficheTotal) {
    //             suivant(questionActuel)
    //         }
    //     }
    // }
}
//écoute du click
let startBouton = document.getElementById("start")

startBouton.addEventListener("click", start)

//*********************************************************** */
//message
//*********************************************************** */
function message(juste) {
    let messageRep = document.querySelector(".messageRep")
    messageRep.textContent = juste ? "Bonne réponse" : "Mauvaise réponse"  //creation de boelen
    messageRep.style.color = juste ? "grenn" : "red"
    messageRep.style.display = "block"
}


//*********************************************************** */
//VerificationReponse
//*********************************************************** */


function VerificationReponse(bonneRponse) {

    let repJoueur = quiz[i].reponse;
    // console.log(quiz[i].reponse)
    // solution()
    if (bonneRponse == repJoueur.juste) {
        message(true)
        //utilisation de boelen
        scoreActualise = +6    // rajoute plus +6 
        intScore                // met a jour


    } else {
        message(false)   //message faux

        vieRestante = --      // enleve une vie
            actionVie()      // met a jour la vie
    }
    return
}

// function solution(numeroQuestion) {
//     let quiz = quiz
//     let reponse = quiz.reponse
//     let solution = quiz[0]
//     console.log(reponse)
//     if (reponse === solution) {

//     }
// }


boutonReponse.forEach((bouton, index) => {//execution fonction et écoute
    bouton.addEventListener("click", () => {
        VerificationReponse(index);
    });
});



//*********************************************************** */
// //score//
// /*********************************** */
let score = document.querySelector(".score")
let scoreAjouter = 6 //score par bonne répone
const scoreBase = 0
let scoreActualise = scoreBase
function intScore() {

    score.textContent = scoreActualise

}

intScore()

//*********************************************************** */
//vie
//******************************************************* */
let resteVie = document.querySelector(".resteVie")
const maxVie = 3 //vie maximum
let vieRestante = maxVie
function actionVie() {
    resteVie.textContent = vieRestante
}

actionVie()


