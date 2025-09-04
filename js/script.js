const audioPlayer = document.getElementById('audioPlayer');

document.querySelectorAll('.sound-button').forEach(button => {
  button.addEventListener('click', () => {
    const soundSrc = button.getAttribute('data-sound');
    if (audioPlayer.getAttribute('src') !== soundSrc) {
      audioPlayer.setAttribute('src', soundSrc);
    }
    audioPlayer.play();
  });
});

document.getElementById('playBtn').addEventListener('click', () => {
  audioPlayer.play();
});

document.getElementById('pauseBtn').addEventListener('click', () => {
  audioPlayer.pause();
});

document.getElementById('stopBtn').addEventListener('click', () => {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
});
