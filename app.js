const tl = gsap.timeline();

function hideElement() {
  element.style.display = "none";
}

gsap.registerPlugin(ScrollTrigger);

tl.to(".animated_eclipse", {
  duration: 3,
  display: "block",
  opacity: 1,
  top: -200,
  scale: 5,
  stagger: 2.4,
  delay: 1,
})
  .to(".animated_introtext", { display: "none" })
  .to(".animated_eclipse", { display: "none", opacity: 0, duration: 0.5 });
gsap.to(".animated_eclipse", { display: "block", opacity: 1 });
gsap.to(".animated_introtext", {
  duration: 3,
  display: "block",
  delay: 0.5,
  y: 340,
  stagger: 2.4,
});
