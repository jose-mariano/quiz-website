function main() {
  const questions = [
    {
      question: 'Primeira pergunta?',
      alternatives: [
        'Resposta 1',
        'Resposta 2',
        'Resposta 3',
        'Resposta 4'
      ],
      answer: 2
    },
    {
      question: 'Segunda pergunta?',
      alternatives: [
        'Resposta 1',
        'Resposta 2',
        'Resposta 3',
        'Resposta 4'
      ],
      answer: 0
    }
  ]

  const containerStartBtn = document.querySelector('#container-start-button')
  const containerQuestions = document.querySelector('#container-questions')
  const startButton = document.querySelector('#start-button')
  startButton.addEventListener('click', () => {
    containerStartBtn.classList.remove('element-active')
    containerQuestions.classList.add('element-active')

    showQuestions(containerQuestions, questions, showQuizResult)
  })

  function showQuizResult(answers) {
    console.log(answers)
    containerQuestions.classList.remove('element-active')
  }
}

main()
