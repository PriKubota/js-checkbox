// modeによって非活性にする
const mode = 1;

if (mode == 1) {
  // ラーメンにはチェックする
  document.getElementById("ramen").checked = true;
  // 餃子と焼き肉を非活性
  b = document.getElementById("b");
  b.checked = true;
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.getElementById("btn").addEventListener(
      "click",
      function () {
        console.log("スタートするよ！！");
        let result = [];
        let foods = document.getElementsByName("food");
        for (let i = 0; i < foods.length; i++) {
          let food = foods.item(i);
          if (food.checked) {
            result.push(food.value);
          }
        }

        alert(result);
      },
      false
    );
  },
  false
);
