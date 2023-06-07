function simulateTyping(element) {
    const text = element.innerText;
    element.innerText = "";
  
    const words = text.split(" ");
    let wordIndex = 0;
    let charIndex = 0;
  
    const typingInterval = setInterval(() => {
      if (wordIndex < words.length) {
        const word = words[wordIndex];
        if (charIndex < word.length) {
          element.innerText += word[charIndex];
          charIndex++;
        } else {
          element.innerText += " ";
          wordIndex++;
          charIndex = 0;
        }
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
  }
  