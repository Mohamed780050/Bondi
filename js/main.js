/////////////////////// Navbar ///////////////////////
let nav_links = document.querySelectorAll("nav .navbar-nav li a");
nav_links.forEach((link) => {
  link.onclick = function () {
    nav_links.forEach((link) => {
      link.classList.remove("active");
      this.classList.add("active");
    });
  };
});
///////////////////////////////////////////////////////
/////////////////////// our-work //////////////////////
let our_works_links = document.querySelectorAll(".our-work ul li");
let our_works_images = document.querySelectorAll(".our-work .row .box");
// let image_holder = document.querySelectorAll(".our-work .row > div");
// console.log(image_holder);
our_works_links.forEach((link) => {
  link.onclick = function () {
    our_works_links.forEach((link) => {
      link.classList.remove("active", "rounded-pill");
      this.classList.add("active", "rounded-pill");
    });
    our_works_images.forEach((img) => {
      img.style.opacity = "0";
      setTimeout(() => {
        img.parentElement.style.display = "none";
      }, 500);
      if (img.classList.contains(this.dataset.catch)) {
        img.style.opacity = "1";
        setTimeout(() => {
          img.parentElement.style.display = "block";
        }, 501);
      }
    });
  };
});

///////////////////////////////////////////////////////
