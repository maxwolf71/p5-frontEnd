const content = document.getElementById('content')

// display all teddies with name & price + button -> to product sheet
function displayTeddiesList(teddies) {
  for (teddy of teddies) {

    const listDiv = document.createElement('div')
    listDiv.setAttribute('id', 'listDiv')

    const teddyName = document.createElement('h2')
    teddyName.setAttribute('id', 'name')

    const teddyPrice = document.createElement('h3')
    teddyPrice.setAttribute('id', 'price')

    const teddyBtn = document.createElement('button')
    teddyBtn.setAttribute('onclick', `window.location.href="product.html?_id=${teddy._id}"`)

    teddyName.textContent = `${teddy.name}`
    teddyPrice.textContent = `${teddy.price / 100} €`
    teddyBtn.innerHTML += `Voir le produit`

    content.append(listDiv, teddyBtn)
    listDiv.append(teddyName, teddyPrice)
  }
}
// retrieve info from api to display above
async function retrieveTeddies() {
  await fetch('http://localhost:3000/api/teddies')
    .then((response) => response.json())
    .then((teddies) => displayTeddiesList(teddies))
}
retrieveTeddies()
