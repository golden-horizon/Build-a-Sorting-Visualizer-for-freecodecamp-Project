// ===== ELEMENTS =====
const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");

//  Display Button to None
sortBtn.style.display = 'none';

function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  return Array(5).fill(0).map((_) => generateElement());
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(element, arr) {
  element.innerHTML = "";
  for (const arrEl of arr) {
    element.innerHTML += `<span>${arrEl}</span>`;
  }
}

function isOrdered(num1, num2) {
  return num1 <= num2;
}

function swapElements(arr,idx) {
  if (!isOrdered(arr[idx],arr[idx+1])) {
    [arr[idx],arr[idx+1]] = [arr[idx+1],arr[idx]];
  }
}

function highlightCurrentEls(element, idx) {
  
    element.children[idx].style.border = "2px dashed red";
  element.children[idx + 1].style.border = "2px dashed red";
  
  
}

generateBtn.addEventListener("click", () => {
  const startingArray = document.getElementById("starting-array");
  const arrayContainer = document.getElementById("array-container");

  if (startingArray.textContent || arrayContainer.textContent) {
    startingArray.innerHTML = "";
    arrayContainer.innerHTML = "";
    arrayContainer.appendChild(startingArray);
  }

  let array = generateArray();
  fillArrContainer(startingArray, array);
  sortBtn.style.display = 'block';
});

sortBtn.addEventListener("click", () => {
  const startingArray = document.getElementById("starting-array");
  const arrayContainer = document.getElementById("array-container");
  let spanArray = Array.from(startingArray.children);
  let array = spanArray.map((span) => parseInt(span.textContent));

  if (startingArray.textContent || arrayContainer.textContent) {
    startingArray.innerHTML = "";
    arrayContainer.innerHTML = "";
  }

    fillArrContainer(startingArray, array);
    highlightCurrentEls(startingArray, 0);
    arrayContainer.appendChild(startingArray);

let swapped = true;
let ranges = 0;
while (swapped) {
  swapped = false;
  for (let idx = 0; idx < array.length - 1;idx++) {
    const stepContainer = generateContainer();
	if (ranges != 0) {
		fillArrContainer(stepContainer, array);
		highlightCurrentEls(stepContainer,idx);
		arrayContainer.appendChild(stepContainer);
	}
    
    if (!isOrdered(array[idx],array[idx+1])) {
      swapElements(array,idx);
      swapped = true;
    }
	ranges++;
	
  }
} 


const finalDivContainer = generateContainer();
fillArrContainer(finalDivContainer, array);
arrayContainer.appendChild(finalDivContainer);
  
  sortBtn.style.display = 'none';
});
