// Adding a song to the list
const songlist = document.getElementById("songList");

// Get a value from the input field
function addSong() {
    const input = document.getElementById("songInput");
    const song = input.ariaValueMax.trim();
    if (song === "") return;

    const li = document.createElement("li");
    li.textContent = song;
    songlist.appendChild(li);

    input.value = "";

}
