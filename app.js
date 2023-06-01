const tl = gsap.timeline();
const tl_repeat = gsap.timeline({ repeat: -1, repeatDelay: 0 });

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
MorphSVGPlugin.convertToPath(
  "circle, rect, eclipse, line, polygon, polyline, ellipse"
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
  .to("body", { overflow: "visible" })
  .to(".white", { display: "none" })
  .to(".herotext", { opacity: 1 })
  .to("header", { display: "block", opacity: 1 })
  .to(".animated_eclipse", { display: "none", opacity: 0, duration: 0.5 })
  .to(".bounceball_background", { display: "block" });

gsap.to(".animated_eclipse", { display: "block", opacity: 1 });

gsap.to(".animated_introtext", {
  duration: 3,
  display: "block",
  delay: 0.5,
  y: 340,
  stagger: 2.4,
});

tl_repeat
  .to("#head_introanimation", {
    morphSVG: "#head2_introanimation",
    duration: 0.5,
  })
  .to("#leftpupil_introanimation", {
    morphSVG: "#leftcheek_introanimation",
    duration: 0.5,
  })
  .to("#rightpupil_introanimation", {
    morphSVG: "#rightcheek_introanimation",
    duration: 0.5,
  })
  .to("#mouth_introanimation", {
    morphSVG: "#mouth2_introanimation",
    duration: 0.5,
  })
  .to("#lefteye_introanimation", {
    morphSVG: "#middleeye_introanimation",
    duration: 0.5,
  })
  .to("#righteye_introanimation", {
    morphSVG: "#middlepupil_introanimation",
    duration: 0.5,
  })
  .to("#head_introanimation", {
    morphSVG: "#head3_introanimation",
    duration: 0.5,
  })
  .to("#leftpupil_introanimation", {
    morphSVG: "#lefteyebrow_introanimation",
    duration: 0.5,
  })
  .to("#rightpupil_introanimation", {
    morphSVG: "#righteyebrow_introanimation",
    duration: 0.5,
  })
  .to("#mouth_introanimation", {
    morphSVG: "#mouth3_introanimation",
    duration: 0.5,
  })
  .to("#righteye_introanimation", {
    morphSVG: "#righteye2_introanimation",
    duration: 0.5,
  })
  .to("#lefteye_introanimation", {
    morphSVG: "#lefteye2_introanimation",
    duration: 0.5,
  })
  .to("#head_introanimation", {
    morphSVG: "#head_introanimation",
    duration: 0.5,
  })
  .to("#leftpupil_introanimation", {
    morphSVG: "#leftpupil_introanimation",
    duration: 0.5,
  })
  .to("#rightpupil_introanimation", {
    morphSVG: "#rightpupil_introanimation",
    duration: 0.5,
  })
  .to("#mouth_introanimation", {
    morphSVG: "#mouth_introanimation",
    duration: 0.5,
  })
  .to("#lefteye_introanimation", {
    morphSVG: "#lefteye_introanimation",
    duration: 0.5,
  })
  .to("#righteye_introanimation", {
    morphSVG: "#righteye_introanimation",
    duration: 0.5,
  });

gsap.to(".bounceball_animated", {
  duration: 15,
  delay: 16,
  motionPath: { path: ".animatedballpath" },
  align: ".animatedballpath",
  alignOrigin: [0.5, 0.5],
});

gsap.to(".cloud_upper", {
  y: -100,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".cloud_upper",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play reverse play reverse",
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
  },
});

tl_repeat
  .to("#righteye", {
    morphSVG: "#righteye1",
    duration: 0.5,
  })
  .to("#lefteye", {
    morphSVG: "#lefteye1",
    duration: 0.5,
    delay: 0.5,
  })
  .to("#mouth", {
    morphSVG: "#mouth1",
    duration: 0.5,
    delay: 0.5,
  })
  .to("#righteye", {
    morphSVG: "#righteye2",
    delay: 0.5,
    duration: 0.5,
  })
  .to("#lefteye", {
    morphSVG: "#lefteye2",
    delay: 0.5,
    duration: 0.5,
  })
  .to("#mouth", {
    morphSVG: "#mouth2",
    duration: 0.5,
    delay: 0.5,
  })
  .to("#righteye", {
    morphSVG: "#righteye",
    delay: 0.5,
    duration: 0.5,
  })
  .to("#lefteye", {
    morphSVG: "#lefteye",
    delay: 0.5,
    duration: 0.5,
  })
  .to("#mouth", {
    morphSVG: "#mouth",
    duration: 0.5,
    delay: 0.5,
  });

gsap.to(".tiny_eclipse", {
  y: 100,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".tiny_eclipse_mid",
    start: "top 75%",
    end: "top 0%",
    toggleActions: "play reverse play reverse",
    marker: true,
  },
});
gsap.to(".small_eclipse", {
  y: 100,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".tiny_eclipse_mid",
    start: "top 65%",
    end: "top 10%",
    toggleActions: "play reverse play reverse",
    marker: true,
  },
});
gsap.to(".large_eclipse", {
  y: 100,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".tiny_eclipse_mid",
    start: "top 55%",
    end: "top 20%",
    toggleActions: "play reverse play reverse",
    marker: true,
  },
});

const particleCount = 200;
const particles = [];
const container = document.querySelector(".particle_effect");

function getRandomPosition(min, max) {
  return Math.random() * (max - min) + min;
}

function animateParticles() {
  particles.forEach((particle) => {
    gsap.set(particle, {
      x: getRandomPosition(0, container.offsetWidth),
      y: getRandomPosition(0, container.offsetHeight),
    });
  });

  gsap.to(particles, {
    duration: 4,
    x: "random(-100, 1500)",
    y: "random(-1000, 000)",
    rotation: "random(-360, 360)",
    opacity: 0,

    stagger: {
      each: 0.1,
      repeat: -1,
      yoyo: false,
    },
  });
}

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  container.appendChild(particle);
  particles.push(particle);
}

animateParticles();

let brandingContainer = document.querySelector(".branding_container");
let cards = gsap.utils.toArray(".branding_card");

gsap.to(brandingContainer, {
  x: "-=" + window.innerWidth * (cards.length - 1), // Adjust the direction here
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll_container",
    pin: true,
    scrub: 1,
    end: () => "+=" + window.innerWidth * (cards.length - 1),
  },
});

gsap.to(".vertical_section", {
  scrollTrigger: {
    trigger: ".vertical_section",
    start: "top top",
    end: "+=100%",
    scrub: 1,
  },
});
