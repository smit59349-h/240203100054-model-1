$(document).ready(function(){
    $("#header1").load("header.html");
    $("#footer1").load("footer.html");
});



const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
    window.close();
});
