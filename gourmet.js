document.getElementById("submit").onclick = sendRequest;

// ジャンル名→ジャンルコードの対応表
const genreMap = {
  "居酒屋": "G001",
  "ダイニングバー・バル": "G002",
  "創作料理": "G003",
  "和食": "G004",
  "洋食": "G005",
  "イタリアン・フレンチ": "G006",
  "中華": "G007",
  "焼肉・ホルモン": "G008",
  "アジア・エスニック料理": "G009",
  "各国料理": "G010",
  "カラオケ・パーティ": "G011",
  "バー・カクテル": "G012",
  "ラーメン": "G013",
  "カフェ・スイーツ": "G014",
  "その他グルメ": "G015",
  "お好み焼き・もんじゃ": "G016",
  "韓国料理": "G017"
};

function sendRequest() {
  const input = document.getElementById("nameBox").value.trim();  // 入力値（ジャンル名）
  const genreCode = genreMap[input];

  if (!genreCode) {
    alert("正しいジャンル名を入力してください");
    return;
  }

  const url = `https://www.nishita-lab.org/web-contents/jsons/hotpepper/${genreCode}.json`;

  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    const text = xhr.responseText;

    try {
      const data = JSON.parse(text);
      showResult(data);
    } catch (e) {
      console.log("JSON解析エラー：", e);
      alert("データの取得に失敗しました。");
    }
  };

  xhr.onerror = function () {
    console.log("通信エラー");
  };

  xhr.open("GET", url);
  xhr.send();
}

function showResult(data) {
  const old = document.getElementById("result");
  if (old != null) {
    old.remove();
  }

  const div = document.createElement("div");
  div.id = "result";

  const shops = data.results.shop;

  if (!shops || shops.length === 0) {
    div.textContent = "該当店舗情報が見つかりませんでした。";
  } else {
    for (let i = 0; i < shops.length; i++) {
      const shop = shops[i];

      const nameP = document.createElement("p");
      nameP.textContent = "店名: " + shop.name;
      div.appendChild(nameP);

      const addressP = document.createElement("p");
      addressP.textContent = "住所: " + shop.address;
      div.appendChild(addressP);

      const line = document.createElement("hr");
      div.appendChild(line);
    }
  }

  document.body.appendChild(div);
}
