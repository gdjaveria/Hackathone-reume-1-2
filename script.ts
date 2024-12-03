
let skillBtn = document.querySelector("#skills-btn") as HTMLButtonElement;
let skillList = document.querySelector(".skills") as HTMLElement;

skillBtn.innerHTML = "Hide Skills";
skillList.style.display = "block";

skillBtn.addEventListener("click", () => {
  const isHidden = skillList.style.display === "none";

 if (isHidden) {
    skillList.style.display = "block";
   skillBtn.innerHTML = "Hide Skills";
  } 
  else {
   skillList.style.display = "none";
  skillBtn.innerHTML = "Show Skills";
    }
});