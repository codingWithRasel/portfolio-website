const body = document.querySelector("#body"),
  header = document.querySelector("#header"),
  nav = document.querySelector("#nav"),
  overlay = document.querySelector("#overlay");
window.addEventListener("click", (o) => {
  nav.classList.contains("translate-x-full") ||
    "nav" === o.target.id ||
    "menu" === o.target.id ||
    toggle();
});
const toggle = () => {
    nav.classList.toggle("translate-x-full"),
      overlay.classList.toggle("invisible"),
      body.classList.toggle("overflow-hidden");
  },
  mql = window.matchMedia("(min-width: 768px)"),
  screenTest = (o) => {
    o.matches && closeClick();
  };
mql.addEventListener("change", screenTest);
const animationSection = document.querySelector("#animation"),
  counterDivS = document.querySelectorAll("[data-target]"),
  speed = 200,
  animationObserver = (observer = new IntersectionObserver(
    (o) => {
      o.forEach((o) => {
        o.isIntersecting &&
          counterDivS.forEach((o) => {
            let e = () => {
              let t = parseInt(o.dataset.target),
                r = parseInt(o.innerHTML),
                l = Math.floor(t / 200);
              t > r &&
                ((o.innerHTML = ` ${r + l}+`),
                setTimeout(() => {
                  e();
                }, 10));
            };
            e();
          });
      });
    },
    { root: null, threshold: 0.5 }
  ));
observer.observe(animationSection);
const portofolio = document.querySelector("#portfolio"),
  portfolioBtns = portofolio.querySelectorAll(".portfolioBtn"),
  portfolioDivs = portofolio.querySelectorAll(".portfolio-0");
portfolioBtns.forEach((o, e) => {
  o.addEventListener("click", () => {
    portfolioBtns.forEach((o) => o.classList.remove("portfolioBtn-active")),
      o.classList.add("portfolioBtn-active"),
      portfolioDivs.forEach((o) => o.classList.add("hidden"));
    let t = portofolio.querySelectorAll(`.portfolio-${e}`);
    t.forEach((o) => o.classList.remove("hidden"));
  });
});
const toTop = document.querySelector("#toTop");
window.addEventListener("scroll", () => {
  scrollY > 600
    ? toTop.classList.remove("hidden")
    : toTop.classList.add("hidden");
}),
  toTop.addEventListener("click", () => {
    header.scrollIntoView({ behavior: "smooth" });
  });
