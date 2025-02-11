function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Generating poem about...",
    autoStart: true,
    delay: 50,
  });
}

let form = document.querySelector("#form");
form.addEventListener("submit", generatePoem);
