const gamesDatabase = [
    { title: "Cyberpunk 2077", url: "index2.html" },
    { title: "Hollow Knight", url: "index3.html" },
    { title: "Apex Legends", url: "index4.html" },
    { title: "Forza Horizon 5", url: "index5.html" }
];
function searchGames() {
    const searchInput = document.getElementById("storeSearch").value;
    const cleanQuery = searchInput.toLowerCase();
    const dropdown = document.getElementById("searchResults");
    if (cleanQuery === "") {
        dropdown.style.display = "none";
        return;
    }
    dropdown.innerHTML = "";
    const filteredGames = gamesDatabase.filter(game => 
        game.title.toLowerCase().includes(cleanQuery)
    );
    if (filteredGames.length > 0) {
        dropdown.style.display = "block";
        filteredGames.forEach(game => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "search-item";
            itemDiv.innerText = game.title;
            itemDiv.onclick = () => {
                window.location.href = game.url;
            };
            dropdown.appendChild(itemDiv);
        });
    } else {
        dropdown.style.display = "none";
    }
}
document.addEventListener("click", function(e) {
    const dropdown = document.getElementById("searchResults");
    const searchBar = document.getElementById("storeSearch");
    if (e.target !== searchBar && e.target !== dropdown) {
        dropdown.style.display = "none";
    }
});
