

const handleCloseSearchData = () => {
    const searchDataDiv = document.getElementById("search-data-response")
    searchDataDiv.style.display = 'none';
    Array.from(searchDataDiv.childNodes).forEach(element => {
        searchDataDiv.removeChild(element)
    })

    document.removeEventListener('click', handleCloseSearchData);
}

const doSearch = () => {

    const inputValue = document.getElementById("search-input").value;
    const searchDataDiv = document.getElementById("search-data-response")

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            const a = json.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()))

            searchDataDiv.style.display = 'flex';
            a.forEach(item => {
                searchDataDiv.appendChild(makeSmallCard(item))
            });
        })

    setTimeout(() => document.addEventListener('click', handleCloseSearchData), 1000)

}


document.getElementById("search-button").addEventListener('click', doSearch);


