let count = 0;

document.querySelector("img").addEventListener("click", function() {

    count++

    document.querySelector("h1").innerText = count
});