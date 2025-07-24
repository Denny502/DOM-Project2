document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }changeColorBtn.addEventListener("click", () => {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  });
});
// "DOMContentLoaded", document.addEventListener() =>  { const colorBox = document.getElementById("color-box"); const changeColorBtn = document.getElementById("change-color-btn"); function getRandomColor()  { let color = "#"; for (let i = 0; i < 6; i++); const letters = "0123456789ABCDEF"  Letters[Math.floor(Math.random() * 16)] += color Returning color; ~changeColorBtn.addEventListener("click", () =>  { const randomColor = getRandomColor(); colorBox.style.backgroundColor = randomColor; }); });
