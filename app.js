function updateProductNumber(product, productPrice, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    const productNumberText = productInput.value;
    if(isIncreasing){
        productInput.value = parseInt(productNumberText) + 1;
    }else if(productNumberText > 0){
        productInput.value = parseInt(productNumberText) - 1;
    }
    // Update Product Price 
    const priceId = document.getElementById(product + 'ProductPrice');
    priceId.innerText = productInput.value * productPrice;

    // Calculate Total 
    calculatePrice();
    calculateTotal();
}

// Update Sub-total 
function calculatePrice(){
    const iphonePriceText = document.getElementById('iphoneProductPrice').innerText;
    const iphonePrice = parseInt(iphonePriceText);

    const casePriceText = document.getElementById('caseProductPrice').innerText;
    const casePrice = parseInt(casePriceText);

    const subTotalId = document.getElementById('sub-total');
    const subTotal = iphonePrice + casePrice;
    subTotalId.innerText = subTotal;

}

// Calculate tax and Update total 
function calculateTotal(){
    const subTotalText = document.getElementById('sub-total').innerText;
    const subTotal = parseInt(subTotalText);
    const taxId = document.getElementById('tax-total');
    const taxTotal = subTotal * 10 / 100;
    taxId.innerText = taxTotal;
    // update total 
    document.getElementById('price-total').innerText = subTotal + taxTotal;
}

// Get And Update Phone Price 
document.getElementById('iphone-plus').addEventListener('click', function(){
    updateProductNumber('iphone', 1219, true);
})
document.getElementById('iphone-minus').addEventListener('click', function(){
    updateProductNumber('iphone', 1219, false);
})

// Get And Update Case Price 
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
})
