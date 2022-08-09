const newFunctions = () => {
  const addName = () => {
    const newElement = document.createElement("h1");
    newElement.innerText = "Matt DeMartino";
    document.body.appendChild(newElement);
    let name = document.querySelector("h1");
    name.setAttribute("id", "name");
    name.setAttribute("class", "name");
  };

  const addUL = () => {
    const newElement = document.createElement("ul");
    document.body.appendChild(newElement);
    let name = document.querySelector("ul");
    name.setAttribute("class", "my-details");
  };

  const addLI = (array) => {
    array.forEach((element) => {
      const list = document.querySelector("ul");
      newElement = document.createElement("li");
      newElement.innerText = element;
      newElement.setAttribute("class", "detail");
      list.appendChild(newElement);
    });
  };
  const clock = () => {
    let clockDiv = document.createElement("div");
    setInterval(() => {
      clockDiv.innerHTML = Date();
    }, 1000);
    document.body.appendChild(clockDiv);
  };
  addName();
  addUL();
  addLI([
    "I live in America",
    "I have a dog",
    "I like to read",
    "I hope to become a front-end developer",
  ]);
  clock();
};

window.onload = newFunctions;
