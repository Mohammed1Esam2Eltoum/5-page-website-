const gamesDatabase = [
    { title: "Cyberpunk 2077", url: "index2.html" },
    { title: "Hollow Knight", url: "index3.html" },
    { title: "Apex Legends", url: "index4.html" },
    { title: "Forza Horizon 5", url: "index5.html" }
];

function searchGames() {
    const input = document.getElementById("storeSearch").value.toLowerCase();
    const resultBox = document.getElementById("searchResults");
    resultBox.innerHTML = "";
    if (!input) {
        resultBox.style.display = "none";
        return;
    }
    const filtered = gamesDatabase.filter(g => g.title.toLowerCase().includes(input));
    if (filtered.length > 0) {
        filtered.forEach(game => {
            const div = document.createElement("div");
            div.className = "search-item";
            div.innerText = game.title;
            div.onclick = () => window.location.href = game.url;
            resultBox.appendChild(div);
        });
        resultBox.style.display = "block";
    } else {
        resultBox.style.display = "none";
    }
}
