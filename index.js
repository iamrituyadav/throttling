function appendData() {
  let text = document.getElementById("inputText").value;
  let h1 = document.createElement("h1");
  h1.innerText = text;
  document.getElementById("container").append(h1);
}

function throttle(function1, limit = 2000) {
  let timer = null;

  return function () {
    if (!timer) {
      function1();
      timer = setTimeout(() => {
        timer = null;
      }, 2000);
    }
  };
}

const throttleFunc = throttle(appendData, 3000);

document.getElementById("inputText").addEventListener("change", throttleFunc);
