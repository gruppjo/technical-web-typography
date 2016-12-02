document.addEventListener('DOMContentLoaded', function (event) {
  console.log('dom loaded mofo');
  let print = function () {
    console.log('called');
    llmOut.innerHTML = llmIn.value.length;
  };
  let llmOut = document.getElementById('llm__output');
  let llmIn = document.getElementById('llm__input');
  debugger;
  llmIn.addEventListener('keyup', print);

  print();

})

