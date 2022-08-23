const cartArray = [];

function display(playerProduct) {



    const tableBody = document.getElementById('cart-products');
    if (playerProduct.length >= 6) {
        alert('you are not eqal')
        return;

    }


    tableBody.innerHTML = '';
    for (let i = 0; i < playerProduct.length; i++) {
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

    element.disabled = true;
    element.style.backgroundcolor = 'gray';
}



// Bugest Calculate part 


document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayer = document.getElementById('cart-products');
    const playerList = perPlayer.children.length;

    const calculateField = document.getElementById('player-field');
    const calculateAmountString = calculateField.value;
    const calculateTotal = parseFloat(calculateAmountString);

    const totalExpenses = playerList * calculateTotal;

    const playerSpan = document.getElementById('player-span');
    playerSpan.innerText = totalExpenses;


});

document.getElementById('calculate-all').addEventListener('click', function () {


    const playerSpan = document.getElementById('player-span')
    const playerSpanString = playerSpan.innerText;
    const playerSpanFolat = parseFloat(playerSpanString)


    const managerFieldNumber = document.getElementById('manager-Id');
    const managerFieldString = managerFieldNumber.value;
    const manageNumberTotal = parseFloat(managerFieldString)


    const coachIdNumber = document.getElementById('coach-Id');
    const coachIdNumberString = coachIdNumber.value;
    const coachIdNumberTotal = parseFloat(coachIdNumberString);



    const totalCalculation = playerSpanFolat + manageNumberTotal + coachIdNumberTotal;

    const calculateTotalElement = document.getElementById('calcualte-total');
    calculateTotalElement.innerText = totalCalculation;


})