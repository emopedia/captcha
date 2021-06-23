var captcha = document.getElementById("fake-captcha");

var passOrFail = function() {
  var pass = Math.round(Math.random());
  return pass ? "fail";
}

captcha.onclick = function() {
  if (captcha.className.includes("loading")) return;
  
  captcha.className = "";
  
  captcha.className += "loading";
  
  setTimeout(function() {
    captcha.className = captcha.className.replace("loading", "");
    captcha.className += passOrFail();
  }, Math.floor((Math.random() * 1000) + 1000));
}
