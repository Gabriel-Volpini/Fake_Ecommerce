const route = {
    home: 'index.html',
    detalhes: 'detalhes.html'
}

const makeCard = ({ id, title, price, image, rating, category }) => {
    const div = document.createElement('div');
    div.classList.add("card");
    div.setAttribute('category', category);
    

    const img = document.createElement('img');
    img.src = image;
    div.appendChild(img);

    const a = document.createElement('a')
    a.textContent = title.slice(0, 13).concat('...')
    a.href = 'detalhes.html?id=' + id
    div.appendChild(a);

    const b = document.createElement('b')
    b.textContent = new Intl.NumberFormat('br', { style: 'currency', currency: 'BRL' }).format(price)
    div.appendChild(b);

    const span = document.createElement('span')
    span.textContent = `${rating.rate}/5 (${rating.count} avaliações)`
    div.appendChild(span)


    return div;
}

const makeSmallCard = ({ id, title, price, image, rating, category }) => {
    const div = document.createElement('div');
    div.classList.add("small-card");
    div.setAttribute('category', category);

    const img = document.createElement('img');
    img.src = image;
    div.appendChild(img);

    const sideDiv = document.createElement('div');
    div.appendChild(sideDiv);

    const a = document.createElement('a')
    a.textContent = title.slice(0, 20).concat('...')
    a.href = 'detalhes.html?id=' + id
    sideDiv.appendChild(a);

    const span = document.createElement('span')
    span.textContent = `${rating.rate}/5 (${rating.count} avaliações)`
    sideDiv.appendChild(span)

    const b = document.createElement('b')
    b.textContent = new Intl.NumberFormat('br', { style: 'currency', currency: 'BRL' }).format(price)
    sideDiv.appendChild(b);


    return div;
}

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        const refLeftCard = document.getElementById('left-cards');
        const refRightCard = document.getElementById('right-cards');

        json.forEach(item => {
            refLeftCard.appendChild(makeCard(item))
            refRightCard.appendChild(makeSmallCard(item))
        });
    })