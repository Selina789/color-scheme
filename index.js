const colorValue = document.getElementById("color-picker");
const selectScheme = document.getElementById("select-drop");
const schemeButton = document.getElementById("button-picker");

schemeButton.addEventListener("click", function(){
  fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue.value.substring(1)}&mode=${selectScheme.value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log(selectScheme.value)
      for(let i = 0; i < 5; i++){
        document.getElementById(`col${i}`).style.background = data.colors[i].hex.value;
        document.getElementById(`row${i}`).textContent = data.colors[i].hex.value;
        document.getElementById(`row${i}`).classList.add("box")
        document.getElementById(`col${i}`).classList.remove("outline")
        document.getElementById(`row${i}`).classList.remove("outline")
        document.getElementById(`col${i}`).addEventListener("click", ()=>{
          navigator.clipboard.writeText(data.colors[i].hex.value)
      })
      document.getElementById(`row${i}`).addEventListener("click", ()=>{
          navigator.clipboard.writeText(data.colors[i].hex.value)
      })
      }
    })
})