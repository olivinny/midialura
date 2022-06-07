function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);
  if (elemento === null) {
    console.log("elemento não encontrado ou seletor invalido");
  } else if (elemento.localName === "audio") {
    elemento.play();
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let i = 0;
function varrerTeclas() {
  const tecla = listaDeTeclas[i];
  const classe = tecla.classList[1];
  const idAudio = "#som_" + classe;
  tecla.onclick = function () {
    tocaSom(idAudio);
  };
  tecla.onkeydown = function (evento) {
    if (evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function (evento) {
    if (evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.remove("ativa");
    }
  };
  i++;
  console.log(tecla);
}
listaDeTeclas.forEach(varrerTeclas);
