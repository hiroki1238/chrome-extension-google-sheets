// ボタンをクリックした時に、ページURL中の"/edit"と"/preview"を入れ替える（ボタンを押すだけでプレビューが見れる）

//ボタンを作成
var $button = $('<div class="switch-preview-button">🐥</div>')

//ボタンのクリック時のイベント
$button.on("click",function(){
  var url = location.href;
  url = url.replace("/edit","/TEMP")
  .replace("/preview","/edit")
  .replace("/TEMP","/preview"); //editとpreviewを入れ替えるには/TEMPのような仮の変数が必要
  location.href = url;
});

//ボタンを画面上に表示
$("body").append($button);