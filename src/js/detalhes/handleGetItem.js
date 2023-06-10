const createItemCard = ({category, description, image, price, rating, title}) => {
    const cardDetalhes = document.getElementById("cardDetalhes");

    const img = document.createElement('img');
    img.src = image;
    cardDetalhes.appendChild(img);

    const divInformation = document.createElement('div');
    divInformation.classList.add('information');
    cardDetalhes.appendChild(divInformation);

    const titulo = document.createElement('b');
    titulo.classList.add('title');
    titulo.textContent = title;
    divInformation.appendChild(titulo);

    const categoria = document.createElement('span');
    categoria.classList.add('category');
    categoria.textContent = category;
    divInformation.appendChild(categoria);

    const avaliacao = document.createElement('span');
    avaliacao.classList.add('rating');
    avaliacao.textContent = `${rating.rate}/5 (${rating.count} avaliações)`;
    divInformation.appendChild(avaliacao);

    const descricao = document.createElement('span');
    descricao.classList.add('description');
    descricao.textContent = description;
    divInformation.appendChild(descricao);
  
    const preco = document.createElement('b');
    preco.classList.add('price');
    preco.textContent = new Intl.NumberFormat('br', { style: 'currency', currency: 'BRL' }).format(price);
    divInformation.appendChild(preco);

    const divMakeOrder = document.createElement('div');
    divMakeOrder.classList.add('make-order');
    cardDetalhes.appendChild(divMakeOrder);

    const linkCancelar = document.createElement('a');
    linkCancelar.classList.add('cancelar');
    linkCancelar.textContent = "Cancelar";
    linkCancelar.href = "index.html";
    divMakeOrder.appendChild(linkCancelar);

    const linkComprar = document.createElement('a');
    linkComprar.classList.add('comprar');
    linkComprar.textContent = "Comprar";
    linkComprar.href = "index.html";
    divMakeOrder.appendChild(linkComprar);
}

const productId = new URLSearchParams(window.location.search).get('id');
fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(createItemCard)
