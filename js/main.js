$(document).ready(function () {
  // Mascara para CPF através do plugin 'jQuery Mask Plugin'
  $("#cpf").mask("000.000.000-00");

  // Mascara para Telefone
  $("#telefone").mask("(00) 00000-0000");

  // Mascara para CEP
  $("#cep").mask("00.000-000");
});

$("#btn-enviar").click(function () {
  alert("Formulário Enviado com Sucesso");
});
