

function buttonInput(){
    let size = 16;
    document.getElementById("size").addEventListener("click", function(){
        let tableContainer = document.getElementById("container");
        tableContainer.innerHTML= "";
        size = prompt("Please enter the wished size for the grid", 16);
        while (size<=0 || size >200){
          size = prompt("Please enter a value between 1 and 200");
        }
        grid(size);
    });
}

function grid(size) {
    const targetElement = document.getElementById("container");
    let cellSize = 400/size; 
    for (let i = 0; i < size; i++) {
      const divElementY = document.createElement("div");
      divElementY.style.display = "flex";
      divElementY.style.height = `${cellSize}px`;
      divElementY
      divElementY.style.width = "400px"

  
      for (let j = 0; j < size; j++) {
        const divElementX = document.createElement("div");
        divElementX.style.height = `${cellSize}px`;
        divElementX.style.width = `${cellSize}px`;
        divElementX.addEventListener("mouseover", function(){
            divElementX.style.backgroundColor ="black";
        });  
        divElementY.appendChild(divElementX);
      }
  
      targetElement.appendChild(divElementY);
    }
  }
  grid(16);
buttonInput();