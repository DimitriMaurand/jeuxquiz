/********************************************
 * question
 *******************************************/
export default class Affichage {



    constructor(question, reponse) {
        this.question = question
        this.reponse = reponse
        // this.reponse2 = reponse2
    }


    apparitionHtml(numeroQuestion) {
        let question = quiz[numeroQuestion].question
        let reponse = quiz[numeroQuestion].reponse

        let nouvelleAffichage = new Affichage(question, reponse)
        let contentQuestion = document.querySelector(".contentQuestion")
        let contentReponse = document.querySelector(".contentReponse")




        contentQuestion.innerHTML = `<p class="question ">${nouvelleAffichage.question}</p>`
        nouvelleAffichage.reponse.forEach(quiz1 => {

            contentReponse.innerHTML += `<button  class="rep1 rep pBarre boutonRep" onclick=VerificationReponse(bonneRponse) >${quiz1}</button>`

        })

    }

}




// recherche de changement de question ou d'index quand j'appuis sur valider
// let index = quiz[0]
// function suivant() {

//     for (index = 0; index < array.length; index++) {
//         let [index] = array[index];
//     }
// }
// let startBoutons = document.getElementsByClassName(".start")
// startBoutons.addEventListener("click", suivant)

