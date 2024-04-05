function appendToDisplay(value) {
    document.getElementById("result").value += value;
  }
  
  function calculate() {
    var result = document.getElementById("result").value;
    var solution = eval(result);
    document.getElementById("result").value = solution;
  }
  
  function clearDisplay() {
    document.getElementById("result").value = "";
  }