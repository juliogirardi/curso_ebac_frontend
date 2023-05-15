const form = document.getElementById("form-validacao");
const message = document.getElementById("message");

const msgPositiva = "Formulário Válido!!!";
const msgNegativa = "Formulário Inválido.";

function validaForm(a, b) {
  return b > a ? true : false;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  message.className = "";

  const campoA = Number(document.getElementById("campo-a").value);
  const campoB = Number(document.getElementById("campo-b").value);

  const result = validaForm(campoA, campoB);

  if (result) {
    message.innerHTML = msgPositiva;
    message.style.display = "block";
    message.classList.add("success");
  } else {
    message.innerHTML = msgNegativa;
    message.style.display = "block";
    message.classList.add("error");
  }
});
