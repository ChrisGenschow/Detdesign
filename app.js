const tl = gsap.timeline();
const tl_repeat = gsap.timeline({ repeat: -1, repeatDelay: 1 });

function hideElement() {
  element.style.display = "none";
}

gsap.registerPlugin(
  ScrollTrigger,
  MotionPathPlugin,
  DrawSVGPlugin,
  MotionPathHelper,
  MorphSVGPlugin
);

tl.to(".animated_eclipse", {
  duration: 3,
  display: "block",
  opacity: 1,
  top: -200,
  scale: 5,
  stagger: 2.4,
  delay: 1,
})
  .to(".animated_introtext", { display: "none", opacity: 0 })
  .to(".white", { display: "none" })
  .to(".herotext", { opacity: 1 })
  .to("header", { display: "block", opacity: 1 })
  .to(".animated_eclipse", { display: "none", opacity: 0, duration: 0.5 });
//.to(".bounceball_background", { display: "block" });

gsap.to(".animated_eclipse", { display: "block", opacity: 1 });

gsap.to(".animated_introtext", {
  duration: 3,
  display: "block",
  delay: 0.5,
  y: 340,
  stagger: 2.4,
});

/* 
gsap.to(".bounceball_animated", {
  duration: 15,
  delay: 16,
  motionPath: { path: ".animatedballpath" },
  align: ".animatedballpath",
  alignOrigin: [0.5, 0.5],
});
*/

gsap.to(".cloud_upper", {
  y: -100,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".cloud_upper",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play reverse play reverse",
    markers: true,
  },
});
gsap.to(".cloud_left", {
  y: -300,
  x: -100,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".cloud_upper",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play reverse play reverse",
    markers: true,
  },
});
gsap.to(".cloud_right", {
  y: -300,
  x: 100,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".cloud_upper",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play reverse play reverse",
    markers: true,
  },
});
gsap.to(".cloud_lower", {
  y: -100,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".cloud_upper",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play reverse play reverse",
    markers: true,
  },
});
gsap.to(".parallax_text", {
  y: -400,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".cloud_upper",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play reverse play reverse",
    markers: true,
  },
});

MorphSVGPlugin.convertToPath("circle, rect, eclipse, line, polygon, polyline");

tl_repeat
  .to("#righteye", {
    morphSVG: "#righteye1",
    duration: 1,
  })
  .to("#lefteye", {
    morphSVG: "#lefteye1",
    duration: 1,
    delay: 0.75,
  })
  .to("#mouth", {
    morphSVG: "#mouth1",
    duration: 1,
    delay: 0.75,
  })
  .to("#righteye", {
    morphSVG: "#righteye2",
    delay: 0.75,
    duration: 1,
  })
  .to("#lefteye", {
    morphSVG: "#lefteye2",
    delay: 0.75,
    duration: 1,
  })
  .to("#mouth", {
    morphSVG: "#mouth2",
    duration: 1,
    delay: 0.75,
  })
  .to("#righteye", {
    morphSVG: "#righteye",
    delay: 0.75,
    duration: 1,
  })
  .to("#lefteye", {
    morphSVG: "#lefteye",
    delay: 0.75,
    duration: 1,
  })
  .to("#mouth", {
    morphSVG: "#mouth",
    duration: 1,
    delay: 0.75,
  });
