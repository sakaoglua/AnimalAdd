const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");
const resetBtn = document.getElementById("reset");
const langInp = document.querySelector("#lang-input");
const ol = document.querySelector(".lang-ol");

addBtn.onclick = () => {
  if (!langInp.value) {
    alert("There is no animal to add!");
  } else {
    ol.innerHTML += `<ol>${langInp.value}</ol>`;
    langInp.value = "";
    javaScriptControl(); 
  }
};

deleteBtn.onclick = () => {
  ol.childElementCount > 0
    ? ol.removeChild(ol.lastChild)
    : alert("There is no animal to delete");
};

resetBtn.onclick = () => {
  ol.innerHTML = "";
};

langInp.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    addBtn.onclick();
  }
  if (event.code === "Delete") {
    deleteBtn.onclick();
  }
});

window.onload = () => {
  langInp.focus();
  javaScriptControl;
};

const javaScriptControl = () => {
  document.querySelectorAll("ol").forEach((lang) => {
    const lowerCase = lang.textContent.toLowerCase();
    if (lowerCase === "javascript") {
      lang.setAttribute("id", "red");
    }
  });
};
