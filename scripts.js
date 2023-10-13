/* Place your JavaScript in this file */
function checkPswd() {
    var confirmPassword = "E";
    var pswrd = document.getElementById("password").value;
    if (pswrd == confirmPassword) {
      goNext();
    } else {
      document.getElementById('password').value = ''
    }
  }

  function goNext () {
    window.location.replace('./math.html');
  }

  function goHome () {
    window.location.replace('https://ironx-studios.github.io/gxmes/frozen.html');
  }

  function goHomel () {
    window.location.replace('https://ironx-studios.github.io/gxmes/');
  }

  function goFreeze () {
    window.location.replace('https://ironx-studios.github.io/gxmes/math.html');
  }

  function openGame () {
    var win = window.open()
    var url = "https://awesome65432139.github.io/math/"
    var iframe = win.document.createElement('iframe')
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url
    win.document.body.appendChild(iframe)
    window.location.replace('https://portal.edinaschools.org/Home/Login?ReturnUrl=%2fSSO');
}

function openGamel () {
    var win = window.open()
    var url = "https://awesome65432139.github.io/math/"
    var iframe = win.document.createElement('iframe')
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url
    win.document.body.appendChild(iframe)
    window.location.replace('/index.html');
}
// Try later to create panic button
  function panic () {
    window.location.replace('https://portal.edinaschools.org/Home/Login?ReturnUrl=%2fSSO');
  }
