// ===== TELA INICIAL =====
function telaInicial() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="home">
      <h2>📚 LadyLitora</h2>
      <p class="slogan">Um clube de leitura feito para todas as pessoas</p>
      <p class="descricao">Leitura, conexão e troca de experiências em um espaço seguro e acolhedor.</p>
      <button onclick="telaLogin()">💖 Entrar no clube</button>
    </div>
  `;
}

// ===== TELA LOGIN =====
function telaLogin() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <h2>💖 Bem-vinda ao LadyLitora</h2>
    <p>Digite seu nome para entrar</p>
    <input id="nome" placeholder="Seu nome" />
    <button onclick="entrar()">Entrar</button>
  `;
}

function entrar() {
  const nome = document.getElementById("nome").value;
  if (!nome) {
    alert("Por favor, digite seu nome");
    return;
  }
  localStorage.setItem("usuario", nome);
  mostrarLivros();
}

// ===== LOGOUT =====
function sair() {
  localStorage.removeItem("usuario");
  telaInicial();
}

function voltarMenu() {
  if (document.referrer) {
    window.history.back(); // volta para a página anterior se houver
  } else {
    window.location.href = 'index.html'; // se não houver página anterior, vai para o menu
  }
}

// ===== LISTA DE LIVROS =====
const livros = [
  {
    id: 1,
    titulo: "Mulheres que Correm com os Lobos",
    autora: "Clarissa Pinkola Estés",
    descricao: "Um livro sobre o poder do feminino.",
    imagem: "img/livro1.jpg"
  },
  {
    id: 2,
    titulo: "O Conto da Aia",
    autora: "Margaret Atwood",
    descricao: "Uma distopia sobre direitos das mulheres.",
    imagem: "img/livro2.jpg"
  }
];

// ===== MOSTRAR LIVROS =====
function mostrarLivros() {
  const nome = localStorage.getItem("usuario");
  if (!nome) return telaLogin();

  const app = document.getElementById("app");
  app.innerHTML = `<h2>📚 Livros do Clube</h2><p>Olá, ${nome} 💕</p>`;

  livros.forEach((livro) => {
    const div = document.createElement("div");
    div.className = "livro";

    div.innerHTML = `
      <img src="${livro.imagem}" alt="${livro.titulo}" class="capa-livro">
      <h3>${livro.titulo}</h3>
      <p>${livro.autora}</p>
      <button onclick="verDetalhes(${livro.id})">Ver detalhes</button>
    `;

    app.appendChild(div);
  });
}

// ===== DETALHES DO LIVRO =====
function verDetalhes(id) {
  const livro = livros.find(l => l.id === id);
  const app = document.getElementById("app");

  app.innerHTML = `
    <h2>${livro.titulo}</h2>
    <p><strong>${livro.autora}</strong></p>
    <p>${livro.descricao}</p>
    <button onclick="mostrarLivros()">Voltar</button>
  `;
}

function telaInicial() {
  document.getElementById('home').style.display = 'block';
  document.getElementById('clube').style.display = 'none';
  document.getElementById('contato').style.display = 'none';
}

function verClube() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('clube').style.display = 'block';
  document.getElementById('contato').style.display = 'none';
}

function contato() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('clube').style.display = 'none';
  document.getElementById('contato').style.display = 'block';
}

// ===== INICIALIZAÇÃO =====
if (localStorage.getItem("usuario")) {
  mostrarLivros();
} else {
  telaInicial();
}


