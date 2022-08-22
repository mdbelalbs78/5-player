const cartArray = [];

function display(cartProduct) {
    console.log(cartProduct)
    const tableBody = document.getElementById('carts-products');
    tableBody.innerHTML = '';
    for (let i = 0; i < cartProduct.length; i++) {
        // console.log(cartArray[i].playerName);

        const name = cartArray[i].playerName;
        const tr = document.createElement("tr");

        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${name}</td>
        `;

        tableBody.appendChild(tr);

    }
}

function addPlayer(element) {
    // console.log(element.parentNode.parentNode.children);
    // console.log(element.parentNode.parentNode.children[0].innerText);

    const playerName = element.parentNode.parentNode.children[0].innerText;
    // console.log(productName);

    const playerObj = {
        playerName: playerName,
    }

    cartArray.push(playerObj)
    // console.log(cartArray);

    document.getElementById('total-added-product').innerText = cartArray.length;
    display(cartArray);
}