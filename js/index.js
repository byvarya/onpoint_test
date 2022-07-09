document.querySelector(".button").onclick = () => {
  slider.style.transform = `translateX(-100vw)`;
  slide = -1;
};

document.querySelector(".brend__btn").onclick = () => {
  document.querySelector(".brend__name").innerHTML = "преимущества";
  document.querySelector(".brend__bg").style.opacity = "0.7";
  document.querySelector(".brend__popup").style.opacity = "1";
  document.querySelector(".brend__popup").style.zIndex = "3";
};

document.querySelector(".brend__close").onclick = () => {
  document.querySelector(".brend__name").innerHTML = "Ключевое сообщение";
  document.querySelector(".brend__bg").style.opacity = "0";
  document.querySelector(".brend__popup").style.opacity = "0";
  document.querySelector(".brend__popup").style.zIndex = "1";
};

const items = document.querySelectorAll(".brend__point");
for (let i = 3; i < 6; i++) {
  items[i].style.position = "absolute";
  items[i].style.opacity = "0";
}

const buttonPrev = document.querySelector(".brend__arrow_left");
const buttonNext = document.querySelector(".brend__arrow_right");

buttonPrev.onclick = () => {
  buttonNext.classList.remove("active");
  buttonPrev.classList.add("active");
  let i = 0;
  while (i < 6) {
    if (i < 3) {
      items[i].style.position = "static";
      items[i].style.opacity = "1";
      items[i].style.transition = "opacity 0.4s";
    } else {
      items[i].style.position = "absolute";
      items[i].style.opacity = "0";
      items[i].style.transition = "none";
    }
    i++;
  }
};

buttonNext.onclick = () => {
  buttonPrev.classList.remove("active");
  buttonNext.classList.add("active");
  let i = 0;
  while (i < 6) {
    if (i > 2) {
      items[i].style.position = "static";
      items[i].style.opacity = "1";
      items[i].style.transition = "opacity 0.4s";
    } else {
      items[i].style.position = "absolute";
      items[i].style.opacity = "0";
      items[i].style.transition = "none";
    }
    i++;
  }
};
