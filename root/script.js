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

let menu = document.querySelectorAll(".menu-button");
let menuButton = document.querySelector(".main-item");
let menuText = document.querySelectorAll(".main-text");
let menuSection = document.querySelector(".menu");
let menuContainer = document.querySelector(".menu-container");
let menuIcons = document.querySelector(".menu-icons");

menuButton.addEventListener("mouseover", () => {
  menuSection.classList.add("menuShow");
  menuSection.style.display = "unset";
});

menuButton.addEventListener("mouseout", () => {
  menuSection.classList.remove("menuShow");
  menuSection.style.display = "none";
});

menuButton.addEventListener("click", () => {
  menuSection.classList.add("menuClick");
  menuSection.style.display = "unset";
});

menuButton.addEventListener("click", () => {
  menuContainer.classList.add("containerOpacity");
});

menuButton.addEventListener("click", () => {
  menuIcons.style.display = "unset";
});

function beTouching(entries) {
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
  });
  arr.splice(7, 0, ...sliced);
}, 3000);

/* --------- T E S T I M O N I A L --------- */

let clientsContainer = document.getElementById("comment-clients");
let client = Array.from(clientsContainer.children);
let buttonLeft = document.getElementById("button-left");
let buttonRight = document.getElementById("button-right");

let x = 0;
document
  .getElementById("comments-button")
  .addEventListener("click", function (evt) {
    let target = evt.target;

    if (target.id === "button-right") {
      let slicedClient = client.splice(0, 1);
      clientsContainer.style.transform = `translateX(-${x}px)`;
      x += 100;

      console.log(x);

      slicedClient.forEach((item) => {
        item.classList.add("showClient");
      });
    } else if (target.id === "button-left") {
      let slicedClient = client.splice(0, 1);

      slicedClient.forEach((item) => {
        let x = 0;
        item.style.scale = "1";
        clientsContainer.style.transform = `translateX(${x}px)`;
        x += 100;
      });
    }
  });

console.log(clientsContainer.scrollWidth);
