const addItem = document.getElementById("add-item");
const form = document.getElementById("create-new-item");
const insertList = document.getElementById("items");
const container = document.getElementById("container");

form.onsubmit = (event) => {
  event.preventDefault();

  const itemText = addItem.value;
  const itemId = itemText
    .replace(/[^\w\s]/gi, "")
    .split(" ")
    .join("-")
    .toLowerCase();

  const itemAlreadyExists = document.getElementById(itemId);

  if (itemAlreadyExists) {
    alert("O item ja existe!");
    return;
  }

  addItemToList(itemId, itemText);
  addItem.value = "";
};

const addItemToList = (itemId, itemText) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("input-wrapper");

  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";

  checkboxInput.id = itemId;

  const label = document.createElement("label");
  label.htmlFor = itemText;
  label.textContent = itemText;

  const button = document.createElement("button");
  button.classList.add("delete-button");

  itemDiv.appendChild(checkboxInput);
  itemDiv.appendChild(label);
  itemDiv.appendChild(button);

  button.addEventListener("click", () => {
    itemDiv.remove();
    itemDeleted();
  });

  insertList.appendChild(itemDiv);
};

function itemDeleted() {
  const itemDeleted = document.createElement("div");
  itemDeleted.classList.add("delete-alert");
  const exclamationImage = document.createElement("img");
  const closeMessage = document.createElement("span");
  const closeImage = document.createElement("img");

  exclamationImage.src = "assets/icons/alert.svg";
  closeMessage.textContent = "O item foi removido da lista";
  closeImage.id = "close-icon";
  closeImage.src = "assets/icons/x.svg";

  itemDeleted.appendChild(exclamationImage);
  itemDeleted.appendChild(closeMessage);
  itemDeleted.appendChild(closeImage);

  container.appendChild(itemDeleted);

  setTimeout(() => {
    itemDeleted.remove();
  }, 1000);
}
