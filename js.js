function grid() {
    const targetElement = document.getElementById("container");

    for (let i = 0; i < 16; i++) {
      const divElementY = document.createElement("div");
      divElementY.style.display = "flex";
      divElementY.style.height = "calc(100% / 16)";
      divElementY.style.width = "calc(100% / 16)";
      divElementY.style.minHeight ="10px";
      divElementY.style.minWidth ="10px";
      //divElementY.style.border = "1px solid gray";
  
      for (let j = 0; j < 16; j++) {
        const divElementX = document.createElement("div");
        divElementX.style.height = "100%";
        divElementX.style.width = "100%";
        divElementX.style.border = "1px solid gray";
        divElementX.style.minHeight ="10px";
        divElementX.style.minWidth ="10px";
        divElementX.addEventListener("mouseover", function(){
            divElementX.style.backgroundColor ="black";
        });  
        divElementY.appendChild(divElementX);
      }
  
      targetElement.appendChild(divElementY);
    }
  }
  
  grid();