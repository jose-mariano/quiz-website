function main() {
  const questions = [
    {
      question: 'Pergunta?',
      alternatives: [
        'Resposta 1',
        'Resposta 2',
        'Resposta 3',
        'Resposta 4'
      ],
      answer: 2
    }
  ]

  const startButton = document.querySelector('#start-button')
  startButton.addEventListener('click', () => {
    const containerStartBtn = document.querySelector('#container-start-button')
    const containerQuestions = document.querySelector('#container-questions')
    
    containerStartBtn.classList.remove('element-active')
    containerQuestions.classList.add('element-active')

    showQuestions(containerQuestions, questions)
  })
}

main()
