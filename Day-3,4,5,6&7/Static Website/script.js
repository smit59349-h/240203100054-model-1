$(document).ready(function(){
    $("#header1").load("header.html");
    $("#footer1").load("footer.html");
});

        let scrollTopBtn = document.getElementById("scrollTopBtn");

        window.onscroll = function () {
            if (document.documentElement.scrollTop > 50) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        };

        scrollTopBtn.onclick = function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
$(document).ready(function(){
    $("#header2").load("header_pro.html");
});


function add_item() {
    let quantitySpan = document.getElementById("pro1").innerText;
    let quantity = parseInt(quantitySpan);
    quantity++;
    document.getElementById("pro1").innerText = quantity;
    document.getElementById("total-am1").innerText = "$" + (quantity * 59) + ".0";

}

function min_item() {
    let quantitySpan = document.getElementById("pro1").innerText;
    let quantity = parseInt(quantitySpan);
    if (quantity > 1) {
        quantity--;
        document.getElementById("pro1").innerText = quantity;
        document.getElementById("total-am1").innerText = "$" + (quantity * 59) + ".0";
        document.getElementById("totalMan2").innerText = "$" + (quantity * 59) + ".0";
    }
}

function remove_item() {
    document.getElementById("row1").remove();
    document.getElementById('totalMan2').innerText = "$0.00";
}

$(document).ready(function() {
    const myModalEl = document.getElementById('homeModal');
    if (myModalEl) {
        const homeModal = new bootstrap.Modal(myModalEl);
        homeModal.show();
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const moreProducts = `
        <div class="product-card">
            <img src="images/girl1.jpg" alt="jacket">
            <h3>Classic Brown Jacket</h3>
            <p>$ 69.0</p>
            <div class="stars">
                <button class="btn-add">
                    <a href="prodDetail.html">Add To Cart</a>
                </button>
            </div>
        </div>

        <div class="product-card">
            <img src="images/girl2.jpg" alt="dress">
            <h3>White Shirt & Denim</h3>
            <p>$ 79.0</p>
            <div class="stars">
                <button class="btn-add">
                    <a href="prodDetail.html">Add To Cart</a>
                </button>
            </div>
        </div>

        <div class="product-card">
            <img src="images/girl3.jpg" alt="heels">
            <h3>Pleated Maxi Silk Pants with Pockets</h3>
            <p>$ 89.0</p>
            <div class="stars">
                <button class="btn-add">
                    <a href="prodDetail.html">Add To Cart</a>
                </button>
            </div>
        </div>

        <div class="product-card">
            <img src="images/girl4.jpg" alt="shirt">
            <h3>Summer Chic in Soft Neutrals</h3>
            <p>$ 35.0</p>
            <div class="stars">
                <button class="btn-add">
                    <a href="prodDetail.html">Add To Cart</a>
                </button>
            </div>
        </div>

        <div class="product-card">
            <img src="images/girl5.jpg" alt="fashion">
            <h3>Blue Jeans & White Top Outfit</h3>
            <p>$ 120.0</p>
            <div class="stars">
                <button class="btn-add">
                    <a href="prodDetail.html">Add To Cart</a>
                </button>
            </div>
        </div>

        <div class="product-card">
            <img src="images/girl6.jpg" alt="shopping bag">
            <h3>Blue & White Shirt Outfit</h3>
            <p>$ 45.0</p>
            <div class="stars">
                <button class="btn-add">
                    <a href="prodDetail.html">Add To Cart</a>
                </button>
            </div>
        </div> `;

    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const productsGrid = document.querySelector(".products-grid");

    loadMoreBtn.addEventListener("click", function () {
        productsGrid.insertAdjacentHTML("beforeend", moreProducts);
        loadMoreBtn.style.display = "none";
    });

}); 


function updatePrice(value) {
    document.getElementById("priceText").innerText = "Price: $0 - $" + value;
}

function filterProducts() {
  
    let maxPrice = document.getElementById("priceRange").value;

    let products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {
        let priceText = product.querySelector("p").innerText;

        let price = parseFloat(priceText.replace(/[^0-9.]/g, ""));

        if (price <= maxPrice) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

window.onload = function() {
    let slider = document.getElementById("priceRange");
    updatePrice(slider.value);
};




