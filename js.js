

function buttonInput(){
    let size = 16;
    document.getElementById("size").addEventListener("click", function(){
        let tableContainer = document.getElementById("container");
        tableContainer.innerHTML= "";
        size = prompt("Please enter the wished size for the grid", 16);
        grid(size);
    });
}

function grid(size) {
    const targetElement = document.getElementById("container");
    let cellSize = (400 - 2*size) / size; // size of a single gridcell based on the sizeparameter

    for (let i = 0; i < size; i++) {
      const divElementY = document.createElement("div");
      divElementY.style.display = "flex";
      divElementY.style.height = "${cellSize}px";
      divElementY.style.width = "400px"
  
      for (let j = 0; j < size; j++) {
        const divElementX = document.createElement("div");
        divElementX.style.height = "${cellSize}px";
        divElementX.style.width = "${cellSize}px";
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