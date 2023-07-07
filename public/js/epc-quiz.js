function main() {
  const questions = [
    {
      number: '1',
      answer: 'd'
    },
    {
      number: '2',
      answer: 'b'
    },
    {
      number: '3',
      answer: 'c'
    },
    {
      number: '4',
      answer: 'a'
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
      answer: 'c'
    },
    {
      number: '9',
      answer: 'a'
    },
    {
      number: '10',
      answer: 'd'
    }
  ]

  const possibleResults = [
    {
      text: 'Anota ai!<br> Assistir mais a série!',
      minEqual: 4,
      imgSrc: '/public/images/epc-quiz/junior-com-caderneta.jpeg',
      imgAlt: 'Júnior anotando o que michael está dizendo'
    },
    {
      text: 'Sua pontuação é tão impressionante<br> quanto as trapalhadas do Junior!',
      minEqual: 8,
      imgSrc: '/public/images/epc-quiz/michael-sorrindo.jpeg',
      imgAlt: 'Michael sorrindo'
    },
    {
      text: 'Você é quase um membro da familia Kyle!',
      minEqual: 10,
      imgSrc: '/public/images/epc-quiz/franklin-sorrindo.jpeg',
      imgAlt: 'Franklin sorrindo em frente ao computador'
    }
  ]

  renderQuiz(questions, possibleResults)
}

main()
