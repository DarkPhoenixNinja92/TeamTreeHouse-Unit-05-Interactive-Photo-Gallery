function search_img() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let valX = document.getElementsByClassName("item");

    for (let i = 0; i < valX.length; i++) {
        if (!valX[i].innerHTML.toLowerCase().includes(input)) {
            valX[i].style.display = "none";
        } else {
            valX[i].style.display = "";
        }
    }
}