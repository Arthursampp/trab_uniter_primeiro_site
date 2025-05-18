const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");

botao.onclick = () => {
  if (mensagem.style.display === "none") {
    mensagem.style.display = "block";
  } else {
    mensagem.style.display = "none";
  }
};
