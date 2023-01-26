/* --------- M E N U  B U T T O N --------- */

document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: null,
    rootMargin: "40% 0%",
    threshold: 1,
  };

  let options2 = {
    root: null,
    rootMargin: "-10% 0% 0% 0%",
    threshold: 1,
  };

  let observer2 = new IntersectionObserver(beTouching, options2);
  observer2.observe(document.querySelector(".experience"));

  let observer = new IntersectionObserver(beTouching, options);
  observer.observe(document.querySelector(".hero"));
});

let menu = document.querySelectorAll(".menu");
let menuText = document.querySelectorAll(".main-text");

function beTouching(entries) {
  // entries all sections
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      menu.forEach((item) => {
        item.classList.remove("changeColor");
      });
      menuText.forEach((item) => {
        item.classList.remove("changeColorText");
      });
    } else {
      menu.forEach((item) => {
        item.classList.add("changeColor");
      });
      menuText.forEach((item) => {
        item.classList.add("changeColorText");
      });
    }
  });
}

/* --------- B A C K  T O  T O P --------- */

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "flex";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#ffffff ${scrollValue}%, #525252 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

/* --------- T R U S T E D  B Y --------- */

let container = document.getElementById("showTrusted");

let cards = document.querySelectorAll(".trusted-img");

let arr = Array.from(cards);

setInterval(() => {
  let sliced = arr.splice(0, 5);

  arr.forEach((item) => {
    item.style.display = "none";
  });

  container.innerHTML = " ";

  sliced.forEach((card, index) => {
    container.append(card);
    card.style.display = "inline-block";
    card.style.animation = `showTrusted${index + 1} 2s`;
    console.log(card);
  });
  arr.splice(7, 0, ...sliced);
}, 3000);
