// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Horn Image Logic
  let horn = document.getElementById('horn-select');
  horn.addEventListener('change', (event) => {
    const hornType = event.target.value;
    const imageType = document.querySelector('img');
    const audioType = document.querySelector('audio');

    if (hornType == 'air-horn'){
      imageType.src = "assets/images/air-horn.svg";
      audioType.src = "assets/audio/air-horn.mp3";
    } else if (hornType == 'car-horn'){
      imageType.src = "assets/images/car-horn.svg";
      audioType.src = "assets/audio/car-horn.mp3";
    } else if (hornType == 'party-horn'){
      imageType.src = "assets/images/party-horn.svg";
      audioType.src = "assets/audio/party-horn.mp3";
    }
  });

  // Volume Slider Logic
  const volumeSlider = document.querySelector('input');
  volumeSlider.addEventListener('change', (event) => {
    // Make the volume level an integer
    const noiseLevel = parseInt(event.target.value);
    // First image w/ alt attribute
    const speakerImage = document.querySelector('img[alt="Volume level 2"]');
    const sound = document.querySelector('audio');
    sound.volume = noiseLevel / 100;
    //alert(sound.volume);

    if (noiseLevel == 0) {
      speakerImage.src = "assets/icons/volume-level-0.svg";
    } else if (noiseLevel >= 1 && noiseLevel < 33) {
      speakerImage.src = "assets/icons/volume-level-1.svg";
    } else if (noiseLevel >= 33 && noiseLevel < 67) {
      speakerImage.src = "assets/icons/volume-level-2.svg";
    } else if (noiseLevel >= 67) {
      speakerImage.src = "assets/icons/volume-level-3.svg";
    }
    sound.volume = noiseLevel / 100;
  });

  // Sound & Confetti Logic
  const jsConfetti = new JSConfetti();
  const playButton = document.querySelector('button');
  playButton.addEventListener('click', (event) => {
    const sound = document.querySelector('audio');
    if (horn.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
    sound.play();
  });
}