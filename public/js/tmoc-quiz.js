function main() {
  const questions = [
    {
      number: '1',
      answer: 'b'
    },
    {
      number: '2',
      answer: 'c'
    },
    {
      number: '3',
      answer: 'a'
    },
    {
      number: '4',
      answer: 'd'
    },
    {
      number: '5',
      answer: 'c'
    },
    {
      number: '6',
      answer: 'a'
    },
    {
      number: '7',
      answer: 'a'
    },
    {
      number: '8',
      answer: 'b'
    },
    {
      number: '9',
      answer: 'd'
    },
    {
      number: '10',
      answer: 'a'
    }
  ]

  const possibleResults = [
    {
      text: 'Você assistiu a série mesmo?',
      minEqual: 4,
      imgSrc: '/public/images/tmoc-quiz/chris-familia-brava.jpeg',
      imgAlt: 'Familia do Chris brava'
    },
    {
      text: 'É até que você entende do assunto!<br> Merece um B-',
      minEqual: 8,
      imgSrc: '/public/images/tmoc-quiz/chris-b.jpeg',
      imgAlt: 'Chris com camiseta b menos'
    },
    {
      text: 'Você conhece mesmo a série!<br> Merece um prêmio!',
      minEqual: 10,
      imgSrc: '/public/images/tmoc-quiz/chris-recebendo-premio.gif',
      imgAlt: 'Chris recebendo um prêmio'
    }
  ]

  renderQuiz(questions, possibleResults)
}

main()
