function typeWriter(elemento) {
  const textArray = elemento.innerText.split("");
  elemento.innerText = "";
  console.log(textArray);
  textArray.forEach((element, i) => {
    setTimeout(function () {
      elemento.innerText += element;
    }, 100 * i);
  });
}
const elemento = document.querySelector(".maquina");
setInterval(() => {
  typeWriter(elemento);
}, 10000);

const ativarUl = document.querySelectorAll(".formacao-extra h3");
if (ativarUl) {
  ativarUl.forEach((item, index) => {
    item.addEventListener("click", function (e) {
      item.classList.toggle("ativo");
      item.nextElementSibling.classList.toggle("ativo");
    });
  });
}
