let correct = Math.floor(Math.random() * 10) + 1; 
let count = 0;

console.log("正解（デバッグ用）: " + correct);


document.getElementById("submit").addEventListener("click", hantei);

function hantei() {
  
  const input = document.getElementById("input").value;
  const yoso = parseInt(input);
  count += 1;

  
  document.getElementById("kaisu").textContent = count;
  document.getElementById("answer").textContent = yoso;

  const result = document.getElementById("result");

  if (count > 3) {
    result.textContent = "答えは " + correct + " でした。ゲームはすでに終わっています。";
    return;
  }

  if (yoso === correct) {
    result.textContent = "正解です！おめでとう！";
  } else if (yoso < correct) {
    result.textContent = "まちがい！もっと大きい数です。";
  } else if (yoso > correct) {
    result.textContent = "まちがい！もっと小さい数です。";
  }

  if (count === 3 && yoso !== correct) {
    result.textContent += " 答えは " + correct + " でした。";
  }
}
