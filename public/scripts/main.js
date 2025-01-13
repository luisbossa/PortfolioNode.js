/*----------------- RESPONSIVE MENU MOBILE ----------------*/

const openMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  const body = document.body;

  toggle.addEventListener("click", () => {
    const isMenuOpen = nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
    body.classList.toggle("no-scroll", isMenuOpen);
  });

  nav.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("show-menu");
      toggle.classList.remove("show-icon");
      body.classList.remove("no-scroll");
    });
  });
};

openMenu("open-menu", "menu-mobile");

/*----------------- ACCORDION SECTION ----------------*/

document.querySelectorAll(".exp-trigger").forEach((trigger) => {
  trigger.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const isOpen = content.classList.toggle("open");
    this.querySelector(".exp-down-arrow").style.display = isOpen
      ? "none"
      : "block";
    this.querySelector(".exp-up-arrow").style.display = isOpen
      ? "block"
      : "none";
  });
});

/*----------------- HOVER VIDEO 1, 2, 3 ----------------*/

const videos = [
  { videoId: "video1", containerClass: ".video-container1" },
  { videoId: "video2", containerClass: ".video-container2" },
  { videoId: "video3", containerClass: ".video-container3" },
];

videos.forEach(({ videoId, containerClass }) => {
  const video = document.getElementById(videoId);
  const videoContainer = document.querySelector(containerClass);

  videoContainer?.addEventListener("mouseover", () => {
    video?.play();
    videoContainer.classList.add("paused");
  });

  videoContainer?.addEventListener("mouseout", () => {
    video?.pause();
    videoContainer.classList.remove("paused");
  });
});
