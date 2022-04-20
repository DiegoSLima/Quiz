const quizData = [
   {
       question: "1) Onde será realizado a copa do mundo de futebol de 2022?",
       a: "Arábia Saudita",
       b: "Egito",
       c: "Qatar",
       d: "Turquia",
       e: "Suiça",
       correct: "c",
   },
   {
       question: "2) Em qual continente fica a Jamaica?",
       a: "África",
       b: "Ásia",
       c: "Oceania",
       d: "América",
       e: "Europa",
       correct: "d",
   },
   {
       question: "3) De quem é a frase 'Penso logo existo'?",
       a: "Sócrates",
       b: "Galileu Galilei",
       c: "Platão",
       d: "Descartes",
       e: "Albert Einstein",
       correct: "d",
   },
   {
       question: "4) De onde é a invenção do chuveiro elétrico?",
       a: "Inglaterra",
       b: "Brasil",
       c: "Itália",
       d: "França",
       e: "Alemanha",
       correct: "b",
   },
   {
       question: "5) Qual é o menor país do mundo?",
       a: "Vaticano",
       b: "indonésia",
       c: "Paquistão",
       d: "Haiti",
       e: "Cuba",
       correct: "a",
   },
   {
    question: "6) O Brasil faz fronterira com quantas nações?",
    a: "8",
    b: "10",
    c: "7",
    d: "12",
    e: "9",
    correct: "b",
   },
   {
    question: "7) Qual o livro mais vendido depois da Bíblia?",
    a: "O pequeno Príncipe",
    b: "Dom Quixote",
    c: "O senhor dos Anéis",
    d: "Harry potter e a pedra filosofal",
    e: "O código da Vinci",
    correct: "b",
   },
   {
    question: "8) Qual a nacionalidade de Che Guevara?",
    a: "Chile",
    b: "Uruguai",
    c: "Cuba",
    d: "Argentina",
    e: "Colombia",
    correct: "d",
   },
   {
    question: "9) Qual destes países é transcontinental?",
    a: "China",
    b: "Russia",
    c: "Índia",
    d: "Canadá",
    e: "Egito",
    correct: "b",
   },
   {
    question: "10) Em que oceano fica Madagascar?",
    a: "Pacífico",
    b: "Atlântico",
    c: "Índico",
    d: "Ártico",
    e: "Antártico",
    correct: "c",
},

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const EnviarBtn = document.getElementById('Enviar')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getselected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


EnviarBtn.addEventListener('click', () => {
    const answer = getselected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>Você acertou ${score}/${quizData.length} de todas as questões</h2>

            <button onclick="location.reload()">Recarregar</button>
            `
        }
    }
})