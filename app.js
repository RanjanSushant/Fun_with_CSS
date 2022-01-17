const codeResultBlock = document.querySelector(".code-output");
const addFlexItemBtn = document.getElementById("flex-items");
const flexDisplayEl = document.getElementById("flex-display");
const justifyContentEl = document.getElementById("justify-content");
const alignItemsEl = document.getElementById("align-items");
const alignSelfEl = document.getElementById("align-self");
const childSelect = document.getElementById("child");

addFlexItemBtn.addEventListener("click", function (e) {
  // console.log(addFlexItemBtn.value)
  div = document.createElement("div");
  div.innerText = `Child Element ${codeResultBlock.childElementCount + 1}`;
  div.classList.add("add-border");
  codeResultBlock.appendChild(div);
  option = document.createElement("option");
  option.value = codeResultBlock.childElementCount - 1;
  option.innerText = `Child ${codeResultBlock.childElementCount}`;
  childSelect.appendChild(option);
  e.preventDefault();
});

flexDisplayEl.addEventListener("input", function () {
  // console.log(e.target)
  if (flexDisplayEl.checked) {
    //   console.log("checked")
    codeResultBlock.classList.add("flex-container");
    // document.querySelector(".code-output").style.justifyContent = "center"
  } else {
    codeResultBlock.classList.remove("flex-container");
  }
});

justifyContentEl.addEventListener("input", function () {
  if (codeResultBlock.classList.contains("flex-container")) {
    //   console.log(justifyContentEl.value)
    codeResultBlock.style.justifyContent = justifyContentEl.value;
  }
});

alignItemsEl.addEventListener("input", function () {
  if (codeResultBlock.classList.contains("flex-container")) {
    //   console.log(justifyContentEl.value)
    codeResultBlock.style.alignItems = alignItemsEl.value;
  }
});

childSelect.addEventListener("input", function () {
  if (codeResultBlock.classList.contains("flex-container")) {
    codeResultBlock.children[childSelect.value].style.alignSelf =
      alignSelfEl.value;
  }
});

alignSelfEl.addEventListener("input", function () {
  if (codeResultBlock.classList.contains("flex-container")) {
    //   console.log(justifyContentEl.value)
    // console.log(codeResultBlock.children);
    codeResultBlock.children[childSelect.value].style.alignSelf =
      alignSelfEl.value;
  }
});
