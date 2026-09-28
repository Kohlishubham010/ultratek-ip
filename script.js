// counter start
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const runCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const speed = 200; // lower = faster

    const updateCount = () => {
      const increment = target / speed;
      count += increment;

      if (count < target) {
        counter.innerText = Math.ceil(count).toLocaleString();
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => observer.observe(counter));
});

//    scroll button start
let mybutton = document.getElementById("scroll-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


