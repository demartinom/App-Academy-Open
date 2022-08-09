const addName = () => {
  const newElement = document.createElement("h1");
  newElement.innerText = "Matt DeMartino";
  document.body.appendChild(newElement);
  let name = document.querySelector("h1");
  name.setAttribute("id", "name");
};

window.onload = addName;
