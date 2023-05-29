
const createSelect = (item) => {
    const categoryFilter = document.getElementById("category-filter")

    const select = document.createElement('select');
    select.classList.add("form-control");
    select.value = "all"

    const all = document.createElement('option');
    all.textContent = "all"
    select.appendChild(all);

    item.forEach(category => {
        const option = document.createElement('option');
        option.textContent = category
        select.appendChild(option);
    });

    select.addEventListener('change', () => onSelectChange(select.value))
    categoryFilter.appendChild(select)
}

const onSelectChange = (value) => {
    const leftcards = document.getElementById("left-cards");
    const rightcards = document.getElementById("right-cards");

    const allCards = Array.from(leftcards.childNodes).concat(Array.from(rightcards.childNodes))

    allCards.forEach(card => {
        if(value === "all"){
            card.style.display = "flex"
        }else if (card.getAttribute('category') === value) {
            card.style.display = "flex"
        } else {
            card.style.display = "none"
        }
    })

}

fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(json => { 
        createSelect(json) 
    })