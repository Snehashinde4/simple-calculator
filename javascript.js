function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    try {
      const expression = document.getElementById('display').value;
      const result = eval(expression);
      document.getElementById('display').value = result;
      addToHistory(expression + ' = ' + result);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
  
  function addToHistory(item) {
    const historyList = document.getElementById('history-list');
    const listItem = document.createElement('li');
    listItem.textContent = item;
    historyList.appendChild(listItem);
  }
  