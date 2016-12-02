document.addEventListener('DOMContentLoaded', function (event) {

  // llm
  let print = function () {
    console.log('called');
    llmOut.textContent = llmIn.value.length;
  };
  let llmOut = document.getElementById('llm__output');
  let llmIn = document.getElementById('llm__input');
  llmIn.addEventListener('keyup', print);
  print();

  // sdim
  let sdim = document.getElementById('sdim');
  let resize = function () {
    sdim.textContent = window.innerWidth + 'x' + window.innerHeight;
  }
  let lastTimeout;
  window.addEventListener('resize', function () {
    if (!lastTimeout) {
      lastTimeout = setTimeout(function () {
        lastTimeout = null;
        resize();
      }, 50);
    }
  });
  resize();
})

