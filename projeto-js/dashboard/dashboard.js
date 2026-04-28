const produtos = [
  {
    id: 1,
    nome: "Notebook Gamer RTX",
    imagem: "https://m.media-amazon.com/images/I/71dnl0mJOML._AC_SY300_SX300_QL70_ML2_.jpg",
    descricao: "Notebook de alta performance para jogos e edição.",
    avaliacao: 4.8,
    localidade: "São Paulo - SP",
    valor: 5200
  },
  {
    id: 2,
    nome: "Mouse RGB Pro",
    imagem: "https://m.media-amazon.com/images/I/419wietAPNL._AC_SX679_.jpg",
    descricao: "Mouse ergonômico com iluminação RGB.",
    avaliacao: 4.5,
    localidade: "Rio de Janeiro - RJ",
    valor: 150
  },
  {
    id: 3,
    nome: "Teclado Mecânico",
    imagem: "https://m.media-amazon.com/images/I/61hibjGBqPL._AC_SX679_.jpg",
    descricao: "Switch blue, ideal para digitação e games.",
    avaliacao: 4.7,
    localidade: "Belo Horizonte - MG",
    valor: 320
  },
  {
    id: 4,
    nome: "Monitor 144Hz",
    imagem: "https://m.media-amazon.com/images/I/510mTWzS4lL._AC_SX679_.jpg",
    descricao: "Tela Full HD com alta taxa de atualização.",
    avaliacao: 4.6,
    localidade: "Curitiba - PR",
    valor: 1300
  },
  {
    id: 5,
    nome: "Headset Gamer",
    imagem: "https://m.media-amazon.com/images/I/71i9rwfndbL._AC_SX679_.jpg",
    descricao: "Som imersivo com cancelamento de ruído.",
    avaliacao: 4.4,
    localidade: "Fortaleza - CE",
    valor: 280
  },
  {
    id: 6,
    nome: "Cadeira Gamer",
    imagem: "https://m.media-amazon.com/images/I/71MjteVPblL._AC_SX679_.jpg",
    descricao: "Conforto ergonômico para longas sessões.",
    avaliacao: 4.3,
    localidade: "Salvador - BA",
    valor: 950
  },
  {
    id: 7,
    nome: "Webcam Full HD",
    imagem: "https://m.media-amazon.com/images/I/51LQrdKVhFL._AC_SX522_.jpg",
    descricao: "Ideal para reuniões e streaming.",
    avaliacao: 4.2,
    localidade: "Recife - PE",
    valor: 220
  },
  {
    id: 8,
    nome: "SSD 1TB",
    imagem: "https://m.media-amazon.com/images/I/81W8+ZvU4NL._AC_SX679_.jpg",
    descricao: "Alta velocidade de leitura e escrita.",
    avaliacao: 4.9,
    localidade: "Porto Alegre - RS",
    valor: 600
  },
  {
    id: 9,
    nome: "HD Externo 2TB",
    imagem: "https://m.media-amazon.com/images/I/91e-WNUpH0L._AC_SX679_.jpg",
    descricao: "Armazenamento portátil confiável.",
    avaliacao: 4.6,
    localidade: "Florianópolis - SC",
    valor: 450
  },
  {
    id: 10,
    nome: "Placa de Vídeo RX 6600",
    imagem: "https://m.media-amazon.com/images/I/81QItJufypL._AC_SX679_.jpg",
    descricao: "Excelente custo-benefício para jogos.",
    avaliacao: 4.8,
    localidade: "Campinas - SP",
    valor: 1800
  }
];

function carregarProdutos() {
    let productsContainer = document.querySelector("#productsContainer")
    
    produtos.map((produto) => {
      productsContainer.innerHTML += `
      
        <div class="product-card">
        <img src=${produto.imagem} alt="Produto" class="product-image">

        <div class="product-content">
          <h3 class="product-title">${produto.nome}</h3>

          <p class="product-description">
            ${produto.descricao}
          </p>

          <div class="product-info">
            <span class="product-location">📍${produto.localidade} </span>
            <span class="product-rating">⭐ ${produto.avaliacao}</span>
          </div>

          <div class="product-footer">
            <span class="product-price">R$ ${produto.valor}</span>
            <button class="product-btn">Ver mais</button>
          </div>
        </div>
     </div>
      `
    });
}
carregarProdutos()

function carregarFormularioCadastrado() {
  let body = document.querySelector("body")
  let div = document.createElement("div")
  div.innerHTML += `
  <div id="overlay" class="overlay">
        <form class="product-form">
            <h2>Cadastrar Produto</h2>
            <button type="button" class="btn-close" id="btnFechar" onclick="fecharFormulario()">✕</button>
            <div class="form-group">
            <label>Nome</label>
            <input type="text" placeholder="Nome do produto">
            </div>

            <div class="form-group">
            <label>Imagem (URL)</label>
            <input type="text" placeholder="https://...">
            </div>

            <div class="form-group">
            <label>Descrição</label>
            <textarea rows="3" placeholder="Descrição..."></textarea>
            </div>

            <div class="form-row">
            <div class="form-group">
                <label>Preço</label>
                <input type="number" placeholder="0.00">
            </div>
            <div class="form-group">
                <label>Avaliação</label>
                <input type="number" step="0.1" min="0" max="5" placeholder="0.0">
            </div>
            </div>

            <div class="form-group">
            <label>Localidade</label>
            <input type="text" placeholder="Cidade - Estado">
            </div>

            <button type="submit" class="btn-submit">Cadastrar</button>
        </form>
        </div>
  `
  div.classList.add("identificadora")
body.appendChild(div)
}


function fecharFormulario() {
  let body = document.querySelector("body")
  let identificadora = document.querySelector(".identificadora")
  body.removeChild(identificadora)
}