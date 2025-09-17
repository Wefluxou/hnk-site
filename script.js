// PRODUTOS
const products = [
  {
    name: "Rosa Unitária",
    img: "assets/imagens/11.jpg",
    description: "Escolha a cor da rosa unitária e personalize do seu jeito!"
  },
  {
    name: "Buquê de Cetim",
    img: "assets/imagens/1.png",
    description: "Escolha cores, tamanho e quantidade. Totalmente personalizável!"
  },
  {
    name: "Chaveiro de Cetim",
    img: "assets/imagens/9.png",
    description: "Escolha cores, modelos e detalhes. Totalmente personalizável!"
  },
  {
    name: "Canetas Personalizadas",
    img: "assets/imagens/canetas.jpg",
    description: "Crie do jeito que quiser: cores, textos e detalhes exclusivos."
  }
];

const productGrid = document.getElementById('product-grid');

function loadProducts(){
  productGrid.innerHTML='';
  products.forEach(prod => {
    const card = document.createElement('div');
    card.className='product-card';
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.name}" onerror="this.src='assets/imagens/placeholder.png'">
      <h3>${prod.name}</h3>
      <p>${prod.description}</p>
    `;
    card.addEventListener('click', ()=>{
      const url=`https://wa.me/553191716244?text=Olá!%20Gostaria%20de%20encomendar%20o produto: ${encodeURIComponent(prod.name)}.%20Posso personalizar cores, texto e quantidade.`;
      window.open(url,'_blank');
    });
    productGrid.appendChild(card);
  });
}

loadProducts();
