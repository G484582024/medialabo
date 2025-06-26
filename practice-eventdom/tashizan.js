
document.getElementById("calc").addEventListener("click", function() {
    
    const left = parseInt(document.getElementById("left").value);
    const right = parseInt(document.getElementById("right").value);
  
    const sum = left + right;
    document.getElementById("answer").textContent = sum;
  });
  