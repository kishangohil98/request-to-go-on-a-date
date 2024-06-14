const yesBtn = document.getElementById("yes");

const noBtn = document.getElementById("no");

const yayText = document.getElementById("yay");

const yayText1 = document.getElementById("yay1");

const can1 = document.getElementById("can1");

const can = document.getElementById("can");
const celebration = document.getElementById("celebration");

noBtn.addEventListener("click", () => {
  yesBtn.style.width = `${yesBtn.offsetWidth + 40}px`;

  yesBtn.style.height = `${yesBtn.offsetHeight + 40}px`;

  yayText.style.display = "none";
  yayText1.style.display = "none";

  can.style.display = "block";
  can1.style.display = "block";
});

yesBtn.addEventListener("click", () => {
  yayText.style.display = "block";

  yayText1.style.display = "block";

  can.style.display = "none";

  can1.style.display = "none";
  yesBtn.style.height = `50px`;
  yesBtn.style.width = `70px`;

  celebration.style.display = "flex";
  setTimeout(() => {
    celebration.style.display = "none";
  }, 4000);
});
