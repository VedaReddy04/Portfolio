const words = ["Student at VMEG!", "Web Developer!", "Tech Enthusiast!", "Software Engineer!"]; // Words to animate
let currentWordIndex = 0;
let currentText = "";
let currentLetterIndex = 0;

const animatedWordElement = document.getElementById("animated-word");

function animateWord() {
    if (currentLetterIndex < words[currentWordIndex].length) {
        currentText += words[currentWordIndex].slice(currentLetterIndex, currentLetterIndex + 2);
        animatedWordElement.textContent = currentText;
        currentLetterIndex += 2;

        setTimeout(animateWord, 300);
    } else {
        setTimeout(() => {
            currentWordIndex = (currentWordIndex + 1) % words.length; 
            currentText = "";
            currentLetterIndex = 0;
            animateWord();
        }, 1500); 
    }
}

// Start the animation
animateWord();

function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}


window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

function sendMail(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:chittireddyveda@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=Email: ${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(
      message
    )}`;

    window.location.href = mailtoLink;
  }

  