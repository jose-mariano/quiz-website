function showQuestions(containerQuestions, questions) {
  const questionTitle = document.createElement('h2')
  questionTitle.classList.add('question-title')
  questionTitle.innerText = 'Pergunta?'

  const questionAlternatives = document.createElement('ol')
  questionAlternatives.classList.add('question-alternatives')

  const alternative = document.createElement('li')
  alternative.classList.add('alternative')
  alternative.innerText = 'Resposta 1'

  const alternative2 = document.createElement('li')
  alternative2.classList.add('alternative')
  alternative2.innerText = 'Resposta 2'

  const alternative3 = document.createElement('li')
  alternative3.classList.add('alternative')
  alternative3.innerText = 'Resposta 3'

  const alternative4 = document.createElement('li')
  alternative4.classList.add('alternative')
  alternative4.innerText = 'Resposta 4'

  questionAlternatives.appendChild(alternative)
  questionAlternatives.appendChild(alternative2)
  questionAlternatives.appendChild(alternative3)
  questionAlternatives.appendChild(alternative4)
  containerQuestions.appendChild(questionTitle)
  containerQuestions.appendChild(questionAlternatives)
}
