//bag page's input stepper 
const itemQuantity = document.getElementById("quantity");
function inputstep(btn){
    //value calculation variable
    let id = btn.getAttribute("id");
    let min = itemQuantity.getAttribute("min");
    let max = itemQuantity.getAttribute("max");
    let step = itemQuantity.getAttribute("step");
    let value = itemQuantity.getAttribute("value");
    let calcStep = (id == "plus") ? (step*1) : (step * -1);
    let newValue = parseInt(value) + calcStep;

    //setting newValue to value
    if(newValue >= min && newValue <= max){
        itemQuantity.setAttribute("value", newValue);
    }


    //for auto calc of subtotal price
    let subPriceCalc = newValue*42;
    let price = newValue*42;
    document.querySelector('.subtotalprice').innerHTML = "<p class='subtotalprice'>$"+subPriceCalc+"</p>"
    document.querySelector('.price').innerHTML = "<p class='price'>$"+price+"</p>"
    //disable checkout button when quantity is 0
    if (value==0 || subTotalCalc==0) {
        document.getElementById('checkoutbtn').style.cssText = 'pointer-events:none';
        document.querySelector('.subtotalprice').innerHTML = "<p class='subtotalprice'>$0</p>";
    } else {
        document.getElementById('checkoutbtn').classList.toggle('disabled');
    }
}

//product image thumbnails display upon hover and click
let thumbs = document.getElementsByClassName('thumbs');
let activethumb = document.getElementsByClassName('active');
for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener('mouseover', function () {
        
        document.getElementById('imghighlight').src = this.src;
    })
}