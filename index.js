document.addEventListener("DOMContentLoaded", function () {
    var title = document.getElementById("title").innerHTML;

    document.getElementsByName("titleGoHere").forEach(element => {
        element.innerHTML = `
            <u>${title}</u>
        `;
    });
    
    const col = document.getElementsByClassName("column")[0];

    const butt = document.createElement("a")
    butt.href = "/index.html"
    butt.innerHTML = `
        <button class="conclustion-button">Conclusion</button>
    `
})