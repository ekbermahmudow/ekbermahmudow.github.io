// Loading screen-i gizlət
window.addEventListener("load", function() {
    var loader = document.getElementById("loaderScreen");
    if (loader) {
        setTimeout(function() {
            loader.classList.add("hidden");
        }, 800);
    }
}); 
