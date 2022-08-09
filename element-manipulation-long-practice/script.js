const newFunctions = () => {
  const addName = () => {
    const newElement = document.createElement("h1");
    newElement.innerText = "Matt DeMartino";
    document.body.appendChild(newElement);
    let name = document.querySelector("h1");
    name.setAttribute("id", "name");
  };

  const addUL = () => {
    const newElement = document.createElement("ul");
    document.body.appendChild(newElement);
    let name = document.querySelector("ul");
    name.setAttribute("id", "list");
  };

  const addLI = (text) => {
    const list = document.querySelector("ul");
    newElement = document.createElement("li");
    newElement.innerText = text;
    list.appendChild(newElement);
  };
  addName();
  addUL();
  addLI("I live in America");
};
window.onload = newFunctions;
