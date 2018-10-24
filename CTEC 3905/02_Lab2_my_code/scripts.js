window.onload=function(){
  let hello = document.getElementById("hello");

  hello.addEventListener("click", greeting());

  function greeting() {
    console.log('hello');
    hello.innerHTML = 'hello';
  }
}
