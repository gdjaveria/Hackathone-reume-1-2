"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let skillBtn = document.querySelector("#skills-btn");
let skillList = document.querySelector(".skills");
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
