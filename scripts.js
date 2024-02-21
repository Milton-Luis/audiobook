const playPauseBtn = document.getElementById("play-pause");
const forwardBtn = document.getElementById("avancar");
const backBtn = document.getElementById("voltar");
const audio = document.getElementById("audio-capitulo");
const nameChapter = document.getElementById("capitulo");

let playing = false;
let chapter = 1;
const totalChapter = 10;

function playTrack() {
	audio.play();
	playPauseBtn.classList.remove("bi-play-circle");
	playPauseBtn.classList.add("bi-pause-circle");
	playing = true;
}
function pauseTrack() {
	audio.pause();
	playPauseBtn.classList.add("bi-play-circle");
	playPauseBtn.classList.remove("bi-pause-circle");
	playing = false;
}

function forwardChapter() {
	chapter < totalChapter ? (chapter += 1) : (chapter = 1);
	audio.src = "books/dom-casmurro/" + chapter + ".mp3";
	nameChapter.innerText = "Cápitulo " + chapter;
	playTrack();
}

function backChapter() {
	chapter === 1 ? (chapter = totalChapter) : (chapter -= 1);
	audio.src = "books/dom-casmurro/" + chapter + ".mp3";
	nameChapter.innerText = "Cápitulo " + chapter;
	playTrack();
}

// EVENTS
playPauseBtn.addEventListener("click", () => {
	return playing ? pauseTrack() : playTrack();
});
forwardBtn.addEventListener("click", forwardChapter);
backBtn.addEventListener("click", backChapter);
audio.addEventListener("ended", forwardChapter);
