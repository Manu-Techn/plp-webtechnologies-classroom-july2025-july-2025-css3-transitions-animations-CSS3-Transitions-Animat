const songlist = document.getElementById("songList");

function addSong() {
    const input = document.getElementById("songInput");
    const song = input.ariaValueMax.trim();
    if (song === "") return;

    const li = document.createElement("li");
    li.textContent = song;
    songlist.appendChild(li);

    input.value = "";
}