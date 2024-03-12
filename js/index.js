/*javascript function for carousel scrolling*/
/*identifying elements of product image group row and right & left buttons*/
const productGroupContainer = [...document.querySelectorAll('.product-image-group')];
const rollright = [...document.querySelectorAll('.rightbtn.col-lg-1')];
const rollleft = [...document.querySelectorAll('.leftbtn.col-lg-1')];

/*calculation of carousel scrolling from image width and screen size*/
productGroupContainer.forEach((item, i) => {
    let scrollwidth = item.getBoundingClientRect();
    let imagewidth = scrollwidth.width;
    var mq1 = window.matchMedia("(max-width: 574px)");

    if (mq1.matches) {
        rollright[i].addEventListener('click', () => {
            let imagewidth = (scrollwidth.width) * 0.3;
            item.scrollLeft += imagewidth;
        })

        rollleft[i].addEventListener('click', () => {
            let imagewidth = (scrollwidth.width) * 0.3;
            item.scrollLeft -= imagewidth;
        })
    } else {
        rollright[i].addEventListener('click', () => {
            let imagewidth = (scrollwidth.width) * 0.3;
            item.scrollLeft += imagewidth;
        })

        rollleft[i].addEventListener('click', () => {
            let imagewidth = (scrollwidth.width) * 0.3;
            item.scrollLeft -= imagewidth;
        })
    }

})