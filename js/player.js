const cartArray = [];

function display(cartProduct) {
    console.log(cartProduct);

    const tableBody = document.getElementById('cart-products');
    if (cartProduct.length >= 6) {
        alert('you are not eqal')
        return;
    }
    tableBody.innerHTML = '';
    for (let i = 0; i < cartProduct.length; i++) {
        // console.log(cartArray[i].productName,);
        const name = cartArray[i].productName;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;

        tableBody.appendChild(tr);
    }
}

function addToCart(element) {
    // console.log(element.parentNode.parentNode.children[0].innerText)

    const productName = element.parentNode.parentNode.children[0].innerText;
    // console.log(productName);

    const productObj = {
        productName: productName,
    }
    cartArray.push(productObj)
    console.log(cartArray.length);

    display(cartArray);
}



// Bugest Calculate part 


document.getElementById('calculate-btn').addEventListener('click', function () {

    const calculateField = document.getElementById('player-field');
    const calculateAmountString = calculateField.value;
    const calculateTotal = parseFloat(calculateAmountString);


   const calculateButton = document.getElementById('calculate-btn');
   const calculateButtonString = calculateButton.innerText;
   calculateButton.innerText =calculateTotal;

   console.log(calculateTotal);
})