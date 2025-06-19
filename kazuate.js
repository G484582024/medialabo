// 答え（1〜10の乱数）
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 正解判定フラグ（ゲーム終了を覚えておく）
let seikai = false;

// 予想を4回実行する（将来は削除）
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei()
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;

  if (kaisu >= 4 || seikai) {
    console.log("答えは " + kotae + " でした．すでにゲームは終わっています");
    return;
  }

  kaisu++;
  console.log(kaisu + "回目の予想: " + yoso);

  if (yoso === kotae) {
    console.log("正解です．おめでとう!");
    seikai = true;
  } else {
    if (kaisu === 3) {
      console.log("まちがい．残念でした答えは " + kotae + " です．");
    } else if (yoso < kotae) {
      console.log("まちがい．答えはもっと大きいですよ");
    } else if (yoso > kotae) {
      console.log("まちがい．答えはもっと小さいですよ");
    }
  }
}
