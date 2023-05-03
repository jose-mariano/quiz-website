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

  const repeatButton = document.querySelector('#repeat-button')
  repeatButton.addEventListener('click', () => {
    containerResult.classList.remove('element-active')
    containerStartBtn.classList.add('element-active')
  })

  const copyToClipboardButton = document.querySelector('#copy-to-clipboard')
  copyToClipboardButton.addEventListener('click', () => {
    navigator.clipboard.writeText(location.href)
    showMessage('Link copiado!', 2)
  })

  openSocialMedia('#btn-whatsapp', 'https://api.whatsapp.com/send?text=http://localhost:8080')
  openSocialMedia('#btn-twitter', 'https://twitter.com/intent/tweet?text=http://localhost:8080')
  openSocialMedia('#btn-facebook', 'https://www.facebook.com/sharer/sharer.php?u=http://localhost:8080')

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

    console.log(answers)
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
}

main()
