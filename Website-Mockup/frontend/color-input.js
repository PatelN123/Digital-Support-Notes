const changeColor = () => {
    const bgColor = document.getElementById("bgColor").value;
    const color_demo = document.getElementById("color_demo");
  
    color_demo.style.background = "#" + bgColor;
  };

bgColor.addEventListener("input", changeColor);
bgColor.addEventListener("propertychange", changeColor);