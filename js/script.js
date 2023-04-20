function main() {
  const answers = [
    {
      question: 1,
      answer: 'c'
    },
    {
      question: 2,
      answer: 'a'
    }
  ]

  const containerStartBtn = document.querySelector('#container-start-button')
  const containerQuestions = document.querySelector('#container-questions')
  const containerResult = document.querySelector('#container-result')

  const startButton = document.querySelector('#start-button')
  startButton.addEventListener('click', () => {
    containerStartBtn.classList.remove('element-active')
    containerQuestions.classList.add('element-active')

    showQuestions(showQuizResult)
  })

  function showQuizResult(answers) {
    containerQuestions.classList.remove('element-active')
    containerResult.classList.add('element-active')

    console.log(answers)
  }
}

main()
