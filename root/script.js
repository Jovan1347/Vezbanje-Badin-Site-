document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: null,
    rootMargin: "-250px 0px",
    threshold: 1,
  };

  let observer = new IntersectionObserver(beTouching, options);
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
    //console.log("watching", section.textContent);
  });
});

function beTouching(entries) {
  // entries all sections
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("intersecting");
    }
  });
}
