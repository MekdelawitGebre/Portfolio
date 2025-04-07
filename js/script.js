let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img,.services-container,.portfolio-box,.contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1,.about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p,.about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: [
    "Software Engineering Student",
    "Front-end Developer",
    "Tech Enthusiast ",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

document.querySelectorAll(".skill").forEach((skill) => {
  const circle = skill.querySelector("circle:nth-child(2)");
  const percent = skill.getAttribute("data-percent");
  const color = skill.getAttribute("data-color");

  // Set stroke color
  circle.style.stroke = color;

  // Animate
  setTimeout(() => {
    circle.style.strokeDashoffset = 283 - (283 * percent) / 100;
    skill.querySelector(".progress-value").textContent = percent + "%";
  }, 1000);
});

function sendMail() {
  const name = document.getElementById("name-field").value;
  const email = document.getElementById("email-field").value;
  const message = document.getElementById("message-field").value;

  const subject = encodeURIComponent("New Message from " + name);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  );

  const mailtoLink = `mailto:megdela21@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;

  alert(
    "Your message has been sent successfully! Thank you for contacting us."
  );
  return false;
}
