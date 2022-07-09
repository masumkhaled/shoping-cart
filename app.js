document.getElementById('iphone-plus').addEventListener('click', function(){
    const iphoneInput = document.getElementById('iphone-number');
    const iphoneNumberText = iphoneInput.value;
    iphoneInput.value = parseInt(iphoneNumberText) + 1;
})
document.getElementById('iphone-minus').addEventListener('click', function(){
    const iphoneInput = document.getElementById('iphone-number');
    const iphoneNumberText = iphoneInput.value;
    if(iphoneInput.value > 0){
        iphoneInput.value = parseInt(iphoneNumberText) - 1;
    }
    
})