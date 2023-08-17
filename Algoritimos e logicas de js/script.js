const estudantes = [
    {
      nome: "Alice",
      notaProva1: 8,
      notaProva2: 7,
    },
    {
      nome: "Bob",
      notaProva1: 6,
      notaProva2: 9,
    },
    {
      nome: "Carol",
      notaProva1: 7,
      notaProva2: 6,
    },
  ];
  estudantes.forEach(estudante => {
    const media = (estudante.notaProva1 + estudante.notaProva2) / 2;
  
    if (media >= 7) {
      alert(`${estudante.nome} - Média: ${media.toFixed(2)}\nParabéns ${estudante.nome}, você passou!`);
    } else {
      alert(`${estudante.nome} - Média: ${media.toFixed(2)}\nNão foi desta vez ${estudante.nome}, você não passou.`);
    }
  });