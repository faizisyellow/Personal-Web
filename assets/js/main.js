/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".home__scroll", { delay: 200 });
sr.reveal(".home__img", { origin: "right", delay: 400 });

/*SCROLL ABOUT*/
sr.reveal(".about__img", { origin: "left", delay: 400 });
sr.reveal(".about__subtitle", { delay: 300 });
sr.reveal(".about__profession", { delay: 400 });
sr.reveal(".about__text", { delay: 500 });
sr.reveal(".about__social-icon", { delay: 300, interval: 200 });

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__name", { distance: "20px", delay: 50, interval: 100 });
sr.reveal(".skills__img", { delay: 400 });

/*SCROLL PORTFOLIO*/
sr.reveal(".portfolio__img", { interval: 200 });

/*SCROLL CERTIFICATE*/
sr.reveal(".sertfikat__img", { interval: 200 });

/*SCROLL TESTIMONIALS*/
sr.reveal(".the-testimonials", { interval: 200 });

/*SCROLL BUTTON CV*/
sr.reveal(".curiculumVite", { interval: 200 });

const clicks = document.querySelectorAll(".sertfikat__container .sertfikat__img .sertfikat__link .sertfikat__link-name");
clicks[0].addEventListener("click", () => {
  const body = document.body;
  body.style.overflowX = "hidden";
  const parent = document.querySelector(".sertfikat__container");
  parent.style.position = "relative";
  const thumb = document.getElementById("thumbnail");
  const img = document.createElement("img");
  img.src = "assets/img/sertifikatRakryan1.jpg";
  img.style.objectFit = "fill";
  img.style.width = "100vw";
  img.style.height = "70vh";
  img.style.position = "absolute";
  img.style.top = "0";
  img.style.left = "0";
  img.style.display = "flex";
  img.style.justifyContent = "center";

  thumb.appendChild(img);

  const close = document.getElementById("close");
  close.style.display = "block";
  close.style.zIndex = "1";

  close.addEventListener("click", () => {
    thumb.remove();

    setTimeout(() => {
      location.reload();
    }, 100);
  });
});
clicks[1].addEventListener("click", () => {
  const body = document.body;
  body.style.overflowX = "hidden";
  const parent = document.querySelector(".sertfikat__container");
  parent.style.position = "relative";
  const thumb = document.getElementById("thumbnail");
  const img = document.createElement("img");
  img.src = "assets/img/SertifikatRakryan 2.jpg";
  img.style.objectFit = "fill";
  img.style.width = "100vw";
  img.style.height = "70vh";
  img.style.position = "absolute";
  img.style.top = "0";
  img.style.left = "0";
  img.style.display = "flex";
  img.style.justifyContent = "center";

  thumb.appendChild(img);

  const close = document.getElementById("close");
  close.style.display = "block";
  close.style.zIndex = "1";

  close.addEventListener("click", () => {
    thumb.remove();
    setTimeout(() => {
      location.reload();
    }, 100);
  });
});
clicks[2].addEventListener("click", () => {
  const body = document.body;
  body.style.overflowX = "hidden";
  const parent = document.querySelector(".sertfikat__container");
  parent.style.position = "relative";
  const thumb = document.getElementById("thumbnail");
  const img = document.createElement("img");
  img.src = "assets/img/Sertifikat-Muhamat faissal maulana_page.jpg";
  img.style.objectFit = "fill";
  img.style.width = "100vw";
  img.style.height = "70vh";
  img.style.position = "absolute";
  img.style.top = "0";
  img.style.left = "0";
  img.style.display = "flex";
  img.style.justifyContent = "center";

  thumb.appendChild(img);

  const close = document.getElementById("close");
  close.style.display = "block";
  close.style.zIndex = "1";

  close.addEventListener("click", () => {
    thumb.remove();

    setTimeout(() => {
      location.reload();
    }, 100);
  });
});

// ===DOWNLOAD CV==== //
document.getElementById("cv").addEventListener("click", () => {
  const downloadAnchor = document.createElement("a");

  const fileURL = "assets/cv/CV.pdf";

  downloadAnchor.href = fileURL;
  downloadAnchor.download = "cv-2023";

  downloadAnchor.click();
});
