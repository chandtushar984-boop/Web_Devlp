const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "Which keyword is used to declare a variable in JavaScript?", answer: "let" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What language is used to style web pages?", answer: "css" }
];
function runQuiz() {
    let score = 0; 
    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);
        if (userAnswer === null) {
            alert("You exited the quiz!");
            return;
        }

        userAnswer = userAnswer.toLowerCase().trim();
        if (userAnswer === quizQuestions[i].answer) {
            alert("Correct! 👍");
            score++;
        } else {
            alert("Wrong \nCorrect answer: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz Completed!\nYour Score: " + score + " out of " + quizQuestions.length);
}
runQuiz();
