const veiculos = [
  {
    nome: "Sedan Esportivo",
    categoria: "carro",
    preco: "R$ 85.000",
    imagem: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400"
  },
  {
    nome: "Moto 600cc",
    categoria: "moto",
    preco: "R$ 38.000",
    imagem: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400"
  },
  {
    nome: "Patinete Elétrico Pro",
    categoria: "patinete",
    preco: "R$ 3.200",
    imagem: "https://images.unsplash.com/photo-1597082618443-80d42646c770?w=400"
  },
  {
    nome: "SUV Familiar",
    categoria: "carro",
    preco: "R$ 110.000",
    imagem: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400"
  }
];

function renderizarVeiculos(lista) {
  const container = document.getElementById("catalogo");
  container.innerHTML = "";

  lista.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">
      <h3>${item.nome}</h3>
      <p>${item.preco}</p>
      <button onclick="comprar('${item.nome}')">Comprar</button>
    `;
    container.appendChild(card);
  });
}

function filtrar(categoria) {
  if (categoria === 'todos') {
    renderizarVeiculos(veiculos);
  } else {
    const filtrados = veiculos.filter(v => v.categoria === categoria);
    renderizarVeiculos(filtrados);
  }
}

function comprar(nome) {
  alert(`Você iniciou o processo de compra do: ${nome}`);
}

// Carrega todos os itens ao iniciar a página
renderizarVeiculos(veiculos);
