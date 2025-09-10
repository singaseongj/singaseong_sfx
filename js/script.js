const audioPlayer = document.getElementById('audioPlayer');
audioPlayer.loop = true;

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

const loopToggleBtn = document.getElementById('loopToggleBtn');
loopToggleBtn.textContent = 'Repeat: On';
loopToggleBtn.addEventListener('click', () => {
  audioPlayer.loop = !audioPlayer.loop;
  loopToggleBtn.textContent = audioPlayer.loop ? 'Repeat: On' : 'Repeat: Off';
});
