const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const button = document.querySelector(".advice__button");

async function getAdvice() {  
  button.disabled = true;
  
  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice?timestamp=${Date.now()}`
    );
    const data = await response.json();
    adviceText.style.opacity = "0";

    setTimeout(() => {
      adviceId.textContent = data.slip.id;
      adviceText.textContent = data.slip.advice;
      adviceText.style.opacity = "1";

      button.disabled = false;
    }, 300);

  } catch {
    adviceText.textContent = "Failed to load advice.";
    adviceText.style.opacity = "1";
  }
}

button.addEventListener("click", getAdvice);

getAdvice();