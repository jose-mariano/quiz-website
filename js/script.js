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

  const btnShare = document.querySelector('#btn-share')
  btnShare.addEventListener('click', () => {
    console.log('teste')
  })

  const btnWhatsapp = document.querySelector('#btn-whatsapp')
  btnWhatsapp.addEventListener(
    'click',
    () => openNewWindow('https://api.whatsapp.com/send?text=http://localhost:8080'),
  )

  const btnTwitter = document.querySelector('#btn-twitter')
  btnTwitter.addEventListener(
    'click',
    () => openNewWindow('https://twitter.com/intent/tweet?text=http://localhost:8080'),
  )

  const btnFacebook = document.querySelector('#btn-facebook')
  btnFacebook.addEventListener(
    'click',
    () => openNewWindow('https://www.facebook.com/sharer/sharer.php?u=http://localhost:8080'),
  )

  const copyToClipboardButton = document.querySelector('#copy-to-clipboard')
  copyToClipboardButton.addEventListener('click', () => {
    navigator.clipboard.writeText(location.href)
  })

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
}

main()
