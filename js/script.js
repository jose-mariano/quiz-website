function main() {
  const currentUrl = location.href

  const questions = [
    {
      number: '1',
      answer: 'a'
    },
    {
      number: '2',
      answer: 'b'
    }
  ]

  const possibleResults = [
    {
      text: 'Você é ruim!',
      minEqual: 0
    },
    {
      text: 'Você ganhou!',
      minEqual: 1
    },
    {
      text: 'Você ganhou 2!',
      minEqual: 2
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

  function showQuizResult(answers) {
    containerQuestions.classList.remove('element-active')
    containerResult.classList.add('element-active')
    
    let totalResult = 0

    for(const question of questions) {
      const answer = answers.find((currentAnswer) => question.number === currentAnswer.question)
      if(answer && question.answer === answer.value){
        totalResult++
      }
    }

    const resultText = getResultText(totalResult, possibleResults)
    document.querySelector('.result').innerText = resultText
    document.querySelector('.total-result').innerText = `Total de acertos: ${totalResult}/${questions.length}`
    document.title = `${resultText} - Quiz`
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

  function getResultText(totalResult, possibleResults) {
    for(const result of possibleResults){
      if(totalResult <= result.minEqual){
        return result.text
      }
    }
    return ''
  }
}

main()
