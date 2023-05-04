var quiz = {
  user: "Om",
  questions: [
  

  {
    text:
    "Which of the following is the largest planet in our solar system?",
    responses: [
    { text: "Venus" },
    { text: "Mars" },
    { text: "Jupiter", correct: true },
    { text: "Saturn" }] },


  {
    text: "What is the smallest country in the world by land area?",
    responses: [
    { text: " Vatican City", correct: true },
    { text: "Monaco " },
    {
      text: "Liechtenstein" },

    { text: "San Marino" }] },


  {
    text: "What is the capital of Australia? ",
    responses: [
    { text: " Sydney" },
    { text: "Canberra", correct: true },
    { text: "Melbourne " },
    { text: "Brisbane" }] },


  {
    text:
    "Who is the current CEO of Tesla?",
    responses: [
    {
      text: "Steve Jobs" },

    { text: "Bill Gates " },
    { text: "Elon Musk", correct: true },
    { text: "Jeff Bezos" }] },


  {
    text: "Which of the following is the tallest mammal in the world?",
    responses: [
    { text: "Elephant " },
    { text: "Giraffe", correct: true },
    { text: "Hippopotamus" },
    { text: "Rhino" }] }] },




userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false,
    playerScore: 0   },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    } },

  methods: {
    restart: function () {
      this.playerScore = 0;
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    
    next: function () {
      this.playerScore = this.score(); 
      if (this.questionIndex < this.quiz.questions.length)
      this.questionIndex++;
      return this.playerScore;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
        typeof this.quiz.questions[i].responses[
        this.userResponses[i]] !==
        "undefined" &&
        this.quiz.questions[i].responses[this.userResponses[i]].correct)
        {
          score = score + 1;
        }
        else if (
          typeof this.quiz.questions[i].responses[
          this.userResponses[i]] !==
          "undefined" &&
          !this.quiz.questions[i].responses[this.userResponses[i]].correct){
          score = score - 1;
        }
      }
      return score;

    } } });