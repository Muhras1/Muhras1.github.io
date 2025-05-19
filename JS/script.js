
const bedButton = document.querySelector('.bed-button');
bedButton.addEventListener('click', () => {
  document.body.classList.toggle('night-mode');
});


const radioButton = document.querySelector('.radio-button');
const audio = document.getElementById('radio-audio');
let isPlaying = false;

radioButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
});

// Detect orientation and display message if in portrait mode
const landscapeMessage = document.createElement('div');
landscapeMessage.style.position = 'fixed';
landscapeMessage.style.top = '0';
landscapeMessage.style.left = '0';
landscapeMessage.style.width = '100%';
landscapeMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
landscapeMessage.style.color = 'white';
landscapeMessage.style.textAlign = 'center';
landscapeMessage.style.padding = '20px';
landscapeMessage.innerText = 'Please rotate your device to landscape mode for the best experience.';
landscapeMessage.style.display = 'none';
document.body.appendChild(landscapeMessage);

function checkOrientation() {
  if (window.innerWidth < window.innerHeight) {
    landscapeMessage.style.display = 'block';
  } else {
    landscapeMessage.style.display = 'none';
  }
}


window.addEventListener('resize', checkOrientation);


checkOrientation();
