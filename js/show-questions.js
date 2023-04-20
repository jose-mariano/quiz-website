function showQuestions(sendAnswers) {
  const state = {
    questions: Array.from(document.querySelectorAll('.question')),
    currentQuestion: null,
    answers: []
  }

  function nextQuestion() {
    if(state.questions.length === 0) {
      return sendAnswers(state.answers)
    }

    if(state.currentQuestion) {
      state.currentQuestion.classList.remove('element-active')
    }

    state.currentQuestion = state.questions.shift()
    state.currentQuestion.classList.add('element-active')
  }

  const alternatives = document.querySelectorAll('.alternative')
  for (const alternative of alternatives) {
    alternative.addEventListener('click', () => {
      const questionNumber = alternative.dataset.question
      const answer = alternative.dataset.answer

      if (questionNumber === state.currentQuestion.dataset.question) {
        state.answers.push({
          question: questionNumber,
          answer
        })
        nextQuestion()
      }
    })
  }

  nextQuestion()
}
