const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    addTask();
  }
}

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");

    let uncheckIcon = document.createElement("i");
    let checkedIcon = document.createElement("i");
    checkedIcon.className = "checked-icon fa-solid fa-circle-check";
    uncheckIcon.className = "uncheck-icon fa-regular fa-circle";
    li.appendChild(checkedIcon);
    checkedIcon.style.display = "none";

    li.appendChild(uncheckIcon);

    let taskText = document.createTextNode(inputBox.value);
    li.appendChild(taskText);

    listContainer.appendChild(li);

    let span = document.createElement("span");
    // span.className = "delete-icon";
    // span.innerHTML = '<i class="fas fa-trash"></i>';
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    // console.log(li);

    // Toggle task status when clicked
    li.addEventListener("click", function (e) {
      // console.log(li.classList.contains("checked"));
      if (li.classList.contains("checked")) {
        // console.log("checked");
        li.classList.remove("checked");
        uncheckIcon.style.display = "inline-block";
        checkedIcon.style.display = "none";
      } else {
        // console.log("unchecked");
        li.classList.add("checked");
        uncheckIcon.style.display = "none";
        checkedIcon.style.display = "inline-block";
      }

      if (e.target.tagName === "SPAN") {
        // console.log("e.target.tagName-----", e.target.tagName);
        e.target.parentElement.remove();
      }
      saveData();
    });
  }
  inputBox.value = "";
  saveData();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
