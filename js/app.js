baguetteBox.run('.grid');

function search_img() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let images = document.getElementsByClassName("item");

    for (let i = 0; i < images.length; i++) {
        if (!images[i].innerHTML.toLowerCase().includes(input)) {
            images[i].style.display = "none";
        } else {
            images[i].style.display = "";
        }
    }
}