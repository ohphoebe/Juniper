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

//remove item from bag once click close icon
let remove = document.querySelector('#removeitem');
let emptybag = document.querySelector('.emptycontainer');
let boxbg = document.querySelector('.itemgroup');
remove.onclick = () => {
    // emptybag.classList.toggle('show');
    document.querySelector('.subtotalprice').innerHTML = "<p class='subtotalprice'>$0</p>"
    boxbg.innerHTML = "<div class='row productimgrow p-4 emptycontainer'><h3 class='display-4 m-5 p-4'>your bag has no items :(</h3></div>"
    document.getElementById('checkoutbtn').style.cssText = 'pointer-events:none';
}
