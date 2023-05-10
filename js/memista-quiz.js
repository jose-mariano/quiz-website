function main() {
  const questions = [
    {
      number: '1',
      answer: 'b'
    },
    {
      number: '2',
      answer: 'b'
    },
    {
      number: '3',
      answer: 'a'
    },
    {
      number: '4',
      answer: 'c'
    },
    {
      number: '5',
      answer: ''
    },
    {
      number: '6',
      answer: ''
    },
    {
      number: '7',
      answer: ''
    },
    {
      number: '8',
      answer: ''
    },
    {
      number: '9',
      answer: ''
    },
    {
      number: '10',
      answer: ''
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

  renderQuiz(questions, possibleResults)
}

main()
