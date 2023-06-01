function renderQuiz(questions, possibleResults) {
  const currentUrl = location.href
  const containerStartBtn = document.querySelector('#container-start-button')
  const containerQuestions = document.querySelector('#container-questions')
  const containerResult = document.querySelector('#container-result')

  const startButton = document.querySelector('#start-button')
  startButton.addEventListener('click', () => {
    containerStartBtn.classList.remove('element-active')
    containerQuestions.classList.add('element-active')

    showQuestions((answers) => {
      containerQuestions.classList.remove('element-active')
      containerResult.classList.add('element-active')
      
      let totalResult = 0

      for(const question of questions) {
        const answer = answers.find((currentAnswer) => question.number === currentAnswer.question)
        if(answer && question.answer === answer.value){
          totalResult++
        }
      }

      const result = getResult(totalResult, possibleResults)
      const resultElement = document.querySelector('#result')

      resultElement.innerHTML = ''
      resultElement.innerHTML += `<div class="container-image"><img src="${result.imgSrc}" alt="${result.imgAlt}" class="image"></div>`
      resultElement.innerHTML += `<h2 class="title-result">${result.text}</h2>`
      resultElement.innerHTML += `<p class="total-result">Total de acertos: ${totalResult}/${questions.length}</p>`
    })

    window.scroll(0, window.screen.height)
  })

  const repeatButton = document.querySelector('#repeat-button')
  repeatButton.addEventListener('click', () => {
    containerResult.classList.remove('element-active')
    containerStartBtn.classList.add('element-active')
  })

  const copyToClipboardButton = document.querySelector('#copy-to-clipboard')
  copyToClipboardButton.addEventListener('click', () => {
    navigator.clipboard.writeText(currentUrl)
    showMessage('Link copiado!', 2)
  })

  openSocialMedia('#btn-whatsapp', `https://api.whatsapp.com/send?text=${currentUrl}`)
  openSocialMedia('#btn-twitter', `https://twitter.com/intent/tweet?text=${currentUrl}`)
  openSocialMedia('#btn-facebook', `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`)
}

function showQuestions(sendAnswers) {
  const state = {
    questions: Array.from(document.querySelectorAll('.question')),
    currentQuestion: null,
    answers: []
  }

  function nextQuestion() {
    if(state.currentQuestion) {
      state.currentQuestion.classList.remove('element-active')
    }

    if(state.questions.length === 0) {
      return sendAnswers(state.answers)
    }

    state.currentQuestion = state.questions.shift()
    state.currentQuestion.classList.add('element-active')
  }

  const alternatives = document.querySelectorAll('.alternative')
  for (const alternative of alternatives) {
    alternative.onclick = () => {
      const questionNumber = alternative.dataset.question
      const answer = alternative.dataset.answer

      if (questionNumber === state.currentQuestion.dataset.question) {
        state.answers.push({
          question: questionNumber,
          value: answer
        })
        nextQuestion()
      }
    }
  }

  nextQuestion()
}

function getResult(totalResult, possibleResults) {
  for(const result of possibleResults){
    if(totalResult <= result.minEqual){
      return { text: result.text, imgSrc: result.imgSrc, imgAlt: result.imgAlt }
    }
  }

  return {}
}

function showMessage(message, timeInSeconds = null) {
  const body = document.querySelector('body')
  const div = document.createElement('div')
  div.classList.add('popup')
  div.innerHTML = `<span>${message}</span>`

  body.appendChild(div)

  if(timeInSeconds){
    setTimeout(() => {
      body.removeChild(div)
    }, timeInSeconds * 1000)
  }
}

function openSocialMedia(elementId, socialMediaUrl) {
  const element = document.querySelector(elementId)
  element.addEventListener(
    'click',
    () => openNewWindow(socialMediaUrl),
  )
}

function openNewWindow(url) {
  window.open(
    url,
    '_blank',
    'width=800,height=600',
  )
}
