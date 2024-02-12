import Affichage from "./Affichage.js";

//numéro question

export default class ComptageQ {
    affichage;

    constructor(numéroQuestion, totalQuestion) {
        this.affichage = new Affichage();
        this.numéroQuestion = numéroQuestion
        this.totalQuestion = totalQuestion

    }

    get affichage() {
        return this.affichage;
    }

    comptage(numeroQuestionSuivante) {
        let contentNumeroQuestion = document.querySelector(".numeroQuestion")
        let contentQuestion = document.querySelector(".totalQuestion")

        let totalQuestion = (quiz.length)
        contentQuestion.textContent = totalQuestion
        contentNumeroQuestion.textContent = numeroQuestionSuivante;


        this.affichage.apparitionHtml(numeroQuestionSuivante);

    }
}
