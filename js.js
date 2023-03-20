let defineColor = 0;

function colorGrid(divElement) {
  divElement.addEventListener("mousedown", function() {
    if (defineColor === 0) {
      divElement.style.backgroundColor = "black";
    } else if (defineColor === 1) {
      divElement.style.backgroundColor = generateRandomColor();
    } else if (defineColor === 2) {
      divElement.style.backgroundColor = "white";
    }
  });
}

function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`
}



function buttonInput(){
    let size = 16;
    document.getElementById("size").addEventListener("click", function(){
        let tableContainer = document.getElementById("container");
        tableContainer.innerHTML= "";
        size = prompt("Please enter the wished size for the grid", 16);
        while (size<=0 || size >200){
          size = prompt("Please enter a value between 1 and 200");
        }
        grid(size, defineColor);
    });
}

function buttonRainbowEraseBlack(){
  document.getElementById("erase").addEventListener("click",function(){
    defineColor = 2;
  })
  document.getElementById("rainbow").addEventListener("click",function(){
    defineColor = 1;
  })
  document.getElementById("black").addEventListener("click", function(){
    defineColor = 0;
  });
  return defineColor;
}

function grid(size, define) {
    const targetElement = document.getElementById("container");
    let cellSize = 400/size; 
    for (let i = 0; i < size; i++) {
      const divElementY = document.createElement("div");
      divElementY.style.display = "flex";
      divElementY.style.height = `${cellSize}px`;
      divElementY.style.width = "400px"

  
      for (let j = 0; j < size; j++) {
        const divElementX = document.createElement("div");
        divElementX.style.height = `${cellSize}px`;
        divElementX.style.width = `${cellSize}px`;
        colorGrid(divElementX);        
        divElementY.appendChild(divElementX);
      }
  
      targetElement.appendChild(divElementY);
    }
  }

  buttonInput();
  buttonRainbowEraseBlack();
  grid(16, defineColor);

