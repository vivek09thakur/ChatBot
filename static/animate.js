window.addEventListener('DOMContentLoaded', () => {
  const aiResponses = document.querySelectorAll('.ai');

  if (aiResponses.length > 0) {
    const latestResponse = aiResponses[aiResponses.length - 1];
    const messageText = latestResponse.textContent.trim();
    const typingSpeed = 500; // Adjust typing speed (in milliseconds) here

    let charIndex = 0;
    latestResponse.textContent = '';

    const typeMessage = () => {
      if (charIndex < messageText.length) {
        latestResponse.textContent += messageText.charAt(charIndex);
        charIndex++;
        setTimeout(typeMessage, typingSpeed);
      }
    };

    setTimeout(typeMessage, 1000); // Delay initial typing effect by 1 second
  }
});
