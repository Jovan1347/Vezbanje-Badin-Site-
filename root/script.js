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

let pictures = document.querySelectorAll(".gallery-image");
let arrGallery = Array.from(pictures);
let invisDiv = document.querySelector(".gallery-invis");
let galleryButton = document.querySelectorAll(".image-button");
let arrButton = Array.from(galleryButton);
let galleryButtonRight = document.querySelector(".right");
let galleryButtonLeft = document.querySelector(".left");
let imageInvis = document.querySelector(".image-invis");
let imageIndex;
arrGallery.forEach((item, index) => {
  item.addEventListener("click", () => {
    imageIndex = index;
    invisDiv.style.display = "flex";
    imageInvis.setAttribute("src", item.getAttribute("src"));
    arrButton.forEach((button) => {
      button.style.display = "unset";
    });
    if (imageIndex > 4) {
      galleryButtonRight.style.display = "none";
    }
    if (imageIndex < 1) {
      galleryButtonLeft.style.display = "none";
    }
  });
});
galleryButtonRight.addEventListener("click", (e) => {
  e.stopPropagation();
  imageInvis.setAttribute(
    "src",
    arrGallery[imageIndex + 1].getAttribute("src")
  );

  imageIndex++;
  if (imageIndex > 4) {
    galleryButtonRight.style.display = "none";
  }
  if (imageIndex >= 1) {
    galleryButtonLeft.style.display = "unset";
  }
});

galleryButtonLeft.addEventListener("click", (e) => {
  e.stopPropagation();
  imageInvis.setAttribute(
    "src",
    arrGallery[imageIndex - 1].getAttribute("src")
  );

  imageIndex--;
  if (imageIndex < 1) {
    galleryButtonLeft.style.display = "none";
  }
  if (imageIndex <= 4) {
    galleryButtonRight.style.display = "unset";
  }
});

invisDiv.addEventListener("click", () => {
  invisDiv.style.display = "none";
});
