function showQuestions(containerQuestions, questions, sendAnswers) {
  if (questions.length < 1) {
    return
  }

  const state = {
    currentQuestionIndex: null,
    currentQuestion: null,
    answers: []
  }

  function updateScreen() {
    containerQuestions.innerHTML = ''

    if (!state.currentQuestion) {
      return
    }

    const questionTitle = document.createElement('h2')
    questionTitle.classList.add('question-title')
    questionTitle.innerText = state.currentQuestion.question

    const questionAlternatives = document.createElement('ol')
    questionAlternatives.classList.add('question-alternatives')

    for (const alternativeIndex in state.currentQuestion.alternatives) {
      const alternativeText = state.currentQuestion.alternatives[alternativeIndex]

      const alternativeElement = document.createElement('li')
      alternativeElement.classList.add('alternative')
      alternativeElement.innerText = alternativeText
      alternativeElement.addEventListener('click', () => {
        state.answers.push(Number(alternativeIndex))
        nextQuestion()
      })

      questionAlternatives.appendChild(alternativeElement)
    }

    containerQuestions.appendChild(questionTitle)
    containerQuestions.appendChild(questionAlternatives)
  }

  function nextQuestion() {
    state.currentQuestionIndex = (state.currentQuestionIndex !== null) ? state.currentQuestionIndex + 1 : 0
    state.currentQuestion = null

    if (state.currentQuestionIndex < questions.length) {
      state.currentQuestion = questions[state.currentQuestionIndex]
    } else {
      sendAnswers(state.answers)
    }

    updateScreen()
  }

  nextQuestion()
}
