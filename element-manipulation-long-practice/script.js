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

  const addLI = () => {
    const list = document.querySelector("ul");
    
  };
  addName()
  addUL()
  addLI()
};
window.onload = newFunctions;
