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
let invisButton = document.querySelector(".main-invis");
let menuText = document.querySelectorAll(".main-text");
let menuSection = document.querySelector(".menu");
let menuContainer = document.querySelector(".menu-container");
let menuIcons = document.querySelector(".menu-icons");
let menuNavItems = document.querySelectorAll(".navItem");
let menuNav = document.querySelector(".menu-navigation");
let menuItems = document.querySelectorAll(".menu-navigation-item");
let menuItemsBack = document.querySelectorAll(".menu-navigation-item-back");

menuButton.addEventListener("mouseover", () => {
  menuSection.classList.add("menuShow");
  menuSection.style.display = "unset";
});

menuButton.addEventListener("mouseout", () => {
  menuSection.classList.remove("menuShow");
});

menuButton.addEventListener("click", () => {
  menuSection.classList.add("menuClick");
  menuSection.style.display = "unset";
  menuContainer.classList.add("containerOpacity");
  menuIcons.style.display = "unset";
  menuButton.style.display = "none";
  invisButton.style.display = "flex";
  document.documentElement.style.overflow = "unset";
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    menuNav.style.display = "unset";
  }, 800);
  menuNavItems.forEach((item, index) => {
    item.style.animation = `navShow 0.${index + 1}s ease`;
    setTimeout(() => {
      item.style.animation = "";
    }, 3000);
  });
});

let menuNavItemsBack = document.querySelectorAll(".menu-navigation-item-back");
let currentIndex = 0;
for (let i = 0; i < menuNavItems.length; i++) {
  menuNavItems[i].addEventListener("click", (e) => {
    e.preventDefault();
    menuNavItems[currentIndex].classList.remove("active-item");
    menuNavItemsBack[currentIndex].classList.remove("active-item-back");
    menuNavItems[i].classList.add("active-item");
    menuNavItemsBack[i].classList.add("active-item-back");
    currentIndex = i;
  });
}

invisButton.addEventListener("click", () => {
  menuSection.classList.remove("menuClick");
  menuSection.style.display = "none";
  menuContainer.classList.remove("containerOpacity");
  menuIcons.style.display = "none";
  invisButton.style.display = "none";
  menuButton.style.display = "flex";
  menuNav.style.display = "none";
  document.documentElement.style.cssText = "overflow-x: hidden";
  document.body.style.cssText = "overflow-x: hidden";
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
    console.log(x);
  });

/* --------- G A L L E R Y --------- */

let observer = new IntersectionObserver(scrollUp);
observer.observe(document.querySelector(".gallery"));

let photos = document.querySelectorAll(".movingImg");
function scrollUp(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      photos.forEach((photo) => {
        photo.style.animation = "mymove 0.5s ease";
      });
      return;
    }
    photos.forEach((photo) => {
      photo.style.animation = "";
    });
  });
}

let pictures = document.querySelectorAll(".image-wrap");
console.log(pictures);
