//creating list of products to be displayed and filtered
const productGroup = [
    {
        name: 'White Long Sleeves Shirt',
        category: 'tops',
        image: 'images/thumbnail_product_top_01-01.jpg',
        imageHover: 'images/thumbnail_product_top_01-02.jpg',
        gender: 'boys',
        size: ['s', 'm', 'xl'],
        colour: 'white',
        price: 19
    },

    {
        name: 'Pink Long Sleeves Shirt',
        category: 'tops',
        image: 'images/thumbnail_product_top_02-01.jpg',
        imageHover: 'images/thumbnail_product_top_02-02.jpg',
        gender: 'girls',
        size: ['xs', 'm', 'xl'],
        colour: 'pink',
        price: 19
    },

    {
        name: 'Green Long Sleeves Shirt',
        category: 'tops',
        image: 'images/thumbnail_product_top_03-01.jpg',
        imageHover: 'images/thumbnail_product_top_03-02.jpg',
        gender: 'boys',
        size: ['m', 'xl'],
        colour: 'green',
        price: 19
    },
    {
        name: 'Gray Long Sleeves Shirt',
        category: 'tops',
        image: 'images/thumbnail_product_top_04-01.jpg',
        imageHover: 'images/thumbnail_product_top_04-02.jpg',
        gender: 'boys',
        size: ['xs', 's'],
        colour: 'green',
        price: 23
    },

    {
        name: 'Black Short Sleeves Shirt',
        category: 'tops',
        image: 'images/thumbnail_product_top_05-01.jpg',
        imageHover: 'images/thumbnail_product_top_05-02.jpg',
        gender: 'boys',
        size: ['xs', 's'],
        colour: 'black',
        price: 25
    },

    {
        name: 'Striped Long Sleeves Shirt',
        category: 'tops',
        image: 'images/thumbnail_product_top_06-01.jpg',
        imageHover: 'images/thumbnail_product_top_06-02.jpg',
        gender: 'boys',
        size: ['xs', 's'],
        colour: 'black',
        price: 30
    },

    {
        name: 'Off-White Long Pants',
        category: 'bottoms',
        image: 'images/thumbnail_product_bottom_01-01.jpg',
        imageHover: 'images/thumbnail_product_bottom_01-02.jpg',
        gender: 'girls',
        size: ['s', 'm'],
        colour: 'white',
        price: 30
    },

    {
        name: 'Light Gray Chino Shorts',
        category: 'bottoms',
        image: 'images/thumbnail_product_bottom_02-01.jpg',
        imageHover: 'images/thumbnail_product_bottom_02-02.jpg',
        gender: 'boys',
        size: ['m', 'l'],
        colour: 'gray',
        price: 29
    },

    {
        name: 'Black Chino Shorts',
        category: 'bottoms',
        image: 'images/thumbnail_product_bottom_03-01.jpg',
        imageHover: 'images/thumbnail_product_bottom_03-02.jpg',
        gender: 'boys',
        size: ['m', 'l'],
        colour: 'black',
        price: 29
    },

    {
        name: 'Charcoal Black Pleats Skirt',
        category: 'bottoms',
        image: 'images/thumbnail_product_bottom_04-01.jpg',
        imageHover: 'images/thumbnail_product_bottom_04-02.jpg',
        gender: 'girls',
        size: ['xs', 's'],
        colour: 'black',
        price: 32
    },

    {
        name: 'Pink Sequined Tulle Skirt',
        category: 'bottoms',
        image: 'images/thumbnail_product_bottom_05-01.jpg',
        imageHover: 'images/thumbnail_product_bottom_05-02.jpg',
        gender: 'girls',
        size: ['xs', 's'],
        colour: 'pink',
        price: 35
    },
    {
        name: 'Off-White Pleated Skirt',
        category: 'bottoms',
        image: 'images/thumbnail_product_bottom_06-01.jpg',
        imageHover: 'images/thumbnail_product_bottom_06-02.jpg',
        gender: 'girls',
        size: ['m', 'l'],
        colour: 'white',
        price: 34
    },
    {
        name: 'Brown Grid-Pattern Dress',
        category: 'dresses',
        image: 'images/thumbnail_product_dress_01-01.jpg',
        imageHover: 'images/thumbnail_product_dress_01-02.jpg',
        gender: 'girls',
        size: ['m', 'l'],
        colour: 'brown',
        price: 39
    },

    {
        name: 'Red Cotton Rich Dress',
        category: 'dresses',
        image: 'images/thumbnail_product_dress_02-01.jpg',
        imageHover: 'images/thumbnail_product_dress_02-02.jpg',
        gender: 'girls',
        size: ['s', 'm'],
        colour: 'red',
        price: 40
    },
    {
        name: 'Orange Cotton Rich Dress',
        category: 'dresses',
        image: 'images/thumbnail_product_dress_03-01.jpg',
        imageHover: 'images/thumbnail_product_dress_03-02.jpg',
        gender: 'girls',
        size: ['s', 'm'],
        colour: 'orange',
        price: 40
    },
    {
        name: 'Olive Green Striped Dress',
        category: 'dresses',
        image: 'images/thumbnail_product_dress_04-01.jpg',
        imageHover: 'images/thumbnail_product_dress_04-02.jpg',
        gender: 'girls',
        size: ['l', 'xl'],
        colour: 'green',
        price: 42
    },
    {
        name: 'Blue Cotton Rich Dress',
        category: 'dresses',
        image: 'images/thumbnail_product_dress_05-01.jpg',
        imageHover: 'images/thumbnail_product_dress_05-02.jpg',
        gender: 'girls',
        size: ['m', 'l'],
        colour: 'blue',
        price: 45
    },
    {
        name: 'Light Yellow Pinafore Dress',
        category: 'dresses',
        image: 'images/thumbnail_product_dress_06-01.jpg',
        imageHover: 'images/thumbnail_product_dress_06-02.jpg',
        gender: 'girls',
        size: ['m', 'l'],
        colour: 'yellow',
        price: 42
    }
]

//identifying variables for sidebar filter buttons and arrow img
let openFilter = document.querySelectorAll('.btn.btn-link');
let openArrow = document.querySelectorAll('.sidebar-arrow');

//toggling arrow turn when button is clicked
document.querySelectorAll('.btn.btn-link').forEach(function (i) {
    i.addEventListener('click', function (e) {
        const indexOfClickedBtn = [...openFilter].indexOf(e.target);
        let openArrow = document.querySelectorAll('.sidebar-arrow');
        openArrow[indexOfClickedBtn].classList.toggle("turn");
    })
});

//toggling arrow turn when arrow img is clicked
document.querySelectorAll('.sidebar-arrow').forEach(function (i) {
    i.addEventListener('click', function (e) {
        const indexOfClickedBtn = [...openArrow].indexOf(e.target);
        openArrow[indexOfClickedBtn].classList.toggle("turn");
    })
});


//function list for product list filtering
//function for clearing current filter results
function clear() {
    let productGroupDIV = document.querySelector('#product-group-container');
    productGroupDIV.innerHTML = "";
}

//function for getting name property from array list
function getName() {
    let productName = productGroup.name;
    return productName;
}

//function for getting price property from array list
function getPrice() {
    let productPrice = productGroup.price;
    return productPrice;
}

//function for getting category property from array list
function getCategory() {
    let productCategory = productGroup.category;
    return productCategory;
}

//function for getting gender property from array list
function getGender() {
    let productGender = productGroup.gender;
    return productGender;
}

//function for getting size property from array list
function getSize() {
    let productSize = productGroup.size;
    return productSize;
}

//function for getting colour property from array list
function getColour() {
    let productColour = productGroup.colour;
    return productColour;
}

//function for getting image property from array list
function getImage() {
    let productImage = productGroup.image;
    return productImage;
}

//function for getting image hover property from array list
function getImageHover() {
    let productImageHover = productGroup.imageHover;
    return productImageHover;
}

//check through array if the value of radio is same with array item's property
function compareValueData(x) {
    let datainfo = x.getAttribute('value');
    newHTMLlines = [];
    //go through the product group array
    for (var i = 0; i < productGroup.length; i++) {
        let colourOfProduct = productGroup[i].colour;
        let genderOfProduct = productGroup[i].gender;
        let sizeOfProduct = productGroup[i].size;
        let categoryOfProduct = productGroup[i].category;
        //html code for one product
        oneProductLine = `<div class='col-md-3 col-sm-6 mb-4'><div class='card border-0'><div class='thumbnail'><a href='productpage.html'>
                <div class='picture1'>
                    <img src='${productGroup[i].image}' class='card-img-top'
                        alt='${productGroup[i].name}'>
                </div>
                <div class='picture2'>
                    <img src='${productGroup[i].imageHover}' class='card-img-top'
                        alt='${productGroup[i].name}'>
                </div>
            </a>
        </div>
        <div class='row card-body mt-2 p-0'>
            <div class='container-fluid col-8'>
                <h5 class='card-title thumb-product-name'>${productGroup[i].name}</h5>
                <p class='card-text thumb-product-price'>$${productGroup[i].price}</p>
            </div>
            <div class='container-fluid col-2 bookmark-toggler align-items-right ml-auto mr-3'>
                <img class='fa-solid fa-bookmark' src='images/icons_bookmark_black-01.svg'>
                <img class='fa-regular fa-bookmark' src='images/icons_bookmark_empty-01.svg'>
            </div>
            <div class='container-fluid col-6 w-100 mx-auto'>
                <a href='productpage.html' class='btn shop-now px-3 py-1'>shop now</a>
            </div>
        </div>
    </div>
</div>`
        //checking of value of radio is same with array item's property
        if (datainfo == colourOfProduct) {
            newHTMLlines.push(oneProductLine);
        } else if (datainfo == genderOfProduct) {
            newHTMLlines.push(oneProductLine);
        } else if (sizeOfProduct.includes(datainfo)) {
            newHTMLlines.push(oneProductLine);
        } else if (datainfo == categoryOfProduct) {
            newHTMLlines.push(oneProductLine);
        }
    }
    //clear current html code
    clear();
    //replace new html
    let productGroupDIV = document.querySelector('#product-group-container');
    productGroupDIV.innerHTML = `${newHTMLlines.join(' ')}`;

//to restart function for bookmark everytime the product list is filtered
//toggling javascript function for bookmark
//identifying all element of same class by class query selector
let bookmarkContainer = document.querySelectorAll('.col-2.bookmark-toggler');
let solidBookmark = document.querySelectorAll('.fa-solid.fa-bookmark');
let regularBookmark = document.querySelectorAll('.fa-regular.fa-bookmark');

//function upon clicking of regular bookmark
//it goes through the array of elements of same class and 
//use the index to use the array item of same index to start function
document.querySelectorAll('.fa-regular.fa-bookmark').forEach(function (i) {
    i.addEventListener('click', function (e) {
        const indexOfClickedBtn = [...regularBookmark].indexOf(e.target);
        solidBookmark[indexOfClickedBtn-1].classList.toggle("show");
        regularBookmark[indexOfClickedBtn].classList.toggle("hide");
    })
});

//function upon clicking of solid bookmark
//going through the array of elements of same class and 
//use the index to use array item of same index to start function
document.querySelectorAll('.fa-solid.fa-bookmark').forEach(function (i) {
    i.addEventListener('click', function (e) {
        const indexOfClickedBtn = [...solidBookmark].indexOf(e.target);
        solidBookmark[indexOfClickedBtn].classList.remove("show");
        regularBookmark[indexOfClickedBtn+1].classList.remove("hide");
    })
});



};



