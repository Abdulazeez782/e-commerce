let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // let i;
    let slides = document.getElementsByClassName("slides");
    let cursor = document.getElementsByClassName("image-cursor");

    if(n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";    
    }

    for (i = 0; i < cursor.length; i++) {
        cursor[i].className = cursor[i].className.replace(" active", "");
      }

    slides[slideIndex-1].style.display = "block";
    cursor[slideIndex-1].className += " active";
}


let openMenu = document.getElementById("icon-menu");
let closeMenu = document.getElementById("close-menu");
let nav = document.getElementById("nav-bar");
let overlay = document.getElementById("overlay");

openMenu.addEventListener("click", () => {
    nav.classList.add("active");
    overlay.classList.add("show");
})

closeMenu.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("show");
})

let indicator = document.getElementById("indicator");

let counterMinus = document.getElementById("icon-minus")
let counterPlus = document.getElementById("icon-plus")
let counterDisplay = document.getElementById("counter-display")

let counter = 0;
counterPlus.addEventListener("click", () => {
    counter++
    counterDisplay.innerHTML = counter;
})

counterMinus.addEventListener("click", () => {
    if(counter > 0) {
        counter--
    }
    counterDisplay.innerHTML = counter;
})

let cart = document.getElementById("icon-cart");
let cartDisplay = document.getElementById("cart");

cart.addEventListener("click", () => {
    cartDisplay.classList.toggle("active");
});




let addCart = document.getElementById("add-btn");
let cartDetails = document.getElementById("cart-details");
let empty = document.getElementById("empty");

indicator.style.display = "none";
addCart.addEventListener ("click", () => {
    if(counter > 0) {
        let total = 125.00 * counter;

        empty.classList.add("hide");
        cartDetails.innerHTML = `
        <div class="carted-product" id="carted-product">                        
            <div>
                <img src="images/image-product-1-thumbnail.jpg" class="carted-image" alt="product-image"> 
            </div>

            <div class="flex-cart">
                <div>                            
                    <p>Autumn Limited Edition...</p>
                    <p><span>$125.00</span> × <span>${counter}</span> <span class="total">$${total}</span></p>
                </div>
                <img src="images/icon-delete.svg" alt="delete-cart" onclick="deleteItem()">
            </div>
        </div>

        <button class="checkout" id="checkout">Checkout</button>`

        indicator.style.display = "block";
        indicator.innerHTML = counter;

    }
})


function deleteItem() {
    empty.classList.remove("hide");
    cartDetails.innerHTML = "";
    indicator.style.display = "none";
}


let slideeIndex = 1;
showwSlides(slideeIndex);

function plussSlides(n) {
    showwSlides(slideeIndex += n);
}

function currenttSlide(n) {
    showwSlides(slideeIndex = n);
}

function showwSlides(n) {
    // let i;
    let lightbox = document.getElementsByClassName("lightbox");
    let ccursor = document.getElementsByClassName("image-ccursor");

    if(n > lightbox.length) {
        slideeIndex = 1;
    }
    if(n < 1) {
        slideeIndex = lightbox.length
    }

    for (i = 0; i < lightbox.length; i++) {
        lightbox[i].style.display = "none";    
    }

    for (i = 0; i < ccursor.length; i++) {
        ccursor[i].className = ccursor[i].className.replace(" active", "");
      }

    lightbox[slideeIndex-1].style.display = "block";
    ccursor[slideeIndex-1].className += " active";
}



function openModal() {
    if(window.innerWidth >= 1000){
        let lightboxContainer = document.getElementById("lightbox-container");
        let overlay = document.getElementById("overlay")

        lightboxContainer.classList.add("active");
        overlay.classList.add("show");
    }
}


function closeModal() {
    let lightboxContainer = document.getElementById("lightbox-container");
    let overlay = document.getElementById("overlay")

    lightboxContainer.classList.remove("active");
    overlay.classList.remove("show");
}