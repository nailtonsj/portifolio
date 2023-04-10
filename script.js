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

const ativarUl = document.querySelectorAll(".js .formacao-extra h3");
if (ativarUl) {
  ativarUl.forEach((item, index) => {
    item.addEventListener("click", function (e) {
      item.classList.toggle("ativo");
      item.nextElementSibling.classList.toggle("ativo");
    });
  });
}
const target = document.querySelectorAll(".js [data-anime]");
const animationClass = "animate";
// function animeScroll() {
//   target.forEach(function (element) {
//     if (windowMetade > element.offsetTop) {
//       element.classList.add(animationClass);
//     }
//     element.offsetTop;
//   });
// }

// window.addEventListener("scroll", function () {
//   animeScroll();
// });
const windowMetade = window.innerHeight * 0.6;
addEventListener("scroll", function () {
  {
    target.forEach((item, index) => {
      const altura = item.getBoundingClientRect().top;
      if (altura - windowMetade <= 0) {
        item.classList.add("animate");
      } else {
        item.classList.remove("animate");
      }
    });
  }
});
