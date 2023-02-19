function rollTwoDSix(type) {
  var first = (Math.floor(Math.random() * 6) +1);
  var second = (Math.floor(Math.random() * 6) +1);
  document.getElementById('display-result').textContent = "Results: " + 
    first + " + " + 
    second + " + " + 
    document.getElementById(type).value + " = "+ 
    (first + second + parseInt(document.getElementById(type).value));
}