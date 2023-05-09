function main() {
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

  renderQuiz(questions, possibleResults)
}

main()
