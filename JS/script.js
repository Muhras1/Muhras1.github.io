
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

// Create the landscape message
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
landscapeMessage.style.zIndex = '9999';  
document.body.appendChild(landscapeMessage);

// Function to check the device orientation
function checkOrientation() {
  if (window.innerWidth < window.innerHeight) {
    landscapeMessage.style.display = 'block';
  } else {
    landscapeMessage.style.display = 'none';
  }
}

// Run orientation check on resize
window.addEventListener('resize', checkOrientation);

// Run the initial check
checkOrientation();

