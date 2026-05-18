$(document).ready(function(){
    $("#header1").load("header.html");
    $("#footer1").load("footer.html");
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
