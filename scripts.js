var frozen = false;
/* Place your JavaScript in this file */
function checkPswd() {
    var confirmPassword = "E";
    var pswrd = document.getElementById('password').value;
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
    frozen = true;
  }

  function goFreeze () {
    frozen = true;
  }

  function openGame () {
      if (frozen == false) {
        var win = window.open()
        var url = "https://awesome65432139.github.io/math/"
        var iframe = win.document.createElement('iframe')
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.style.padding = "none";
        iframe.src = url
        win.document.body.appendChild(iframe)
        window.location.replace('https://portal.edinaschools.org/Home/Login?ReturnUrl=%2fSSO');
      } else {
          window.location.replace('https://ironx-studios.github.io/gxmes/');
          frozen = false;
      }
}

  function openGamel () {
      if (frozen == false) {
        var winl = window.open()
        var urll = "https://awesome65432139.github.io/math/"
        var iframel = win.document.createElement('iframel')
        iframel.style.width = "100%";
        iframel.style.height = "100%";
        iframel.style.border = "none";
        iframel.style.padding = "none";
        iframel.src = urll
        winl.document.body.appendChild(iframel)
        window.location.replace('https://ironx-studios.github.io/gxmes/');
      } else {
          window.location.replace('https://ironx-studios.github.io/gxmes/');
          frozen = false;
      }
}
// Try later to create panic button
  function panic () {
    window.location.replace('https://portal.edinaschools.org/Home/Login?ReturnUrl=%2fSSO');
  }
