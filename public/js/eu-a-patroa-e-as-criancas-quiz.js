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
      text: 'Ops!<br>Estude mais memeologia!',
      minEqual: 4,
      imgSrc: '/public/images/eu-a-patroa-e-as-criancas-nah.gif',
      imgAlt: 'Michael de eu a patroa e as crianças dizendo nah'
    },
    {
      text: 'Excelente!<br>Você é um bom Memólogo!',
      minEqual: 8,
      imgSrc: '/public/images/menino-dando-joinha.gif',
      imgAlt: 'Menino dando joinha na frente do computador'
    },
    {
      text: 'Impressionante!<br>Você é um Memestre imbatível!',
      minEqual: 10,
      imgSrc: '/public/images/brooklyn-nine-nine-comemoracao.gif',
      imgAlt: 'Equipe do brooklyn nine nine comemorando'
    }
  ]

  renderQuiz(questions, possibleResults)
}

main()
