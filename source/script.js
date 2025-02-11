function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#form-text");
  let apiKey = "f8eo81d182023fdd4fb805t37b75950a";
  let prompt = `User topic: Generate an ode about ${userInput.value}`;
  let context =
    "You are an expert writer and you write odes about anything, full of passion and romance. Your mission is to generate a 4 line ode. Use the user topic as instruction. Separate each line by <br/> but don't add one after the last line, please.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poem = document.querySelector("#poem");
  poem.classList.remove("hidden");
  poem.innerHTML = `<div class="blink">Generating an ode about ${userInput.value}...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let form = document.querySelector("#form");
form.addEventListener("submit", generatePoem);
