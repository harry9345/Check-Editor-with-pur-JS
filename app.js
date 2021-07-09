let $ = document;
let editorDiv = $.getElementById("editor");
console.log(editorDiv);

function format(command, value) {
  document.execCommand(command, false, value);
  console.log(command, value);
}
function setUrl() {
  var url = document.getElementById("txtFormatUrl").value;
  var sText = document.getSelection();
  document.execCommand(
    "insertHTML",
    false,
    '<a href="' + url + '" target="_blank">' + sText + "</a>"
  );
  document.getElementById("txtFormatUrl").value = "";
}
