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
setInterval(typeWriter, 1000);
const elemento = document.querySelector(".maquina");
typeWriter(elemento);
