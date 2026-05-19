const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const header = document.querySelector(".site-header");

if (header) {
  let lastY = window.scrollY;
  let ticking = false;
  const threshold = 10;

  const updateHeader = () => {
    const currentY = window.scrollY;
    const delta = currentY - lastY;

    if (currentY < 20) {
      header.classList.remove("header-hidden");
    } else if (delta > threshold && currentY > header.offsetHeight + 40) {
      header.classList.add("header-hidden");
    } else if (delta < -threshold) {
      header.classList.remove("header-hidden");
    }

    lastY = currentY;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    },
    { passive: true }
  );
}
