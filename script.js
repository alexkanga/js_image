
console.log('start')
let container =  document.getElementById("container");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
console.log(first, second, third);
third.textContent = "JS";

container.style.cssText = 'height: 380px; width: 350px;  background-color: yellow; position: relative; margin: 0  auto';
first.style.cssText = 'height: 380px; width: 150px; background-color: #000;clip-path: polygon(0% 2%, 100% 49%, 100% 100%, 0% 100%);'
second.style.cssText = 'height: 180px; width: 350px; background-color: #000; position: absolute; top: 0;clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 43% 100%)';
third.style.cssText = 'display:flex; flex-direction: column ; justify-content: end; padding-right: 10px; text-align:  right; height: 200px; width: 200px; background:yellow; font-weight: 600; font-size: 7rem; color: #000; position: absolute; bottom: 0; right: 0px;'
