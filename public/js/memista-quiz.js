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
      answer: 'd'
    },
    {
      number: '6',
      answer: 'c'
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
      answer: 'd'
    },
    {
      number: '10',
      answer: 'b'
    }
  ]

  const possibleResults = [
    {
      text: 'Ops!<br>Estude mais memeologia!',
      minEqual: 4,
      imgSrc: '/public/images/meme-quiz/eu-a-patroa-e-as-criancas-nah.gif',
      imgAlt: 'Michael de eu a patroa e as crianças dizendo nah'
    },
    {
      text: 'Excelente!<br>Você é um bom Memólogo!',
      minEqual: 8,
      imgSrc: '/public/images/meme-quiz/menino-dando-joinha.gif',
      imgAlt: 'Menino dando joinha na frente do computador'
    },
    {
      text: 'Impressionante!<br>Você é um Memestre imbatível!',
      minEqual: 10,
      imgSrc: '/public/images/meme-quiz/brooklyn-nine-nine-comemoracao.gif',
      imgAlt: 'Equipe do brooklyn nine nine comemorando'
    }
  ]

  renderQuiz(questions, possibleResults)
}

main()
