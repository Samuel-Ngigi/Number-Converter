let memory = [];

function convertFromDecimal() {
  const decimal = parseInt(document.getElementById("decimal").value, 10);
  if (isNaN(decimal)) return;

  document.getElementById("binary").value = decimal.toString(2);
  document.getElementById("octal").value = decimal.toString(8);
  document.getElementById("hexadecimal").value = decimal.toString(16).toUpperCase();

  addToMemory(`Decimal: ${decimal}`);
}

function convertFromBinary() {
  const binary = document.getElementById("binary").value;
  if (!/^[01]+$/.test(binary)) return;

  const decimal = parseInt(binary, 2);
  document.getElementById("decimal").value = decimal;
  document.getElementById("octal").value = decimal.toString(8);
  document.getElementById("hexadecimal").value = decimal.toString(16).toUpperCase();

  addToMemory(`Binary: ${binary}`);
}

function convertFromOctal() {
  const octal = document.getElementById("octal").value;
  if (!/^[0-7]+$/.test(octal)) return;

  const decimal = parseInt(octal, 8);
  document.getElementById("decimal").value = decimal;
  document.getElementById("binary").value = decimal.toString(2);
  document.getElementById("hexadecimal").value = decimal.toString(16).toUpperCase();

  addToMemory(`Octal: ${octal}`);
}

function convertFromHex() {
  const hex = document.getElementById("hexadecimal").value;
  if (!/^[0-9A-Fa-f]+$/.test(hex)) return;

  const decimal = parseInt(hex, 16);
  document.getElementById("decimal").value = decimal;
  document.getElementById("binary").value = decimal.toString(2);
  document.getElementById("octal").value = decimal.toString(8);

  addToMemory(`Hexadecimal: ${hex}`);
}

function addToMemory(calculation) {
  memory.push(calculation);
  updateMemoryDisplay();
}

function updateMemoryDisplay() {
  const memoryList = document.getElementById("memoryList");
  memoryList.innerHTML = '';
  memory.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    memoryList.appendChild(li);
  });
}

function clearMemory() {
  memory = [];
  updateMemoryDisplay();
}

function clearAll() {
  document.getElementById("decimal").value = '';
  document.getElementById("binary").value = '';
  document.getElementById("octal").value = '';
  document.getElementById("hexadecimal").value = '';
  clearMemory();
}
