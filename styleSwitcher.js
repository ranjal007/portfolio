const links = document.querySelectorAll(".alternate-style"),
  totalLinks = links.length;
function setActiveStyle(color) {
  // console.log(color);
  for (let i = 0; i < totalLinks; i++) {
    if (color === links[i].getAttribute("title")) {
      links[i].removeAttribute("disabled");
    } else {
      links[i].setAttribute("disabled", "true");
    }
  }
}

//body skin

document.body.className = "dark";
const bodySkin = document.querySelectorAll(".body-skin"),
  totalBodySkins = bodySkin.length;

for (let i = 0; i < totalBodySkins; i++) {
  bodySkin[i].addEventListener("change", function () {
    if (this.value === "dark") {
      document.body.className = "dark";
    } else {
      document.body.className = "";
      // document.body.classList.add("light");
    }
  });
}

document
  .querySelector(".toggle-style-switcher")
  .addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
  });
