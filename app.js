const codeResultBlock = document.querySelector(".code-output")
const addFlexItemBtn = document.getElementById("flex-items")
const flexDisplayEl = document.getElementById("flex-display")
const justifyContentEl = document.getElementById("justify-content")

document.getElementById("flex-items").addEventListener("click", function(){
    // console.log(document.getElementById("flex-items").value)
    div1 = document.createElement('div')
    div1.innerText = "Child Element"
    div1.classList.add("add-border")
    codeResultBlock.appendChild(div1)
    div2 = document.createElement('div')
    div2.innerText = "Child Element"
    div2.classList.add("add-border")
    codeResultBlock.appendChild(div2)
  })
  
  flexDisplayEl.addEventListener("input", function() {
    // console.log(e.target)
    if(flexDisplayEl.checked) {
    //   console.log("checked")
      
      codeResultBlock.classList.add("flex-container")
      // document.querySelector(".code-output").style.justifyContent = "center"
    } else {
        codeResultBlock.classList.remove("flex-container")
    }
  })
  
  justifyContentEl.addEventListener("input", function() {
    if(codeResultBlock.classList.contains("flex-container")){
    //   console.log(justifyContentEl.value)
      codeResultBlock.style.justifyContent = justifyContentEl.value
    }
    
  })