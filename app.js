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
}

// Update Sub-total and Total price 
function calculatePrice(){
    const iphonePriceText = document.getElementById('iphoneProductPrice').innerText;
    const iphonePrice = parseInt(iphonePriceText);

    const casePriceText = document.getElementById('caseProductPrice').innerText;
    const casePrice = parseInt(casePriceText);

    const subTotalId = document.getElementById('sub-total');
    const subTotal = iphonePrice + casePrice;
    subTotalId.innerText = subTotal;

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
