const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const button = document.querySelector(".advice__button");

async function getAdvice() {
  adviceId.textContent = "...";
  adviceText.textContent = "Loading advice...";
  adviceText.style.opacity = "0";

  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice?timestamp=${Date.now()}`
    );
    const data = await response.json();

    setTimeout(() => {
      adviceId.textContent = data.slip.id;
      adviceText.textContent = data.slip.advice;
      adviceText.style.opacity = "1";
    }, 300);

  } catch (error) {
    adviceText.textContent = "Failed to load advice.";
  }
}

button.addEventListener("click", getAdvice);

getAdvice();